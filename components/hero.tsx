import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative pt-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/professional-business-consultant-office.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-blue-900/40"></div>

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full -mr-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full py-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-xs font-bold mb-6 tracking-wider">
            LOREM IPSUM DOLOR
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">LOREM IPSUM DOLOR SIT</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-semibold">
            LOREM IPSUM
          </Button>
        </div>
      </div>
    </section>
  )
}
