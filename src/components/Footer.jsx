export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-dark border-t border-white/5" role="contentinfo">
      {/* Main footer content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center font-heading font-black text-xl text-brand-dark">
                A
              </div>
              <div>
                <div className="font-heading font-black text-white text-sm">Asfak Seat Maker</div>
                <div className="text-brand-yellow text-[10px] font-medium tracking-widest uppercase">Badkali Chowk, Mewat</div>
              </div>
            </div>
            <address className="not-italic text-brand-silver text-sm mb-4 leading-relaxed">
              Delhi-Alwar Road, Badkali Chowk<br />
              Mewat, Haryana, India
            </address>
            <div className="space-y-2">
              <a href="tel:+919050526069" className="flex items-center gap-2 text-brand-silver text-sm hover:text-brand-yellow transition-colors">
                <svg className="w-4 h-4 text-brand-yellow shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                9050526069
              </a>
              <a href="tel:+919813671834" className="flex items-center gap-2 text-brand-silver text-sm hover:text-brand-yellow transition-colors">
                <svg className="w-4 h-4 text-brand-yellow shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                9813671834
              </a>
              <a
                href="https://wa.me/919050526069"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 text-sm hover:text-green-300 transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5 text-sm text-brand-silver">
              {[
                'Car Seat Upholstery',
                'Car Interior Customization',
                'Sofa Repair & Upholstery',
                'Curtains & Furnishing',
                'Custom Upholstery Work',
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="hover:text-brand-yellow transition-colors text-left"
                  >
                    → {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-brand-silver">
              {[
                { label: 'Home', id: '#home' },
                { label: 'Our Work Gallery', id: '#gallery' },
                { label: 'Before & After', id: '#before-after' },
                { label: 'Book Appointment', id: '#booking' },
                { label: 'Contact & Location', id: '#contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-brand-yellow transition-colors"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2 text-sm text-brand-silver">
              {[
                'Badkali Chowk, Mewat',
                'Nuh, Haryana',
                'Tauru, Haryana',
                'Sohna, Haryana',
                'Palwal, Haryana',
                'Delhi-Alwar Road',
              ].map((area) => (
                <li key={area} className="flex items-center gap-1.5">
                  <span className="text-brand-yellow text-xs">📍</span>
                  {area}
                </li>
              ))}
            </ul>

            {/* SEO keywords in accessible hidden text */}
            <div className="sr-only">
              Car seat upholstery Mewat, car seat covers Badkali Chowk, car interior customization Mewat Haryana,
              sofa repair Mewat, sofa upholstery Badkali, curtain stitching Mewat, car seat repair near Badkali Chowk,
              Asfak Seat Maker Badkali Chowk Mewat
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-brand-silver/50 text-xs">
              © {currentYear} Ashfaque Seat Maker. All rights reserved.
            </p>
            <p className="text-brand-silver/40 text-xs">
              Badkali Chowk, Mewat, Haryana, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
