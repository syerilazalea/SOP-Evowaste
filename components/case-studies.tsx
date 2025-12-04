export default function CaseStudies() {
  const cases = [
    {
      title: "BUSINESS GROWTH",
      subtitle: "Growth Strategy",
      query: "business-growth-strategy-analytics",
    },
    {
      title: "MARKETING ADVICE",
      subtitle: "Marketing Strategy",
      query: "marketing-strategy-planning-team",
    },
    {
      title: "FINANCIAL CONSULTING",
      subtitle: "Finance Management",
      query: "financial-consulting-planning",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-gray-800 text-xs font-bold tracking-widest mb-6">NEW CASE STUDIES</h2>
        <p className="text-center text-gray-600 mb-20 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
                <img
                  src={`/.jpg?height=300&width=400&query=${caseItem.query}`}
                  alt="case study"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{caseItem.title}</h3>
                <p className="text-gray-300 text-sm">{caseItem.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
