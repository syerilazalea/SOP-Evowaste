"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function faq() {
  const [selectedSop, setSelectedSop] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
      tujuan: "Memisahkan sampah untuk dialirkan ke modul yang tepat.",
      prosedur:
        "Pemisahan manual/otomatis menjadi kategori Organik, Plastik, Rubber/Kain, B3, dan Reuse.",
      regulasi: "UU 18/2008 Pasal 13.",
    },
    {
      title: "SOP 3 – Reduksi Timbulan Sampah",
      tujuan: "Mengurangi volume sampah dari sumber.",
      prosedur: "Audit sampah, edukasi 3R, dan program Eco Point Reward.",
      regulasi: "Prinsip 3R dalam UU 18/2008.",
    },
    {
      title: "SOP 4 – Pemanfaatan Kembali (Reuse)",
      tujuan: "Menyalurkan barang non-sampah yang masih layak pakai.",
      prosedur:
        "Sortasi barang (Grade A/B/C), pembersihan, pencatatan digital, dan penyaluran.",
      regulasi: "Prinsip Reuse dalam UU 18/2008.",
    },
    {
      title: "SOP 5 – Pengelolaan Toko Evomart",
      tujuan: "Menstandarkan penjualan produk daur ulang.",
      prosedur:
        "Stock opname, pembaruan stok online, display produk, pelaporan penjualan.",
      regulasi: "UU 8/1999 Perlindungan Konsumen.",
    },
    {
      title: "SOP 6 – Distribusi dan Logistik Produk",
      tujuan: "Memastikan produk terkirim dengan aman.",
      prosedur:
        "Verifikasi order, QC produk, pengemasan, surat jalan, dan pengecekan kendaraan.",
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-gray-800 text-xs font-bold tracking-widest mb-20">
          SOP OPERASIONAL INTI PT EVOWASTE
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* TABS */}
          <div className="border-r border-gray-200 pr-4">
            {sops.map((sop, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedSop(idx)
                  setOpenIndex(null) // reset accordion tiap ganti sop
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg mb-2 font-medium text-sm transition 
                ${
                  selectedSop === idx
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {sop.title}
              </button>
            ))}
          </div>

          {/* DETAIL PANEL */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-6">{current.title}</h3>

            {sections.map((sec, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-800">{sec.label}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transform transition-transform ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{sec.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
