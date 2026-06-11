# Halawa & Heat — Nashville Ice Cream & Chai Website

> A portfolio case study: a modern, mobile-first website built for a local Nashville ice cream and chai shop.

## Overview

Built a full-stack website for **Halawa & Heat**, a Middle Eastern inspired ice cream and chai brand based in Nashville, TN. The site serves as their digital storefront — showcasing flavors, menu, shop location, and a live Instagram feed to connect with the community.

**Live Site:** [halawaheat.com](https://halawaheat.com)  
**Client:** Halawa & Heat — 360 Wallace Rd, Nashville, TN 37211

![Halawa & Heat](https://images.unsplash.com/photo-1560008581-09826d1de69e?w=1200&q=80)

## What I Built

- **Flavor Menu** — A browsable showcase of 11+ rotating small-batch ice cream flavors with pricing
- **Chai Menu** — Dedicated section for Karak Chai, Persian Chai, and the signature Chai Float
- **Live Instagram Feed** — Embedded real-time posts via [Behold](https://behold.so) synced to their [@halawa_heat](https://instagram.com/halawa_heat) account
- **Visit / Location Section** — Embedded Google Maps, address, hours, and directions
- **Mobile-First Design** — Fully responsive across phones, tablets, and desktop
- **SEO Foundation** — Meta tags, Open Graph, and canonical URLs for every route

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) (React + SSR/SSG) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui |
| Icons | Lucide React |
| Build Tool | Vite 7 |
| Package Manager | Bun |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 20+

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/halawa-heat.git
cd halawa-heat

# Install dependencies
bun install

# Start the dev server
bun dev
```

The site will be available at `http://localhost:3000`.

### Build for Production

```bash
bun run build
```

## Project Structure

```
src/
├── routes/           # File-based routes (TanStack Start)
│   ├── index.tsx     # Homepage
│   └── __root.tsx    # Root layout & SEO meta
├── components/       # Reusable UI components
│   └── ui/           # shadcn/ui primitives
├── assets/           # Images, logos, favicons
├── styles.css        # Tailwind CSS entry + theme tokens
└── lib/              # Utilities & helpers
```

## Notes for Future Updates

### Updating the logo

1. Replace `src/assets/hh-logo.png` with your new logo file
2. The logo will update automatically across the site

### Updating the Instagram feed

1. Create a free feed at [behold.so](https://behold.so)
2. Connect your Instagram Business/Creator account
3. Copy your **Feed ID** and paste it into the `InstagramFeed` component in `src/routes/index.tsx`

### Updating menu items

Edit the `flavors` array and `DrinkRow` components in `src/routes/index.tsx`.

---

**Client:** Halawa & Heat · Nashville, TN  
[Instagram](https://www.instagram.com/halawa_heat/) · [TikTok](https://www.tiktok.com/@halawa_heat)
