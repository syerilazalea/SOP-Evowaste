import { Button } from "@/components/ui/button"

export default function Mission() {
  return (
    <section className="py-32 bg-slate-900 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src="/dark-pattern-texture.jpg" alt="background" className="w-full h-full object-cover" />
      </div>

      {/* Accent elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600/10 rounded-full -z-0"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-600/10 rounded-full -z-0"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-balance">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam quis nostrud.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-semibold">
          LOREM IPSUM
        </Button>
      </div>
    </section>
  )
}
