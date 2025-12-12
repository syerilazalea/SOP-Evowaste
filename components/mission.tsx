"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

interface MissionProps {
  title: string
  description: string
  buttonText?: string
}

export default function Mission({ title, description, buttonText = "Lihat Detail" }: MissionProps) {
  const primaryGreen = "#84AE92"

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <section
  className="py-32 text-white text-center relative overflow-hidden"
  style={{
    backgroundImage: "url('/6.JPG')", // ganti dengan path gambarmu
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay glass hijau */}
  <div
    className="absolute inset-0"
    style={{
      backgroundColor: "rgba(132, 174, 146, 0.25)", // hijau transparan
      backdropFilter: "blur(15px)",
      WebkitBackdropFilter: "blur(10px)",
      border: "1px solid rgba(132, 174, 146, 0.3)",
      borderRadius: "16px",
    }}
  ></div>

  {/* Accent elements */}
  <div
    className="absolute top-10 left-10 w-32 h-32 rounded-full"
    style={{ backgroundColor: "#84AE921A" }}
  ></div>
  <div
    className="absolute bottom-10 right-10 w-40 h-40 rounded-full"
    style={{ backgroundColor: "#84AE921A" }}
  ></div>

  <div className="max-w-4xl mx-auto px-4 relative z-10">
    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-balance" data-aos="fade-up">
      {title}
    </h3>
    <p className="text-gray-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay={100}>
      {description}
    </p>
    {/* <Button
      className="text-white px-8 py-3 text-base font-semibold"
      style={{ backgroundColor: "#84AE92" }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#6f977a")}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#84AE92")}
      data-aos="fade-up"
      data-aos-delay={200}
    >
      {buttonText}
    </Button> */}
  </div>
</section>


  )
}
