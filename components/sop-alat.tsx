"use client"

import { Briefcase, CheckSquare, TrendingUp } from "lucide-react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Experience() {
  const primaryGreen = "#84AE92"

  const services = [
    {
      icon: Briefcase,
      title: "Menjamin Keberlangsungan Operasional",
      description:
        "SOP EvoWaste dirancang untuk memastikan seluruh proses operasional berjalan lancar dan mendukung keberlangsungan perusahaan.",
    },
    {
      icon: CheckSquare,
      title: "Keselamatan Kerja Prioritas Utama",
      description:
        "SOP EvoWaste menjamin keselamatan kerja setiap karyawan, meminimalkan risiko, dan menciptakan lingkungan kerja yang aman.",
    },
    {
      icon: TrendingUp,
      title: "Berbasis Regulasi Resmi",
      description:
        "SOP EvoWaste disusun sesuai regulasi dan UU yang berlaku, memastikan setiap kegiatan perusahaan patuh terhadap hukum.",
    },
  ]

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section id="experience" className="py-24 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-gray-800 text-xs font-bold tracking-widest mb-6">
          STANDAR OPERASIONAL PROSEDUR
        </h2>
        <p className="text-center text-gray-600 mb-20 max-w-2xl mx-auto leading-relaxed">
          PT Evowaste mengatur prosedur bisnis, operasional alat, dan SOP pendukung agar kegiatan operasional berjalan sesuai regulasi dan prinsip 3R.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={`${idx * 150}`} // staggered animasi tiap card
              >
                <div className="flex justify-center mb-8">
                  <div
                    className="p-5 rounded-lg"
                    style={{ backgroundColor: `${primaryGreen}33` }} // 33 = opacity ~20%
                  >
                    <Icon className="w-8 h-8" style={{ color: primaryGreen }} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-4 tracking-wide">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
