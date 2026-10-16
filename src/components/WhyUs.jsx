import { useEffect, useRef } from 'react'

const REASONS = [
  {
    icon: '🎨',
    title: 'Work Tailored to You',
    description: 'Every project is customized to your preferences — from fabric and colour to stitching style. We listen to your requirements and work accordingly.',
  },
  {
    icon: '🛠️',
    title: 'All Services in One Place',
    description: 'Car seats, car interiors, sofas, curtains — all under one roof at Badkali Chowk. No need to visit multiple shops for different work.',
  },
  {
    icon: '🎭',
    title: 'Material & Colour Choices',
    description: 'Choose from available fabrics, colours, and finishes. Options are discussed directly with the workshop based on what is available.',
  },
  {
    icon: '📍',
    title: 'Conveniently Located',
    description: 'Easily accessible workshop on Delhi-Alwar Road, Badkali Chowk, Mewat. Serving customers from across the Mewat and nearby region.',
  },
  {
    icon: '💬',
    title: 'Direct Communication',
    description: 'Talk directly to the owner. Get a clear price estimate, timeline, and honest advice before any work begins — no middlemen.',
  },
  {
    icon: '🤝',
    title: 'Honest & Transparent',
    description: 'We only commit to what we can deliver. Pricing and material options are discussed upfront so there are no surprises.',
  },
]

export default function WhyUs() {
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
    <section id="why-us" className="section-padding bg-brand-charcoal" ref={sectionRef} aria-label="Why choose Ashfaque Seat Maker">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 reveal">
          <p className="section-subtitle mb-3">Our Promise</p>
          <h2 className="section-title mb-4">
            Why Choose <span className="text-gradient">Us?</span>
          </h2>
          <div className="gold-accent-line mx-auto mb-4" />
          <p className="text-brand-silver max-w-xl mx-auto">
            Here's what makes Ashfaque Seat Maker the trusted upholstery workshop in Mewat.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {REASONS.map((reason, index) => (
            <div
              key={index}
              className="reveal glass-card p-6 hover:border-brand-yellow/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">{reason.title}</h3>
              <p className="text-brand-silver text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 md:mt-16 relative overflow-hidden rounded-2xl reveal">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/gallery/car-interior-cream.jpg')" }}
          />
          <div className="absolute inset-0 bg-brand-dark/88" />
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-black text-2xl md:text-3xl text-white mb-2">
                Ready to upgrade your car or home?
              </h3>
              <p className="text-brand-silver">
                Get in touch today. We're at Badkali Chowk, Mewat — or reach us on WhatsApp.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/919050526069?text=Hi!%20I%20saw%20your%20website%20and%20want%20to%20discuss%20upholstery%20work."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm"
              >
                <WhatsAppIcon />
                WhatsApp Now
              </a>
              <a
                href="tel:+919050526069"
                className="btn-secondary text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 9050526069
              </a>
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
