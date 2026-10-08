# Paradise Spa – Next.js

Next.js 14 (App Router, TypeScript) recreation of the Paradise Spa website with react-slick carousels.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Carousels (react-slick)
`components/Slider.tsx` holds every carousel preset: `hero` (fade + autoplay), `cards` (3 → 2 → 1), `gallery` (4 → 3 → 2 → 1), `blogs`, `testimonials`.
Used on the home page, service detail pages and reviews.

## Images
Drop your photos into `public/images/` (missing ones show a gradient placeholder):
- `hero-1.jpg … hero-3.jpg`, `about-1.jpg`, `about-2.jpg`, `visit.jpg`
- `gallery-1.jpg … gallery-6.jpg`, `social-1.jpg … social-4.jpg`
- `services/<slug>.jpg` (and `<slug>-2.jpg`, `<slug>-3.jpg` for detail pages)
- `packages/half-day-package.jpg`, `packages/full-day-package.jpg`
- `blog/<slug>.jpg`

## Content
All services, prices, packages, blogs and reviews live in `lib/data.ts`.

## Backend
`app/api/booking/route.ts` and `app/api/contact/route.ts` validate and log requests; plug in email/DB there.
Booking promo code for testing: `PARADISE10`.
