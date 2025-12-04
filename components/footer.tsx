import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">
              Lorem<span className="text-blue-500">Ipsum</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">LOREM IPSUM</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Lorem Ipsum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">LOREM IPSUM</h4>
            <p className="text-sm text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipiscing</p>
            <input
              type="email"
              placeholder="Lorem ipsum"
              className="w-full px-4 py-2 rounded bg-slate-800 text-white placeholder-gray-500 text-sm border border-slate-700 focus:border-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">LOREM IPSUM</h4>
            {/* <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div> */}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400">&copy; 2025 Lorem Ipsum. Lorem ipsum dolor sit amet.</p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Lorem Ipsum
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Lorem Ipsum
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
