export default function Hero() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToGallery = () => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/gallery/car-interior-cream.jpg')" }}
        aria-hidden="true"
      />

      {/* Dark overlay with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,10,0.93) 0%, rgba(26,26,26,0.78) 50%, rgba(10,10,10,0.88) 100%)'
        }}
        aria-hidden="true"
      />

      {/* Decorative animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-yellow/20 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-yellow/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-yellow/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-24 pt-32 md:pt-40">
        <div className="max-w-4xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold tracking-wider uppercase animate-fade-in">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Serving Badkali Chowk, Mewat &amp; nearby areas
          </div>

          {/* Hindi Headline */}
          <p className="text-brand-yellow/80 font-heading font-semibold text-base md:text-lg mb-3 animate-fade-up hero-text-shadow">
            कार सीट, सोफा और पर्दों के काम में बेहतरीन कारीगरी।
          </p>

          {/* Main Headline */}
          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 hero-text-shadow animate-fade-up animate-delay-100">
            Upgrade Your{' '}
            <span className="text-gradient">Car Interior.</span>
            <br />
            Transform Your{' '}
            <span className="text-gradient">Space.</span>
          </h1>

          {/* Description */}
          <p className="text-brand-silver text-base md:text-lg max-w-2xl mb-8 leading-relaxed animate-fade-up animate-delay-200">
            From custom car seat covers and interior upholstery to sofa renovation and beautiful curtains, 
            we help give your vehicle and home a fresh new look.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up animate-delay-300">
            <button
              id="hero-book-btn"
              onClick={scrollToBooking}
              className="btn-primary text-base px-8 py-4"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </button>

            <button
              id="hero-gallery-btn"
              onClick={scrollToGallery}
              className="btn-secondary text-base px-8 py-4"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Explore Our Work
            </button>
          </div>

          {/* WhatsApp + Call Buttons */}
          <div className="flex flex-wrap gap-3 animate-fade-up animate-delay-400">
            <a
              id="hero-whatsapp-btn"
              href="https://wa.me/919050526069?text=Hi!%20I%20want%20to%20book%20an%20appointment%20at%20Ahdab%20Motor%20Seats%2C%20Badkali%20Chowk%2C%20Mewat."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-5 py-2.5"
              aria-label="WhatsApp booking for Ashfaque Seat Maker"
            >
              <WhatsAppIcon />
              WhatsApp Booking
            </a>

            <a
              id="hero-call-btn"
              href="tel:+919050526069"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-5 py-2.5 rounded-full text-sm
                         hover:bg-white/20 border border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Call Ashfaque Seat Maker"
            >
              <svg className="w-4 h-4 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow" aria-hidden="true">
          <span className="text-brand-silver/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border-2 border-brand-silver/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-brand-yellow rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
