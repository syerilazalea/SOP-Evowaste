"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface SopTemplateProps {
  title: string
  tujuan: string
  prosedur: string
  regulasi: string
}

export default function SopTemplate({ title, tujuan, prosedur, regulasi }: SopTemplateProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const sections = [
    { label: "Tujuan", content: tujuan },
    { label: "Prosedur", content: prosedur },
    { label: "Regulasi", content: regulasi },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">{title}</h2>

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
    </section>
  )
}
