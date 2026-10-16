import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    id: 'car-seat-upholstery',
    icon: '🚗',
    title: 'Car Seat Upholstery',
    titleHindi: 'कार सीट अपहोल्स्ट्री',
    image: '/gallery/car-seats-orange.jpg',
    imageAlt: 'Custom car seat upholstery work - orange quilted seats by Ashfaque Seat Maker Mewat',
    description: 'Give your car seats a complete makeover with custom covers, premium leatherette finishes, and expert stitching tailored to your vehicle.',
    features: [
      'Custom seat covers',
      'Seat fabric replacement',
      'Leatherette & premium finishes',
      'Seat repair & interior refresh',
    ],
    bookLabel: 'car-seat-upholstery',
  },
  {
    id: 'car-interior',
    icon: '✨',
    title: 'Car Interior Customization',
    titleHindi: 'कार इंटीरियर कस्टमाइज़ेशन',
    image: '/gallery/car-interior-teal.jpg',
    imageAlt: 'Car interior customization - teal quilted roof lining by Ashfaque Seat Maker Badkali Chowk',
    description: 'Complete interior transformations including roof linings, door panels, and custom upholstery solutions that make your car truly unique.',
    features: [
      'Interior styling & finishing',
      'Roof lining & door panels',
      'Seat stitching & material replacement',
      'Customized upholstery solutions',
    ],
    bookLabel: 'car-interior-customization',
  },
  {
    id: 'sofa-upholstery',
    icon: '🛋️',
    title: 'Sofa Repair & Upholstery',
    titleHindi: 'सोफा मरम्मत और अपहोल्स्ट्री',
    image: '/gallery/sofa-bench-beige.png',
    imageAlt: 'Sofa upholstery and repair work - beige quilted storage bench by Ashfaque Seat Maker',
    description: 'Bring your old sofa back to life with fresh fabric, new padding, and custom upholstery designs for homes and shops.',
    features: [
      'Sofa fabric replacement',
      'Cushion & padding renovation',
      'Custom designs for homes & shops',
      'Storage sofa & bench work',
    ],
    bookLabel: 'sofa-repair-upholstery',
  },
  {
    id: 'curtains',
    icon: '🪟',
    title: 'Curtains & Furnishing',
    titleHindi: 'पर्दे और फर्निशिंग',
    image: '/gallery/car-interior-cream.jpg',
    imageAlt: 'Car and vehicle curtain stitching and fitting work by Ashfaque Seat Maker Mewat Haryana',
    description: 'Professional curtain stitching, fabric selection, and fitting services for vehicles and homes. Choose from a variety of fabrics and colours.',
    features: [
      'Curtain stitching',
      'Fabric selection & customization',
      'Curtain fitting',
      'Related furnishing work',
    ],
    bookLabel: 'curtains-furnishing',
  },
  {
    id: 'custom-work',
    icon: '🔧',
    title: 'Custom Upholstery Work',
    titleHindi: 'कस्टम अपहोल्स्ट्री काम',
    image: '/gallery/car-interior-green-led.jpg',
    imageAlt: 'Custom van interior upholstery with LED lighting by Ashfaque Seat Maker Badkali',
    description: 'Got a specific vision? We work with you to create tailored upholstery solutions based on your requirements and material preferences.',
    features: [
      'Tailored solutions to your needs',
      'Fabric, colour & material choices',
      'Van & commercial vehicle interiors',
      'Available materials discussed on enquiry',
    ],
    bookLabel: 'custom-upholstery',
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const revealEls = sectionRef.current?.querySelectorAll('.reveal')
    revealEls?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleBookService = (serviceLabel) => {
    const bookingSection = document.querySelector('#booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
      // Set the service in the booking form via event
      setTimeout(() => {
        const event = new CustomEvent('selectService', { detail: serviceLabel })
        window.dispatchEvent(event)
      }, 600)
    }
  }

  return (
    <section id="services" className="section-padding bg-brand-dark" ref={sectionRef} aria-label="Our services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <p className="section-subtitle mb-3">What We Do</p>
          <h2 className="section-title mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <div className="gold-accent-line mx-auto mb-4" />
          <p className="text-brand-silver max-w-2xl mx-auto text-base md:text-lg">
            From car seat covers to sofa renovation — expert upholstery and furnishing work in Badkali Chowk, Mewat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onBook={handleBookService}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, onBook }) {
  return (
    <article
      className={`card-base flex flex-col reveal`}
      style={{ transitionDelay: `${index * 100}ms` }}
      aria-label={`Service: ${service.title}`}
    >
      {/* Image */}
      <div className="relative h-48 md:h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
        <div className="absolute top-4 left-4 w-10 h-10 bg-brand-yellow/20 backdrop-blur-sm border border-brand-yellow/40 rounded-xl flex items-center justify-center text-lg">
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="mb-1">
          <p className="text-brand-yellow/70 text-xs font-medium">{service.titleHindi}</p>
        </div>
        <h3 className="font-heading font-bold text-white text-lg mb-2">{service.title}</h3>
        <p className="text-brand-silver text-sm leading-relaxed mb-4">{service.description}</p>

        {/* Features list */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-brand-silver">
              <svg className="w-4 h-4 text-brand-yellow mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Book button */}
        <button
          id={`book-service-${service.id}`}
          onClick={() => onBook(service.bookLabel)}
          className="btn-primary w-full justify-center text-sm py-2.5"
          aria-label={`Book ${service.title}`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book This Service
        </button>
      </div>
    </article>
  )
}
