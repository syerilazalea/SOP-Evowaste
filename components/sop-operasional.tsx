"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function SopOperasinal() {
  const [selectedSop, setSelectedSop] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const primaryGreen = "#84AE92"

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  const sops = [
    {
      title: "SOP 1 – Penerimaan dan Verifikasi Sampah",
      tujuan: "Memastikan sampah sesuai izin operasional.",
      prosedur:
        "Pemeriksaan dokumen (manifest), verifikasi jenis sampah, penimbangan digital, dan pencatatan sumber. Penolakan dilakukan jika sampah tidak sesuai izin.",
      regulasi: "UU 18/2008 Pasal 29.",
    },
    {
      title: "SOP 2 – Pemilahan dan Pengklasifikasian Sampah",
      tujuan: "Memisahkan sampah secara akurat untuk dialirkan ke modul pengolahan yang tepat (Sorter, Crusher, Decomposer).",
      prosedur:
        "Pemisahan manual/otomatis menjadi kategori Organik, Plastik, Rubber/Kain, B3, dan Reuse.",
      regulasi: "UU 18/2008 Pasal 13.",
    },
    {
      title: "SOP 3 – Reduksi Timbulan Sampah",
      tujuan: "Mengurangi volume sampah yang masuk ke fasilitas (upstream).",
      prosedur: "Audit timbulan sampah mitra, program edukasi 3R, dan pengelolaan program loyalitas Eco Point Reward untuk pelanggan.",
      regulasi: "Prinsip 3R dalam UU 18/2008.",
    },
    {
      title: "SOP 4 – Pemanfaatan Kembali (Reuse)",
      tujuan: "Menyalurkan barang non-sampah yang masih layak pakai.",
      prosedur:
        "Sortasi barang (Grade A/B/C), pembersihan/perbaikan minor, pencatatan digital, dan penyaluran ke mitra donasi.",
      regulasi: "Prinsip Reuse dalam UU 18/2008.",
    },
    {
      title: "SOP 5 – Pengelolaan Toko Evomart",
      tujuan: "Menstandarkan penjualan, promosi, dan administrasi produk daur ulang.",
      prosedur:
        "Stock opname, pembaruan stok online, display produk, pelaporan penjualan.",
      regulasi: "UU 8/1999 Perlindungan Konsumen.",
    },
    {
      title: "SOP 6 – Distribusi dan Logistik Produk",
      tujuan: "Memastikan produk terkirim dengan aman.",
      prosedur:
        "Verifikasi order, QC produk, pengemasan transportasi, penerbitan surat jalan, prosedur muat-bongkar (loading/unloading), dan pemeriksaan kelaikan kendaraan angkut.",
      regulasi: "UU 22/2009 tentang LLAJ.",
    },
  ]

  const current = sops[selectedSop]

  const sections = [
    { label: "Tujuan", content: current.tujuan },
    { label: "Prosedur", content: current.prosedur },
    { label: "Regulasi", content: current.regulasi },
  ]

  return (
    <section className="py-28 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-14" data-aos="fade-right">
          <div className="flex items-center gap-3">
            <div className="w-2 h-10 rounded-full" style={{ backgroundColor: primaryGreen }}></div>
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
              Standar Operasional Prosedur (SOP)
            </h2>
          </div>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Pilih salah satu SOP pada daftar di samping untuk melihat rincian tujuan,
            prosedur, dan dasar regulasi yang berlaku.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT MENU */}
          <div
            className="bg-white shadow-sm border border-gray-200 rounded-xl p-4 h-fit sticky top-20"
            data-aos="fade-up"
          >
            <h4 className="font-semibold text-gray-700 mb-4">Daftar SOP</h4>

            {sops.map((sop, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedSop(idx)
                  setOpenIndex(null)
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg mb-2 transition font-medium text-sm
                  ${selectedSop === idx
                    ? `bg-[${primaryGreen}]/80 text-white shadow`
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                  }`}
              >
                {sop.title}
              </button>
            ))}
          </div>

          {/* DETAIL PANEL */}
          <div
            className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              {current.title}
            </h3>

            {sections.map((sec, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg mb-5 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-800">{sec.label}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all overflow-hidden bg-gray-50 ${
                    openIndex === idx ? "max-h-40 py-4 px-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{sec.content}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
