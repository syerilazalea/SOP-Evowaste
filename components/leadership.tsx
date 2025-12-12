"use client"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Leadership() {
  const primaryGreen = "#84AE92"

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section
      id="leadership"
      className="py-24 bg-white"
      data-aos="fade-up" // animasi section muncul dari bawah
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className="relative"
            data-aos="fade-right" // animasi gambar dari kanan
            data-aos-delay="100"
          >
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-lg -z-10"
              style={{ backgroundColor: primaryGreen }}
            ></div>
            <img
              src="/professional-business-team-working-together.jpg"
              alt="company team"
              className="rounded-lg w-full shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div data-aos="fade-left" data-aos-delay="200"> {/* animasi teks dari kiri */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight text-balance">
              Layanan Perusahaan untuk Karyawan
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              PT Evowaste menyediakan layanan dan SOP yang mendukung karyawan dalam melaksanakan tugas sehari-hari secara efisien,
              aman, dan sesuai regulasi perusahaan.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Layanan ini mencakup prosedur operasional inti, pengelolaan alat produksi, serta panduan K3 dan administrasi, sehingga
              karyawan dapat bekerja optimal dan perusahaan berjalan lancar.
            </p>

            {/* Highlight Box */}
            <div
              className="text-white p-8 rounded-lg mb-8"
              style={{ backgroundColor: primaryGreen }}
              data-aos="zoom-in" // animasi highlight box
              data-aos-delay="300"
            >
              <p className="font-semibold mb-3">Dukungan dan Panduan Lengkap</p>
              <p className="text-sm mb-4 text-green-50">
                Memastikan setiap karyawan memahami alur kerja, SOP, dan prosedur keselamatan untuk mendukung produktivitas perusahaan.
              </p>
              <p className="text-sm font-bold">Hubungi HRD: +62 813 8905 9343</p>
            </div>

            {/* <Button
              className="px-8 py-3 text-base font-semibold text-white"
              style={{ backgroundColor: primaryGreen }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#6f977a")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = primaryGreen)}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Pelajari Layanan
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
