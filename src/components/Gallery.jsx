import { useState, useEffect, useRef, useCallback } from 'react'

// ─── Gallery data ────────────────────────────────────────────────────────────
// TO ADD YOUR OWN PHOTOS: Add new objects to this array.
// Place your image files inside the /public/gallery/ folder.
// Set the "src" to the filename (e.g., "/gallery/my-photo.jpg")
// Set "category" to one of: "car-seats" | "car-interiors" | "sofas" | "curtains" | "before-after"
const GALLERY_ITEMS = [
  {
    id: 1,
    src: '/gallery/car-interior-cream.jpg',
    alt: 'White quilted car interior with red piping - custom upholstery work by Ashfaque Seat Maker Mewat',
    title: 'Premium White & Red Interior',
    category: 'car-interiors',
    isRealWork: true,
  },
  {
    id: 2,
    src: '/gallery/car-seats-orange.jpg',
    alt: 'Orange quilted car seat covers with blue accents - Badkali Chowk Mewat',
    title: 'Custom Orange Seat Covers',
    category: 'car-seats',
    isRealWork: true,
  },
  {
    id: 3,
    src: '/gallery/car-interior-teal.jpg',
    alt: 'Teal quilted car roof lining and interior - Ashfaque Seat Maker Haryana',
    title: 'Teal Quilted Roof Lining',
    category: 'car-interiors',
    isRealWork: true,
  },
  {
    id: 4,
    src: '/gallery/car-interior-green-led.jpg',
    alt: 'Van interior with green LED lights and quilted upholstery - Ashfaque Seat Maker',
    title: 'Van Interior with LED Lighting',
    category: 'car-interiors',
    isRealWork: true,
  },
  {
    id: 5,
    src: '/gallery/van-interior-orange.png',
    alt: 'Luxury orange-red quilted van interior upholstery',
    title: 'Luxury Van Interior',
    category: 'car-interiors',
    isRealWork: false,
    isDemo: true,
  },
  {
    id: 6,
    src: '/gallery/sofa-bench-beige.png',
    alt: 'Beige quilted storage sofa bench - sofa upholstery work',
    title: 'Quilted Storage Sofa Bench',
    category: 'sofas',
    isRealWork: false,
    isDemo: true,
  },
  {
    id: 7,
    src: '/gallery/racing-seat-orange.png',
    alt: 'Orange racing car seat cover - custom upholstery',
    title: 'Orange Racing Seat Cover',
    category: 'car-seats',
    isRealWork: false,
    isDemo: true,
  },
  {
    id: 8,
    src: '/gallery/car-interior-cream-black.png',
    alt: 'Cream and black quilted car interior - premium upholstery',
    title: 'Cream & Black Interior',
    category: 'car-interiors',
    isRealWork: false,
    isDemo: true,
  },
  {
    id: 9,
    src: '/gallery/suv-drawer-system.png',
    alt: 'SUV camping drawer system with custom interior work',
    title: 'SUV Custom Interior System',
    category: 'car-interiors',
    isRealWork: false,
    isDemo: true,
  },
  {
    id: 10,
    src: '/gallery/campervan-turquoise.png',
    alt: 'Turquoise quilted campervan interior upholstery',
    title: 'Turquoise Campervan Interior',
    category: 'car-interiors',
    isRealWork: false,
    isDemo: true,
  },
]

const FILTERS = [
  { id: 'all', label: 'All Work' },
  { id: 'car-seats', label: 'Car Seats' },
  { id: 'car-interiors', label: 'Car Interiors' },
  { id: 'sofas', label: 'Sofas' },
  { id: 'curtains', label: 'Curtains' },
  { id: 'before-after', label: 'Before & After' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const sectionRef = useRef(null)

  const filtered = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter)

  // Keyboard handler for lightbox
  const handleKeyDown = useCallback((e) => {
    if (lightboxIndex === null) return
    if (e.key === 'Escape') setLightboxIndex(null)
    if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % filtered.length)
    if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
  }, [lightboxIndex, filtered.length])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="section-padding bg-brand-charcoal" ref={sectionRef} aria-label="Our work gallery">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <p className="section-subtitle mb-3">Portfolio</p>
          <h2 className="section-title mb-4">
            Our <span className="text-gradient">Work</span>
          </h2>
          <div className="gold-accent-line mx-auto mb-4" />
          <p className="text-brand-silver max-w-xl mx-auto">
            Browse through our completed projects. Click any image to view in full detail.
          </p>

          {/* Disclaimer for demo images */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs text-brand-yellow/80">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Photos marked "Real Work" are actual workshop projects. Others are reference examples.
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10 reveal">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              id={`gallery-filter-${filter.id}`}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-brand-yellow text-brand-dark shadow-yellow-glow'
                  : 'bg-brand-surface text-brand-silver border border-white/10 hover:border-brand-yellow/30 hover:text-white'
              }`}
            >
              {filter.label}
              {filter.id !== 'all' && (
                <span className="ml-1 text-xs opacity-70">
                  ({filter.id === activeFilter
                    ? filtered.length
                    : GALLERY_ITEMS.filter(i => i.category === filter.id).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">📷</div>
            <h3 className="text-white font-heading font-bold text-xl mb-2">Coming Soon</h3>
            <p className="text-brand-silver">
              Workshop photos for this category will be added soon.
              <br />
              <a href="tel:+919050526069" className="text-brand-yellow hover:underline">Call us</a> to see samples.
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 reveal">
            {filtered.map((item, index) => (
              <GalleryItem
                key={item.id}
                item={item}
                index={index}
                onClick={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        )}

        {/* Add Your Photos CTA */}
        <div className="mt-10 glass-card p-6 text-center reveal">
          <h3 className="font-heading font-bold text-white text-lg mb-2">📸 Add Your Workshop Photos</h3>
          <p className="text-brand-silver text-sm mb-4">
            To add your own real workshop photos to this gallery, place the image files inside the{' '}
            <code className="text-brand-yellow bg-brand-surface px-2 py-0.5 rounded text-xs">/public/gallery/</code>{' '}
            folder and add them to the <code className="text-brand-yellow bg-brand-surface px-2 py-0.5 rounded text-xs">GALLERY_ITEMS</code> array in{' '}
            <code className="text-brand-yellow bg-brand-surface px-2 py-0.5 rounded text-xs">src/components/Gallery.jsx</code>.
          </p>
          <a
            href="https://wa.me/919050526069"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm inline-flex"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Share Photos via WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % filtered.length)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)}
        />
      )}
    </section>
  )
}

function GalleryItem({ item, index, onClick }) {
  return (
    <button
      onClick={onClick}
      className="block w-full mb-4 break-inside-avoid group relative rounded-xl overflow-hidden cursor-zoom-in
                 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
      style={{ animationDelay: `${index * 80}ms` }}
      aria-label={`View: ${item.title}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
        <p className="text-white font-semibold text-sm">{item.title}</p>
      </div>

      {/* Real Work badge */}
      {item.isRealWork && (
        <div className="absolute top-3 right-3 px-2 py-1 bg-brand-yellow text-brand-dark text-[10px] font-bold rounded-full">
          ✓ Real Work
        </div>
      )}
      {item.isDemo && (
        <div className="absolute top-3 right-3 px-2 py-1 bg-brand-surface/80 text-brand-silver text-[10px] font-medium rounded-full border border-white/20">
          Demo
        </div>
      )}

      {/* Zoom icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </button>
  )
}

function Lightbox({ items, index, onClose, onNext, onPrev }) {
  const item = items[index]

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${item.title}`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Nav buttons */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-brand-yellow hover:text-brand-dark rounded-full flex items-center justify-center text-white transition-all z-10"
        aria-label="Previous image"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-brand-yellow hover:text-brand-dark rounded-full flex items-center justify-center text-white transition-all z-10"
        aria-label="Next image"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image */}
      <div onClick={(e) => e.stopPropagation()} className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-3">
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
        />
        <div className="text-center">
          <p className="text-white font-semibold">{item.title}</p>
          {item.isRealWork && (
            <p className="text-brand-yellow text-xs mt-1">✓ Actual workshop project</p>
          )}
          {item.isDemo && (
            <p className="text-brand-silver/60 text-xs mt-1">Reference demonstration image</p>
          )}
          <p className="text-brand-silver/50 text-xs mt-1">{index + 1} / {items.length}</p>
        </div>
      </div>
    </div>
  )
}
