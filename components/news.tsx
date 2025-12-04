export default function News() {
  const news = [
    {
      title: "BUSINESS ADVICE FOR GROWTH",
      date: "Nov 28, 2025",
      category: "Business",
      query: "business-advice-growth-strategy",
    },
    {
      title: "BUSINESS ADVICE FOR GROWTH",
      date: "Nov 28, 2025",
      category: "Business",
      query: "business-consulting-team-meeting",
    },
    {
      title: "BUSINESS ADVICE FOR GROWTH",
      date: "Nov 28, 2025",
      category: "Business",
      query: "professional-business-guidance",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-gray-800 text-xs font-bold tracking-widest mb-20">WHAT'S HAPPENING</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden mb-6 hover:shadow-lg transition">
                <img
                  src={`/.jpg?height=250&width=400&query=${item.query}`}
                  alt="news"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <p className="text-xs text-gray-500 font-semibold tracking-wider mb-3">{item.category}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
