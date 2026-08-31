# Sunrise Hotel — Demo Website

A front-end demo website for **Sunrise Hotel** (Famagusta, Cyprus), built to showcase a hotel
brand and host the **CMND.ai** AI hotel assistant. All hotel content is mock/demo data — this is
not a real booking platform.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

## Install & Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## CMND.ai Chatbot Integration

The chatbot widget is already wired up and live:

- `src/components/ai/HotelAIWidget.tsx` — loads `https://embed.cmnd.ai/widget.js` via
  `next/script` and calls `window.cmndChat("init", { chatbot_id: 349, organization_id: 102 })`
  once the script loads. Rendered once, globally, from `src/app/layout.tsx`.
- If CMND.ai ever changes the chatbot/org ID or adds an official "open" command, update only
  this file.
- "Ask AI" buttons across the site call the `askAI()` helper exported from the same file.

## Data

All hotel content (rooms, facilities, services, dining, activities, policies, contact info)
lives in `src/data/hotel.ts`. Update it there to keep the site in sync with the chatbot's data.

## Deploy

Recommended: **Vercel** (zero-config for Next.js App Router).

```bash
npx vercel
```

GitHub Pages is not used here since the project relies on the Next.js server/image runtime.
