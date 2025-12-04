import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Lorem Ipsum",
      role: "Lorem Ipsum Dolor",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/professional-man-portrait.jpg",
    },
    {
      name: "Lorem Ipsum",
      role: "Lorem Ipsum Dolor",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/professional-woman-portrait.jpg",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-gray-800 text-xs font-bold tracking-widest mb-20">LOREM IPSUM DOLOR</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-sm">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
