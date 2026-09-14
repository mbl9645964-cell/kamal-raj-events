// Centralized content for Kamal Raj Events.
// Imagery: high-end editorial event & wedding photography served responsively.

const U = (id, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const img = {
  hero: '1519741497674-611481863552',
  heroAlt: '1465495976277-4387d4b0b4c6',
  philosophy: '1519225421980-715cb0215aed',
  materials: '1533174072545-7a4b6ad7a6c3',
  cta: '1470229722913-7c0e2dbbafd3',
  intro: '1511285560929-80b456fea0bc',
}

export const src = (id, w, q) => U(id, w, q)

// Responsive srcset helper — elegant crops at consistent ratios.
export const responsive = (id) => ({
  src: U(id, 1400),
  srcSet: [640, 960, 1400, 2000].map((w) => `${U(id, w)} ${w}w`).join(', '),
})

export const projects = [
  {
    id: 'palace-wedding',
    title: 'Grand Palace Wedding',
    location: 'Udaipur, Rajasthan',
    category: 'Destination Wedding',
    year: '2024',
    image: '1519741497674-611481863552',
    gallery: ['1519225421980-715cb0215aed', '1465495976277-4387d4b0b4c6', '1511285560929-80b456fea0bc'],
    summary:
      'A three-day royal celebration for 600 guests — lakeside mandap, palace mehndi and a fireworks finale, choreographed to the minute.',
    scope: ['Full wedding design', 'Décor & staging', 'Guest logistics', 'Entertainment & production'],
    quote: 'Every ritual felt effortless. Our families simply enjoyed the days.',
  },
  {
    id: 'corporate-gala',
    title: 'Corporate Annual Gala',
    location: 'Gurugram, Haryana',
    category: 'Corporate',
    year: '2024',
    image: '1511578314322-379afb476865',
    gallery: ['1540575467063-178a50c2df87', '1478146896981-b80fe463b330', '1508997449629-303059a039c0'],
    summary:
      'An awards night for 1,200 employees — a branded stage, live band and seated dinner delivered with corporate precision.',
    scope: ['Concept & theme', 'Stage & AV production', 'Catering & hospitality', 'Run-of-show management'],
    quote: 'Slick, on-brand and on-time. Leadership was genuinely impressed.',
  },
  {
    id: 'sangeet-night',
    title: 'Sangeet & Cocktail Night',
    location: 'New Delhi',
    category: 'Wedding Function',
    year: '2024',
    image: '1470229722913-7c0e2dbbafd3',
    gallery: ['1478146896981-b80fe463b330', '1465495976277-4387d4b0b4c6', '1519741497674-611481863552'],
    summary:
      'A high-energy sangeet with a custom LED stage, professional choreography and a late-night lounge that ran till dawn.',
    scope: ['Stage & lighting design', 'Choreography liaison', 'Bar & lounge styling', 'Sound & production'],
    quote: 'The dance floor never emptied. Exactly the night we imagined.',
  },
  {
    id: 'product-launch',
    title: 'Product Launch Spectacle',
    location: 'Mumbai, Maharashtra',
    category: 'Brand Experience',
    year: '2023',
    image: '1492684223066-81342ee5ff30',
    gallery: ['1478146896981-b80fe463b330', '1540575467063-178a50c2df87', '1470229722913-7c0e2dbbafd3'],
    summary:
      'A press-and-influencer launch built around a single reveal moment — immersive set, projection mapping and a media-ready flow.',
    scope: ['Experience design', 'Set & projection', 'Media & guest management', 'Show calling'],
    quote: 'The reveal landed perfectly. Coverage exceeded every target.',
  },
  {
    id: 'milestone-soiree',
    title: 'Milestone Birthday Soirée',
    location: 'Gurugram, Haryana',
    category: 'Social',
    year: '2024',
    image: '1530103862676-de8c9debad1d',
    gallery: ['1533174072545-7a4b6ad7a6c3', '1519225421980-715cb0215aed', '1511285560929-80b456fea0bc'],
    summary:
      'An intimate 60th celebration — warm candlelight, a curated menu and a live jazz trio for a hundred close friends.',
    scope: ['Intimate event design', 'Floral & table styling', 'Curated catering', 'Live entertainment'],
    quote: 'It felt personal and beautiful — not an event, a memory.',
  },
  {
    id: 'farmhouse-engagement',
    title: 'Farmhouse Engagement',
    location: 'Chattarpur, New Delhi',
    category: 'Engagement',
    year: '2023',
    image: '1464366400600-7168b8af9bc3',
    gallery: ['1519225421980-715cb0215aed', '1465495976277-4387d4b0b4c6', '1533174072545-7a4b6ad7a6c3'],
    summary:
      'A garden engagement at golden hour — pastel florals, fairy-lit canopies and a seated dinner beneath the open sky.',
    scope: ['Outdoor event design', 'Floral canopies', 'Ambient lighting', 'Dining & service'],
    quote: 'Straight out of a magazine — and completely stress-free for us.',
  },
]

export const services = [
  {
    n: '01',
    title: 'Wedding Planning & Design',
    text: 'Full-service weddings and multi-day celebrations — designed, planned and produced end to end.',
  },
  {
    n: '02',
    title: 'Corporate Events & Conferences',
    text: 'Conferences, galas, off-sites and awards nights delivered with brand precision and calm control.',
  },
  {
    n: '03',
    title: 'Décor, Styling & Staging',
    text: 'Signature sets, florals and staging that turn a venue into an atmosphere guests remember.',
  },
  {
    n: '04',
    title: 'Catering & Hospitality',
    text: 'Curated menus and seamless service, from intimate dinners to banquets for thousands.',
  },
  {
    n: '05',
    title: 'Entertainment & Talent',
    text: 'Artists, bands, DJs, hosts and performers — sourced, booked and stage-managed for you.',
  },
  {
    n: '06',
    title: 'Production, Sound & Lighting',
    text: 'Stages, AV, projection and lighting engineered so every moment lands exactly on cue.',
  },
  {
    n: '07',
    title: 'Venue Sourcing & Logistics',
    text: 'The right venue, permits, travel and timelines — the invisible groundwork that holds it all together.',
  },
  {
    n: '08',
    title: 'Guest Management & RSVP',
    text: 'Invitations, RSVPs, hospitality desks and travel — every guest looked after from arrival to farewell.',
  },
]

export const stats = [
  { value: 12, suffix: '+', label: 'Years of experience' },
  { value: 500, suffix: '+', label: 'Events delivered' },
  { value: 40, suffix: '+', label: 'Cities & venues' },
  { value: 100, suffix: '%', label: 'Client satisfaction' },
]

export const process = [
  {
    n: '01',
    title: 'Consultation',
    text: 'We listen first — your vision, guest count, dates and budget. Everything begins with understanding the occasion.',
  },
  {
    n: '02',
    title: 'Concept & Theme',
    text: 'A clear creative direction: mood, design language and the emotional arc your guests will move through.',
  },
  {
    n: '03',
    title: 'Planning & Budgeting',
    text: 'Timelines, vendors and logistics locked down, with a transparent budget you sign off with confidence.',
  },
  {
    n: '04',
    title: 'Design & Production',
    text: 'Décor, staging, catering, AV and entertainment brought together — rehearsed and ready before the day.',
  },
  {
    n: '05',
    title: 'Execution',
    text: 'A dedicated on-ground team runs the show to the minute, so nothing is left to chance on the day.',
  },
  {
    n: '06',
    title: 'The Celebration',
    text: 'You are fully present with your guests while we handle every detail — start to the final farewell.',
  },
]

export const testimonials = [
  {
    quote:
      'Kamal Raj Events gave us the wedding we had pictured for years — and then made it better. Three days, hundreds of guests, and our families never felt a single worry.',
    name: 'Ananya & Rohit',
    project: 'Destination Wedding',
    location: 'Udaipur',
  },
  {
    quote:
      'They ran our annual gala like clockwork. Branded, seamless and genuinely impressive — our leadership has already booked them for next year.',
    name: 'Sandeep Arora',
    project: 'Corporate Gala',
    location: 'Gurugram',
  },
  {
    quote:
      'From concept to the last song, everything felt personal and beautifully handled. Our guests are still talking about the evening.',
    name: 'Meera Kapoor',
    project: 'Milestone Celebration',
    location: 'New Delhi',
  },
]

export const materials = [
  { id: '1519225421980-715cb0215aed', label: 'Décor & Florals' },
  { id: '1478146896981-b80fe463b330', label: 'Lighting & Ambience' },
  { id: '1533174072545-7a4b6ad7a6c3', label: 'Table & Detail' },
  { id: '1470229722913-7c0e2dbbafd3', label: 'Stage & Production' },
]

export const nav = [
  { label: 'Events', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#philosophy' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const studio = {
  name: 'Kamal Raj Events',
  logoMain: 'Kamal Raj',
  logoSub: 'Events',
  tagline: 'Moments, Designed to Be Remembered.',
  heroEyebrow: 'Event Management · Gurugram, Delhi NCR',
  heroLines: ['Celebrations,', 'crafted', 'around you.'],
  heroFoot: 'Weddings · Corporate · Social',
  introLead:
    'Kamal Raj Events is a Gurugram-based event management company creating weddings, corporate experiences and social celebrations across Delhi NCR and beyond. From the first idea to the final farewell, we design and produce events that feel effortless, personal and unforgettable.',
  address: 'Parsvnath Exotica, 55, Golf Course Rd, DLF Phase 5, Sector 53, Gurugram, Haryana 122011',
  phoneDisplay: '+91 96540 70264',
  phoneHref: '+919654070264',
  email: 'hello@kamalrajevents.in',
  instagram: 'kamalrajevents',
  instagramUrl: 'https://instagram.com/kamalrajevents',
}
