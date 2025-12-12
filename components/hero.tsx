"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const primaryColor = "#B0DB9C"

  const slides = [
    {
      title: "EvoWaste: Solusi Pengolahan Limbah",
      subtitle: "Mengubah limbah menjadi produk berkualitas",
      description:
        "Kami mengelola limbah rumah tangga dan industri menjadi batu bata ramah lingkungan untuk membangun masa depan hijau.",
      image: "/3.jpg",
      cta: "Pelajari Lebih Lanjut",
    },
    {
      title: "Inovasi dalam Pengolahan Limbah",
      subtitle: "Dari limbah menjadi peluang",
      description:
        "Dengan teknologi modern, limbah yang sebelumnya menjadi masalah kini dapat menjadi bahan bangunan berkualitas tinggi.",
      image: "/5.jpg",
      cta: "Lihat Proses Kami",
    },
    {
      title: "SOP dan Standar Mutu Terpercaya",
      subtitle: "Keamanan, kualitas, dan efisiensi",
      description:
        "EvoWaste menerapkan SOP ketat untuk setiap proses, memastikan produk akhir aman, berkualitas, dan ramah lingkungan.",
      image: "/4.JPG",
      cta: "Telusuri SOP Kami",
    },
  ]

  return (
<section className="relative w-full h-screen">
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    slidesPerView={1}
    loop
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    className="w-full h-full"
  >
    {slides.map((slide, idx) => (
      <SwiperSlide key={idx} className="w-full h-full relative">
        {/* Background image */}
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"></div>


        {/* Content: absolute center */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-8 md:px-16 lg:px-24 max-w-3xl mx-auto">
          <div>
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white"
            >
              {slide.title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-gray-200 mb-6 leading-relaxed"
            >
              {slide.description}
            </p>
            {/* <Button
              style={{ backgroundColor: primaryColor, color: "#000" }}
              className="px-8 py-3 font-semibold hover:brightness-90 transition"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              {slide.cta}
            </Button> */}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


  )
}
