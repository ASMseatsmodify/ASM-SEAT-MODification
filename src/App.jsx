import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import BeforeAfter from './components/BeforeAfter'
import WhyUs from './components/WhyUs'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <>
      {/* Skip to content for accessibility */}
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:btn-primary text-sm"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Services />
        <Gallery />
        <BeforeAfter />
        <WhyUs />
        <Booking />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}
