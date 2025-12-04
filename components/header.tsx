"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-slate-900 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="font-bold text-2xl">
            Evo<span className="text-blue-500">Waste</span>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            <a href="#" className="hover:text-blue-400">
              LOREM
            </a>
            <a href="#" className="hover:text-blue-400">
              LOREM
            </a>
            <a href="#" className="hover:text-blue-400">
              LOREM
            </a>
            <a href="#" className="hover:text-blue-400">
              LOREM
            </a>
           
            <Button className="bg-blue-600 hover:bg-blue-700">GET STARTED</Button>
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}
