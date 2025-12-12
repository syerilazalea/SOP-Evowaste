import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const primaryGreen = "#84AE92";

  return (
    <footer className="py-20" style={{ backgroundColor: primaryGreen, color: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-1 text-sm">
          {/* Brand Info */}
          <div>
            <h3 className="font-bold mb-4 text-lg">
              Evo<span className="text-white">Waste</span>
            </h3>
            <p className="text-sm leading-relaxed text-white/90">
              PT Evowaste mendukung pengelolaan sampah berbasis prinsip 3R, ramah lingkungan, dan berkelanjutan.
            </p>
          </div>


          {/* Optional: Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <Facebook className="w-5 h-5 text-white/90 hover:text-white transition" />
            <Twitter className="w-5 h-5 text-white/90 hover:text-white transition" />
            <Linkedin className="w-5 h-5 text-white/90 hover:text-white transition" />
            <Instagram className="w-5 h-5 text-white/90 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
}
