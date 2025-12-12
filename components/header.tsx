"use client"

import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  const primaryGreen = "#84AE92"

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <header
  data-aos="fade-down"
  className="fixed top-0 w-full z-50 bg-[#84AE92] shadow-lg"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Logo */}
      <div className="font-bold text-2xl">
        <Link href="/" className="flex items-center gap-1 text-white">
          Evo<span className="text-white">Waste</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 items-center relative text-white">
        {/* SOP Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDesktopDropdownOpen(true)}
          onMouseLeave={() => setDesktopDropdownOpen(false)}
        >
          <button className="flex items-center gap-1">
            SOP <ChevronDown size={16} />
          </button>

          {desktopDropdownOpen && (
            <div className="absolute top-10 left-0 bg-[#84AE92] rounded-lg shadow-lg py-2 w-56">
              <Link href="/sop/sop-operasional" className="block px-4 py-2 hover:bg-[#6f977a] rounded-md">
                Operasional Inti
              </Link>
              <Link href="/sop/sop-alat" className="block px-4 py-2 hover:bg-[#6f977a] rounded-md">
                Alat dan Mesin
              </Link>
              <Link href="/sop/sop-k3" className="block px-4 py-2 hover:bg-[#6f977a] rounded-md">
                K3 Penunjang
              </Link>
            </div>
          )}
        </div>

        <a href="#experience" className="hover:text-gray-200 transition-colors">Tentang Kami</a>
        <a href="#leadership" className="hover:text-gray-200 transition-colors">Kontak</a>
      </nav>

      {/* Mobile Button */}
      <button
        className="md:hidden p-2 rounded-md text-white hover:bg-[#6f977a] transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu />
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="md:hidden bg-[#84AE92] p-4 space-y-4">
      <a href="#experience" className="block text-white hover:bg-[#6f977a] px-2 py-1 rounded-md">Tentang Kami</a>
      <a href="#leadership" className="block text-white hover:bg-[#6f977a] px-2 py-1 rounded-md">Kontak</a>

      {/* Mobile Dropdown */}
      <div>
        <button
          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          className="flex items-center gap-2 text-white hover:bg-[#6f977a] px-2 py-1 rounded-md"
        >
          SOP <ChevronDown size={16} className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
        </button>

        {mobileDropdownOpen && (
          <div className="mt-2 ml-4 space-y-2">
            <Link href="/sop/sop-operasional" className="block text-white hover:bg-[#6f977a] px-2 py-1 rounded-md">
              Operasional Inti
            </Link>
            <Link href="/sop/sop-alat" className="block text-white hover:bg-[#6f977a] px-2 py-1 rounded-md">
              Alat dan Mesin
            </Link>
            <Link href="/sop/sop-k3" className="block text-white hover:bg-[#6f977a] px-2 py-1 rounded-md">
              K3 Penunjang
            </Link>
          </div>
        )}
      </div>

      <Button className="w-full bg-white text-[#84AE92] hover:bg-gray-100 transition-colors">GET STARTED</Button>
    </div>
  )}
</header>

  )
}
