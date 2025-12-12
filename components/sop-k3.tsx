"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function SopK3() {
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
      title: "SOP 13 – Keselamatan dan Kesehatan Kerja (K3)",
      tujuan: "Menjamin keselamatan kerja di seluruh area pabrik.",
      prosedur:
        "Wajib menggunakan APD, safety briefing harian, inspeksi alat, pelaporan insiden, dan manajemen hazard (bahaya).",
      regulasi:
        "UU No. 1 Tahun 1970 tentang Keselamatan Kerja dan UU No. 13 Tahun 2003 (jo. UU Cipta Kerja) tentang Ketenagakerjaan.",
    },
    {
      title: "SOP 14 – Tanggap Darurat (Emergency Response Plan)",
      tujuan:
        "Memberikan panduan jelas saat terjadi kondisi darurat (kebakaran, ledakan mesin, tumpahan B3, kecelakaan kerja).",
      prosedur:
        "Prosedur evakuasi (jalur dan titik kumpul), tim tanggap darurat (P2K3), penggunaan APAR, spill kit, dan prosedur pelaporan insiden (maksimal 1x24 jam ke Disnaker).",
      regulasi:
        "Implementasi wajib dari UU No. 1/1970 dan PP No. 50/2012 tentang Penerapan SMK3.",
    },
    {
      title: "SOP 15 – Pengelolaan Limbah B3",
      tujuan: "Menangani limbah B3 (misal: oli bekas mesin, abu B3 jika ada) sesuai regulasi.",
      prosedur:
        "Pemisahan limbah B3, pelabelan, penyimpanan di TPS B3 berizin, dan serah terima ke pihak pengangkut/pengolah B3 berizin.",
      regulasi:
        "PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup (Bab VII).",
    },
    {
      title: "SOP 16 – Pemantauan Lingkungan",
      tujuan:
        "Memastikan operasional pabrik (emisi, limbah cair, kebisingan) tidak mencemari lingkungan.",
      prosedur:
        "Jadwal pemantauan emisi cerobong (dari Plasma Pyrolysis), pemantauan kualitas air lindi (jika ada), dan uji kebisingan.",
      regulasi: "UU No. 32 Tahun 2009 (PPLH).",
    },
    {
      title: "SOP 17 – Pemeliharaan dan Kalibrasi Alat",
      tujuan: "Menjaga performa dan keandalan seluruh mesin produksi.",
      prosedur:
        "Jadwal perawatan preventif (bulanan), logbook alat, pelaporan kerusakan, dan jadwal kalibrasi alat ukur (timbangan, sensor) 2x per tahun oleh pihak tersertifikasi.",
      regulasi: "Regulasi: UU No. 1 Tahun 1970",
    },
    {
      title: "SOP 18 – Pengelolaan Data & Sistem Informasi Limbah",
      tujuan:
        "Mengatur pendataan digital dan pelaporan aktivitas limbah secara akuntabel.",
      prosedur:
        "Input harian (data sampah masuk/keluar, produk jadi), audit mingguan, backup sistem, dan proteksi data.",
      regulasi:
        "UU No. 19/2016 (Perubahan atas UU ITE) mengenai Perlindungan Data, dan regulasi pelaporan limbah (misal: SIRAJA/SIMPEL KemenLHK).",
    },
    {
      title: "SOP 19 – Pelatihan dan Kompetensi Karyawan",
      tujuan:
        "Memastikan setiap karyawan, terutama operator alat, memiliki kompetensi yang sesuai untuk tugas dan standar K3.",
      prosedur:
        "Program orientasi K3 untuk karyawan baru, pelatihan spesifik pengoperasian alat (Plasma, Crusher, dll), sertifikasi (Operator Alat, Ahli K3), dan refreshment training berkala.",
      regulasi:
        "UU No. 13 Tahun 2003 (Pasal 12) dan UU No. 1/1970 (Kewajiban perusahaan memberikan pelatihan K3).",
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
              Standar Operasional Prosedur (SOP) K3
            </h2>
          </div>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Pilih salah satu SOP pada daftar di samping untuk melihat rincian tujuan,
            prosedur, dan regulasi yang berlaku.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT MENU */}
          <div
            className="bg-white shadow-sm border border-gray-200 rounded-xl p-4 h-fit sticky top-20"
            data-aos="fade-up"
          >
            <h4 className="font-semibold text-gray-700 mb-4">Daftar SOP K3</h4>

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
