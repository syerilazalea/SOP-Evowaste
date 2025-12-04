import { Button } from "@/components/ui/button"

export default function Leadership() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg -z-10"></div>
            <img
              src="/professional-business-team-working-together.jpg"
              alt="team"
              className="rounded-lg w-full shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight text-balance">
              LOREM IPSUM DOLOR SIT
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>

            <div className="bg-blue-600 text-white p-8 rounded-lg mb-8">
              <p className="font-semibold mb-3">Lorem ipsum dolor sit</p>
              <p className="text-sm mb-4 text-blue-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
              </p>
              <p className="text-sm font-bold">+91 6379-0245</p>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-semibold">
              LOREM IPSUM
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
