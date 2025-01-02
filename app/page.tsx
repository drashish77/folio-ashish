import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div className='bg-stone-200 h-screen text-stone-900 z-10'>
      <Hero />
      <Intro />
      <Projects />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  )
}
