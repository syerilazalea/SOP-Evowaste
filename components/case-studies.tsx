"use client";

import Link from "next/link";
import { Briefcase, CheckSquare, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CaseStudies() {
  const primaryColor = "#B0DB9C";

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const sopCases = [
    {
      icon: Briefcase,
      title: "SOP OPERASIONAL INTI",
      subtitle: "Alur penerimaan sampah hingga distribusi produk",
      image: "/9.jpg",
      link: "/sop/sop-operasional",
    },
    {
      icon: CheckSquare,
      title: "SOP PRODUKSI & OPERASI ALAT",
      subtitle: "Pengoperasian teknis mesin produksi sesuai alur kerja",
      image: "/7.jpg",
      link: "/sop/sop-alat",
    },
    {
      icon: TrendingUp,
      title: "SOP PENUNJANG",
      subtitle: "Keselamatan, legalitas, dan administrasi perusahaan",
      image: "/1.JPG",
      link: "/sop/sop-k3",
    },
  ];

  // State untuk overlay visibility tiap card
  const [overlayVisible, setOverlayVisible] = useState(
    Array(sopCases.length).fill(true)
  );

  const handleAnimationEnd = (idx: number) => {
    // overlay hilang setelah fade-in AOS
    const newOverlay = [...overlayVisible];
    newOverlay[idx] = false;
    setOverlayVisible(newOverlay);
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-gray-800 text-xs font-bold tracking-widest mb-6">
          SOP KAMI
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {sopCases.map((caseItem, idx) => (
            <Link key={idx} href={caseItem.link} className="group">
              <div
                className="relative flex flex-col h-full rounded-xl overflow-hidden 
                           bg-white/10 backdrop-blur-md border border-white/20 shadow-md 
                           transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                onAnimationEnd={() => handleAnimationEnd(idx)}
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden flex-shrink-0">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover opacity-80 transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  {/* Overlay putih */}
                  {overlayVisible[idx] && (
                    <div
                      className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                      style={{ background: "rgba(255, 255, 255, 0.2)" }}
                    />
                  )}
                </div>

                {/* Text */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-500 ease-in-out group-hover:text-green-700">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-800 text-sm flex-1 leading-relaxed">
                    {caseItem.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
