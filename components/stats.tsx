import { BarChart3, Users, Clock, Smile } from "lucide-react"

export default function Stats() {
  const stats = [
    { icon: BarChart3, number: "450", label: "COMPLETED", sublabel: "PROJECTS" },
    { icon: Users, number: "5000+", label: "CLIENTS", sublabel: "WORLDWIDE" },
    { icon: Clock, number: "25+", label: "YEARS", sublabel: "EXPERIENCE" },
    { icon: Smile, number: "4999", label: "HAPPINESS", sublabel: "CLIENTS" },
  ]

  return (
    <section className="py-24 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">{stat.number}</div>
                <p className="font-semibold text-gray-200 text-sm tracking-wide">{stat.label}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.sublabel}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
