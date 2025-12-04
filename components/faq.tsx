"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      question: "Lorem ipsum dolor sit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      question: "Lorem ipsum dolor?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-gray-800 text-xs font-bold tracking-widest mb-20">LOREM IPSUM DOLOR</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            {faqs.slice(0, 2).map((faq, idx) => (
              <div key={idx} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(idx)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-800 text-left text-sm">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transform transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-blue-600 text-white p-12 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-blue-700 flex items-center justify-center">
                <img
                  src="/professional-consultant-portrait.jpg"
                  alt="consultant"
                  className="w-full h-full rounded-full object-cover opacity-80"
                />
              </div>
              <p className="font-semibold mb-3 text-lg">Lorem ipsum dolor?</p>
              <p className="text-blue-100 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
