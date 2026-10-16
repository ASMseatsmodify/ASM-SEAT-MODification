import { useState, useRef, useEffect } from 'react'

// Before & After data
// TO ADD YOUR OWN: Add objects with { id, title, before: { src, alt }, after: { src, alt } }
const BEFORE_AFTER_ITEMS = [
  {
    id: 1,
    title: 'Car Interior Transformation',
    description: 'Complete interior renovation with custom white quilted upholstery and red piping.',
    before: {
      src: '/gallery/car-seats-orange.jpg',
      alt: 'Before - Car interior needing renovation',
    },
    after: {
      src: '/gallery/car-interior-cream.jpg',
      alt: 'After - Transformed white quilted car interior with red piping',
    },
    isDemo: true,
  },
  {
    id: 2,
    title: 'Roof Lining & Interior Upgrade',
    description: 'Roof lining and interior transformed with teal quilted finish.',
    before: {
      src: '/gallery/car-interior-green-led.jpg',
      alt: 'Before - Standard van interior',
    },
    after: {
      src: '/gallery/car-interior-teal.jpg',
      alt: 'After - Custom teal quilted van interior with LED accent lighting',
    },
    isDemo: true,
  },
]

export default function BeforeAfter() {
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
    <section id="before-after" className="section-padding bg-brand-dark" ref={sectionRef} aria-label="Before and after showcase">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <p className="section-subtitle mb-3">The Difference</p>
          <h2 className="section-title mb-4">
            Before &amp; <span className="text-gradient">After</span>
          </h2>
          <div className="gold-accent-line mx-auto mb-4" />
          <p className="text-brand-silver max-w-xl mx-auto text-sm md:text-base">
            See the transformation our craftsmanship delivers. Drag the slider to reveal the difference.
          </p>
          {BEFORE_AFTER_ITEMS.some(i => i.isDemo) && (
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400/80 text-xs">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              These are demonstration examples. Real before/after photos will be added from your workshop projects.
            </div>
          )}
        </div>

        {/* Before/After Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BEFORE_AFTER_ITEMS.map((item, index) => (
            <BeforeAfterCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* CTA to add real photos */}
        <div className="mt-10 text-center reveal">
          <p className="text-brand-silver/70 text-sm">
            Have before/after photos of your work? Send them to us on WhatsApp and we'll add them here.
          </p>
          <a
            href="https://wa.me/919050526069?text=I%20want%20to%20share%20before%20and%20after%20photos%20for%20the%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-4 inline-flex text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send Photos on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function BeforeAfterCard({ item, index }) {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const updateSlider = (clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPos((x / rect.width) * 100)
  }

  const handleMouseDown = (e) => { setIsDragging(true); updateSlider(e.clientX) }
  const handleMouseMove = (e) => { if (isDragging) updateSlider(e.clientX) }
  const handleMouseUp = () => setIsDragging(false)
  const handleTouchStart = (e) => { setIsDragging(true); updateSlider(e.touches[0].clientX) }
  const handleTouchMove = (e) => { if (isDragging) updateSlider(e.touches[0].clientX) }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging, sliderPos])

  return (
    <article
      className="reveal card-base overflow-hidden"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Comparison slider */}
      <div
        ref={containerRef}
        className="relative h-64 md:h-72 select-none cursor-col-resize overflow-hidden"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        aria-label={`Before and after slider for: ${item.title}`}
      >
        {/* After (background) */}
        <img
          src={item.after.src}
          alt={item.after.alt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />

        {/* Before (clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={item.before.src}
            alt={item.before.alt}
            className="absolute inset-0 w-full h-full object-cover"
            draggable="false"
          />
          <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 text-white text-xs font-bold rounded-md">
            BEFORE
          </div>
        </div>

        {/* Slider line & handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-brand-yellow shadow-yellow-glow z-10"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center shadow-yellow-glow cursor-grab active:cursor-grabbing">
            <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
            </svg>
          </div>
        </div>

        {/* After label */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-brand-yellow text-brand-dark text-xs font-bold rounded-md">
          AFTER
        </div>

        {/* Hint overlay */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white/70 text-xs flex items-center gap-1 pointer-events-none">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
          Drag to compare
        </div>
      </div>

      {/* Text content */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-1">{item.title}</h3>
            <p className="text-brand-silver text-sm">{item.description}</p>
          </div>
          {item.isDemo && (
            <span className="shrink-0 px-2 py-1 bg-brand-surface border border-white/10 text-brand-silver/60 text-[10px] rounded-full">
              Demo
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
