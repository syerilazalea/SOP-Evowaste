import { Briefcase, CheckSquare, TrendingUp } from "lucide-react"

export default function Experience() {
  const services = [
    {
      icon: Briefcase,
      title: "LOREM IPSUM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: CheckSquare,
      title: "LOREM IPSUM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: TrendingUp,
      title: "LOREM IPSUM DOLOR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-gray-800 text-xs font-bold tracking-widest mb-20 text-balance">
          REAL-WORLD EXPERIENCE
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-8">
                  <div className="bg-blue-100 p-5 rounded-lg">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-4 tracking-wide">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
