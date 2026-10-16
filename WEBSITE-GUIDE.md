# अहदाब मोटर सीट्स — Website Deployment & Management Guide

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v18 or later) installed
- npm (comes with Node.js)

### Run the Website Locally
```bash
cd "WEBSITE GARAGE"
npm install
npm run dev
```
Open http://localhost:5173/ in your browser.

---

## 📸 Adding Your Own Workshop Photos

This is the most important step to make your website truly yours.

### Step 1: Prepare Your Photos
- Use JPG or PNG format
- Recommended size: 1200×900 pixels or larger
- Keep file sizes under 2MB for fast loading

### Step 2: Place Photos in the Correct Folder
Copy your photos to:
```
WEBSITE GARAGE/public/gallery/
```

### Step 3: Add Photos to the Gallery
Open the file: `WEBSITE GARAGE/src/components/Gallery.jsx`

Find the `GALLERY_ITEMS` array at the top and add your photo like this:
```js
{
  id: 11,                              // Use the next available ID number
  src: '/gallery/your-photo.jpg',      // The filename you put in /public/gallery/
  alt: 'Description of the photo for Google SEO',
  title: 'Short title shown in gallery',
  category: 'car-seats',              // See categories below
  isRealWork: true,                   // Set to TRUE for your actual workshop work
},
```

### Photo Categories
| Category | Use For |
|----------|---------|
| `car-seats` | Car seat covers and seat work |
| `car-interiors` | Roof lining, door panels, full interiors |
| `sofas` | Sofa and furniture upholstery |
| `curtains` | Curtain stitching and fitting |
| `before-after` | Before/after comparison pairs |

### Step 4: Add Before & After Pairs
Open `src/components/BeforeAfter.jsx` and add your before/after pair to `BEFORE_AFTER_ITEMS`:
```js
{
  id: 3,
  title: 'Your Project Title',
  description: 'Brief description of the transformation.',
  before: {
    src: '/gallery/before-photo.jpg',
    alt: 'Before photo description',
  },
  after: {
    src: '/gallery/after-photo.jpg',
    alt: 'After photo description',
  },
  isDemo: false,  // Set to false for your real work
},
```

---

## 📱 Contact Information

The following contact details are already set throughout the website:
- Primary phone: 9050526069
- Alternate phone: 9813671834
- WhatsApp: 919050526069
- Address: Delhi-Alwar Road, Badkali Chowk, Mewat, Haryana, India

To change any of these, search for the number in the `src/` folder and update all occurrences.

---

## 🌐 Deploying the Website (Making It Live)

### Option 1: Netlify (FREE — Recommended)
1. Go to https://www.netlify.com and create a free account
2. Click "Add new site" > "Deploy manually"
3. Run `npm run build` in the WEBSITE GARAGE folder
4. Drag and drop the generated `dist/` folder to Netlify
5. Get a free `your-name.netlify.app` URL immediately

### Option 2: Vercel (FREE)
1. Go to https://vercel.com and create a free account
2. Install Vercel CLI: `npm install -g vercel`
3. Run `vercel` in the WEBSITE GARAGE folder
4. Follow the prompts

### Option 3: Custom Domain
After deploying on Netlify or Vercel, buy `ahdabmotorseats.in` from a registrar and connect it.

---

## 📊 Google Search Console Setup

1. Go to https://search.google.com/search-console/
2. Add your website URL as a property
3. Verify ownership using the HTML meta tag method
4. Add the meta tag to `index.html` inside the <head> section
5. Submit your sitemap: https://yourdomain.in/sitemap.xml

---

## 📁 Project Structure

```
WEBSITE GARAGE/
├── public/
│   ├── gallery/          <- PUT YOUR WORKSHOP PHOTOS HERE
│   ├── favicon.svg
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx       <- Add photos here
│   │   ├── BeforeAfter.jsx   <- Add before/after pairs here
│   │   ├── WhyUs.jsx
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingButtons.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html              <- SEO meta tags are here
├── tailwind.config.js
└── package.json
```

## ⚡ Build for Production
```bash
npm run build
```
This creates a `dist/` folder ready to upload to any web host.
