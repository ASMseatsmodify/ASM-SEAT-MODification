import { useState, useEffect, useRef } from 'react'

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service...' },
  { value: 'car-seat-upholstery', label: 'Car Seat Upholstery' },
  { value: 'car-interior-customization', label: 'Car Interior Customization' },
  { value: 'sofa-repair-upholstery', label: 'Sofa Repair & Upholstery' },
  { value: 'curtains-furnishing', label: 'Curtains & Furnishing' },
  { value: 'custom-upholstery', label: 'Custom Upholstery Work' },
  { value: 'other', label: 'Other / Not Sure' },
]

const TIME_SLOTS = [
  '9:00 AM - 11:00 AM',
  '11:00 AM - 1:00 PM',
  '1:00 PM - 3:00 PM',
  '3:00 PM - 5:00 PM',
  '5:00 PM - 7:00 PM',
]

const INITIAL_FORM = {
  name: '',
  mobile: '',
  service: '',
  vehicleOrFurniture: '',
  date: '',
  time: '',
  requirements: '',
}

const ERRORS_INIT = {}

export default function Booking() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState(ERRORS_INIT)
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)

  // Listen for service preselection from Services cards
  useEffect(() => {
    const handler = (e) => {
      setForm((prev) => ({ ...prev, service: e.detail }))
    }
    window.addEventListener('selectService', handler)
    return () => window.removeEventListener('selectService', handler)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!form.mobile.trim()) {
      errs.mobile = 'Please enter your mobile number.'
    } else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s/g, ''))) {
      errs.mobile = 'Enter a valid 10-digit Indian mobile number.'
    }
    if (!form.service) errs.service = 'Please select a service.'
    if (!form.vehicleOrFurniture.trim()) errs.vehicleOrFurniture = 'Please describe your vehicle or furniture.'
    if (!form.date) errs.date = 'Please select a preferred date.'
    if (!form.time) errs.time = 'Please select a preferred time.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const buildWhatsAppMessage = () => {
    const serviceLabel = SERVICE_OPTIONS.find(o => o.value === form.service)?.label || form.service
    const msg = [
      `🔧 *New Appointment Request — Ashfaque Seat Maker*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📱 *Mobile:* ${form.mobile}`,
      `🛠️ *Service Required:* ${serviceLabel}`,
      `🚗 *Vehicle / Furniture:* ${form.vehicleOrFurniture}`,
      `📅 *Preferred Date:* ${form.date}`,
      `⏰ *Preferred Time:* ${form.time}`,
      form.requirements ? `📝 *Additional Requirements:* ${form.requirements}` : '',
      ``,
      `_Please confirm this appointment. Thank you!_`,
    ].filter(Boolean).join('\n')
    return encodeURIComponent(msg)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      // Scroll to first error
      const firstErrorField = Object.keys(errs)[0]
      document.getElementById(`field-${firstErrorField}`)?.focus()
      return
    }

    const waUrl = `https://wa.me/919050526069?text=${buildWhatsAppMessage()}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm(INITIAL_FORM)
    setErrors(ERRORS_INIT)
    setSubmitted(false)
  }

  // Minimum date = today
  const todayStr = new Date().toISOString().split('T')[0]

  return (
    <section id="booking" className="section-padding bg-brand-dark" ref={sectionRef} aria-label="Book an appointment">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Info */}
          <div className="reveal">
            <p className="section-subtitle mb-3">Get in Touch</p>
            <h2 className="section-title mb-4">
              Book an <span className="text-gradient">Appointment</span>
            </h2>
            <div className="gold-accent-line mb-6" />
            <p className="text-brand-silver mb-8 leading-relaxed">
              Fill out the form and we'll open WhatsApp with your booking details pre-filled. 
              Send the message to request your appointment.
            </p>

            {/* Important notice */}
            <div className="glass-card p-4 mb-8 border-l-4 border-brand-yellow">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-brand-silver text-sm">
                  <span className="text-white font-semibold">Important:</span> Submitting this form opens WhatsApp with your details. Your appointment is{' '}
                  <span className="text-brand-yellow font-semibold">not confirmed</span> until the workshop replies and confirms your booking.
                </p>
              </div>
            </div>

            {/* Direct contact */}
            <div className="space-y-3">
              <p className="text-white font-semibold text-sm mb-3">Prefer to call directly?</p>
              <a
                id="booking-call-1"
                href="tel:+919050526069"
                className="flex items-center gap-4 glass-card p-4 hover:border-brand-yellow/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 bg-brand-yellow/15 rounded-xl flex items-center justify-center text-brand-yellow shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Call Owner</p>
                  <p className="text-brand-yellow font-bold">9050526069</p>
                </div>
                <svg className="w-4 h-4 text-brand-silver ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                id="booking-call-2"
                href="tel:+919813671834"
                className="flex items-center gap-4 glass-card p-4 hover:border-brand-yellow/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 bg-brand-yellow/15 rounded-xl flex items-center justify-center text-brand-yellow shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Alternate Number</p>
                  <p className="text-brand-yellow font-bold">9813671834</p>
                </div>
                <svg className="w-4 h-4 text-brand-silver ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            {submitted ? (
              <div className="card-base p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading font-bold text-white text-xl mb-2">WhatsApp Opened!</h3>
                <p className="text-brand-silver mb-6 text-sm">
                  Your booking details have been pre-filled in WhatsApp. Please send the message to request your appointment. 
                  The workshop will confirm your booking by reply.
                </p>
                <button onClick={handleReset} className="btn-secondary text-sm">
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="card-base p-6 md:p-8 space-y-5"
                aria-label="Appointment booking form"
              >
                <h3 className="font-heading font-bold text-white text-xl border-b border-white/10 pb-4">
                  Appointment Request Form
                </h3>

                {/* Name */}
                <div>
                  <label htmlFor="field-name" className="label-text">Your Name *</label>
                  <input
                    id="field-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g., Mohammad Ahmed"
                    className={`input-field ${errors.name ? 'border-red-500/60' : ''}`}
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="field-mobile" className="label-text">Mobile Number *</label>
                  <input
                    id="field-mobile"
                    name="mobile"
                    type="tel"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="e.g., 9876543210"
                    className={`input-field ${errors.mobile ? 'border-red-500/60' : ''}`}
                    autoComplete="tel"
                    maxLength={10}
                    pattern="[6-9][0-9]{9}"
                  />
                  {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="field-service" className="label-text">Service Required *</label>
                  <select
                    id="field-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`input-field appearance-none cursor-pointer ${errors.service ? 'border-red-500/60' : ''}`}
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-brand-surface">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                </div>

                {/* Vehicle/Furniture */}
                <div>
                  <label htmlFor="field-vehicleOrFurniture" className="label-text">Vehicle Model / Furniture Details *</label>
                  <input
                    id="field-vehicleOrFurniture"
                    name="vehicleOrFurniture"
                    type="text"
                    value={form.vehicleOrFurniture}
                    onChange={handleChange}
                    placeholder="e.g., Maruti Suzuki Alto / 3-seater sofa"
                    className={`input-field ${errors.vehicleOrFurniture ? 'border-red-500/60' : ''}`}
                  />
                  {errors.vehicleOrFurniture && <p className="text-red-400 text-xs mt-1">{errors.vehicleOrFurniture}</p>}
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="field-date" className="label-text">Preferred Date *</label>
                    <input
                      id="field-date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      min={todayStr}
                      className={`input-field ${errors.date ? 'border-red-500/60' : ''}`}
                    />
                    {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label htmlFor="field-time" className="label-text">Preferred Time *</label>
                    <select
                      id="field-time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className={`input-field cursor-pointer ${errors.time ? 'border-red-500/60' : ''}`}
                    >
                      <option value="" className="bg-brand-surface">Select time...</option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot} className="bg-brand-surface">{slot}</option>
                      ))}
                    </select>
                    {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                  </div>
                </div>

                {/* Additional requirements */}
                <div>
                  <label htmlFor="field-requirements" className="label-text">Additional Requirements (Optional)</label>
                  <textarea
                    id="field-requirements"
                    name="requirements"
                    value={form.requirements}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific colour, fabric, or design requirements..."
                    className="input-field resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="booking-submit-btn"
                  className="btn-whatsapp w-full justify-center py-4 text-base font-bold"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send Booking Request on WhatsApp
                </button>

                <p className="text-brand-silver/50 text-xs text-center">
                  This will open WhatsApp. Your appointment is pending until the workshop confirms it.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
