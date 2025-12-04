import Header from "@/components/header"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Leadership from "@/components/leadership"
import Services from "@/components/services"
import CaseStudies from "@/components/case-studies"
import Mission from "@/components/mission"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import Stats from "@/components/stats"
import News from "@/components/news"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experience />
      <Leadership />
      <Services />
      <CaseStudies />
      <Mission />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
