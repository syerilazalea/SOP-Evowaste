"use client"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function SopAlat() {
  const [selectedSop, setSelectedSop] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const primaryGreen = "#84AE92" // warna utama

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  const sops = [
    {
      title: "SOP 7 – Pengoperasian Sorting Modul",
      tujuan: "Mengoperasikan mesin pemilah otomatis secara optimal.",
      prosedur:
        "Kalibrasi sensor optik/kamera warna, pemeriksaan conveyor, pemantauan hasil sortir, dan pembersihan sensor pasca-operasi.",
      regulasi: "Indikator: Akurasi sortir.",
    },
    {
      title: "SOP 8 – Pengoperasian Crushing Modul",
      tujuan:
        "Menghancurkan material (Organik, Plastik) menjadi ukuran seragam untuk diproses lebih lanjut (menjadi Biomass).",
      prosedur:
        "Pemeriksaan pisau potong dan belt conveyor, pengoperasian beban sesuai kapasitas (kg/jam), pemantauan output, dan pembersihan ruang pemotong.",
      regulasi: "Indikator: Ukuran pecahan seragam, downtime ≤ 2%.",
    },
    {
      title: "SOP 9 – Pengoperasian Plasma Pyrolysis (Decomposer)",
      tujuan:
        "Mengoperasikan alat Plasma Pyrolysis (Decomposer) untuk mengonversi sampah residu (Rubber, Kain) menjadi Abu (Ash) dan energi.",
      prosedur:
        "Pemeriksaan kondisi awal (torch, reaktor, scrubber), penggunaan APD khusus (tahan panas), operasi pada suhu 1500–2000°C, pemantauan tekanan dan emisi gas buang, prosedur pendinginan (cooldown).",
      regulasi:
        "Permen LHK No. 11 Tahun 2021 tentang Baku Mutu Emisi Industri Termal.",
    },
    {
      title: "SOP 10 – Produksi Briket (Pengoperasian Briquet Modul)",
      tujuan:
        "Menghasilkan briket ramah lingkungan dari Biomass (hasil Crusher).",
      prosedur:
        "Persiapan bahan baku (Biomass), pencampuran binder, pengoperasian mesin Briquet Press (tekanan & waktu), prosedur pengeringan, dan uji kadar air.",
      regulasi:
        "Mutu produk akhir harus merujuk pada Standar Nasional Indonesia (SNI), misal: SNI 01-6235-2000 (Briket Arang Kayu) atau SNI Briket Biomassa yang relevan.",
    },
    {
      title: "SOP 11 – Produksi Paving/Bata dari Abu (BARU)",
      tujuan:
        "Mengolah Abu (Ash) sisa hasil Plasma Pyrolysis menjadi produk Paving/Bata yang stabil dan aman.",
      prosedur:
        "Pemeriksaan kualitas abu (memastikan inert/aman), penentuan formula pencampuran (abu, semen, air, binder), proses pencetakan, dan proses pengeringan/curing.",
      regulasi:
        "Produk akhir wajib diuji dan memenuhi SNI 03-0691-1996 tentang Bata Beton (Paving Block) untuk memastikan kekuatan tekan dan keamanan material.",
    },
    {
      title: "SOP 12 – Standar Quality Control (QC) & Pengemasan Produk",
      tujuan:
        "Menstandarkan mutu dan kemasan produk daur ulang (Briket, Paving).",
      prosedur:
        "Uji QC (kekuatan, kadar air, visual), finishing produk, penimbangan, dan pengemasan dengan label 'Eco Product' yang informatif.",
      regulasi: "Indikator: Produk cacat < 5%.",
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
              SOP Produksi & Operasi Alat
            </h2>
          </div>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Pilih salah satu SOP pada daftar di samping untuk melihat rincian tujuan,
            prosedur, indikator, dan regulasi yang berlaku.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT MENU */}
          <div
            className="bg-white shadow-sm border border-gray-200 rounded-xl p-4 h-fit sticky top-20"
            data-aos="fade-up"
          >
            <h4 className="font-semibold text-gray-700 mb-4">Daftar SOP Produksi</h4>

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
