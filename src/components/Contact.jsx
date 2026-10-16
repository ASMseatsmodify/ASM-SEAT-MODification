import { useEffect, useRef } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="section-padding bg-brand-charcoal" ref={sectionRef} aria-label="Contact and location">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <p className="section-subtitle mb-3">Find Us</p>
          <h2 className="section-title mb-4">
            Location &amp; <span className="text-gradient">Contact</span>
          </h2>
          <div className="gold-accent-line mx-auto mb-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Contact Info */}
          <div className="space-y-5 reveal">
            {/* Address */}
            <div className="glass-card p-6 hover:border-brand-yellow/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-yellow/15 rounded-xl flex items-center justify-center text-brand-yellow shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-1">Workshop Address</h3>
                  <address className="not-italic text-brand-silver text-sm leading-relaxed">
                    Delhi-Alwar Road, Badkali Chowk<br />
                    Mewat, Haryana, India
                  </address>
                  <a
                    id="maps-directions-link"
                    href="https://www.google.com/maps/search/Badkali+Chowk+Mewat+Haryana+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-brand-yellow text-xs font-semibold hover:underline"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Search on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Phone numbers */}
            <div className="glass-card p-6 hover:border-brand-yellow/30 transition-all duration-300">
              <h3 className="font-heading font-bold text-white text-lg mb-4">Contact Numbers</h3>
              <div className="space-y-3">
                <a
                  id="contact-call-1"
                  href="tel:+919050526069"
                  className="flex items-center gap-4 p-3 rounded-xl bg-brand-surface hover:bg-brand-yellow/10 transition-colors group"
                  aria-label="Call 9050526069"
                >
                  <div className="w-9 h-9 bg-green-500/15 rounded-lg flex items-center justify-center text-green-400 group-hover:bg-green-500/25 transition-colors">
                    <svg className="w-4.5 h-4.5 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-brand-silver">Primary</p>
                    <p className="text-white font-bold text-base">+91 90505 26069</p>
                  </div>
                  <svg className="w-4 h-4 text-brand-silver ml-auto group-hover:text-brand-yellow transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  id="contact-call-2"
                  href="tel:+919813671834"
                  className="flex items-center gap-4 p-3 rounded-xl bg-brand-surface hover:bg-brand-yellow/10 transition-colors group"
                  aria-label="Call 9813671834"
                >
                  <div className="w-9 h-9 bg-blue-500/15 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-500/25 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-brand-silver">Alternate</p>
                    <p className="text-white font-bold text-base">+91 98136 71834</p>
                  </div>
                  <svg className="w-4 h-4 text-brand-silver ml-auto group-hover:text-brand-yellow transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="glass-card p-6 hover:border-green-500/30 transition-all duration-300">
              <h3 className="font-heading font-bold text-white text-lg mb-3">WhatsApp</h3>
              <p className="text-brand-silver text-sm mb-4">
                Prefer to chat? Send us a WhatsApp message for queries, photos of your vehicle, or to confirm your appointment.
              </p>
              <a
                id="contact-whatsapp-btn"
                href="https://wa.me/919050526069?text=Hi%20Ahdab%20Motor%20Seats!%20I%20have%20an%20enquiry%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-sm"
              >
                <WhatsAppIcon />
                Chat on WhatsApp — 919050526069
              </a>
            </div>
          </div>

          {/* Map embed / link */}
          <div className="reveal">
            <div className="rounded-2xl overflow-hidden border border-white/10 h-64 md:h-80 lg:h-full min-h-64 relative">
              {/* Map iframe for Badkali Chowk area */}
              <iframe
                title="Ashfaque Seat Maker location - Badkali Chowk Mewat"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14054.573!2d77.0!3d28.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4d4d4d4d4d4d%3A0x0!2sBadkali%2C%20Haryana!5e0!3m2!1sen!2sin!4v1697000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <a
                  href="https://www.google.com/maps/search/Badkali+Chowk+Mewat+Haryana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2 px-4 inline-flex shadow-lg"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Area served tags */}
            <div className="mt-4 p-4 glass-card">
              <p className="text-brand-silver text-xs mb-3 font-medium uppercase tracking-wider">Areas We Serve</p>
              <div className="flex flex-wrap gap-2">
                {['Badkali Chowk', 'Mewat', 'Nuh', 'Tauru', 'Sohna', 'Palwal', 'Faridabad', 'Delhi-Alwar Road corridor'].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-brand-surface text-brand-silver text-xs rounded-full border border-white/10"
                  >
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>
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
