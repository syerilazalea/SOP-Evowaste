import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight text-balance">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p className="text-blue-100 text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-base font-semibold whitespace-nowrap">
            LOREM IPSUM
          </Button>
        </div>
      </div>
    </section>
  )
}
