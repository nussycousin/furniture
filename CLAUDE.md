# Furniture Landing Page — Project Memory

## What we're building
A single, mobile-first landing page to sell a small furniture collection.
Flow: a gallery of cards (image + short title) → tap a card → a detail view
(larger image / multiple images, dimensions, description) → a "Buy on WhatsApp"
button that opens WhatsApp with a pre-filled Hebrew message.
No backend. Static mock data only. UI language is Hebrew (RTL).

## Stack (already scaffolded — do NOT re-scaffold or reinstall)
- Vite + React + TypeScript
- MUI (@mui/material) + Emotion (@emotion/react, @emotion/styled)
- For RTL: add `stylis-plugin-rtl` (ask before adding anything else)

## Target project structure
```
src/
  data/furniture.ts        # single source of truth for items
  theme.ts                 # MUI theme: colors, typography, RTL
  components/
    Gallery.tsx            # responsive grid of cards
    FurnitureCard.tsx      # one card (image + title)
    FurnitureDialog.tsx    # detail modal
    WhatsAppButton.tsx     # reusable button
  App.tsx                  # composes the gallery + dialog state
```

## Data model
```ts
type FurnitureItem = {
  id: string;
  name: string;          // Hebrew, e.g. "כורסת קטיפה"
  images: string[];      // 1 or more image URLs (Unsplash furniture photos)
  dimensions: string;    // e.g. "רוחב 80 × עומק 75 × גובה 90 ס״מ"
  description: string;   // Hebrew, 1–2 sentences
};
```

## WhatsApp link — CRITICAL
The button opens, in a new tab:
`https://wa.me/972502500364?text=<encoded>`
where the message text is exactly:
`היי אני רוצה לקנות את הרהיט <ITEM_NAME>`  (<ITEM_NAME> = the item's `name`)

**YOU MUST** build the URL with `encodeURIComponent(message)` so the Hebrew
encodes correctly. Never hand-encode the string. Open with
`window.open(url, "_blank")` or an `<a target="_blank" rel="noopener">`.

## Design direction (make it look intentional, not generic)
- Aesthetic: warm, editorial furniture-boutique. Calm, premium, generous whitespace.
- Color: warm off-white background (~#FAF7F2), charcoal text (~#2B2B2B), one quiet
  accent (muted terracotta ~#B5651D or olive). No pure black, no harsh blue.
- Type: an elegant display face for titles (e.g. Playfair Display or Fraunces) and a
  clean sans for body (e.g. Inter). Load via Google Fonts; wire into the MUI theme.
- Cards: rounded corners (12–16px), soft shadow, image on top at a consistent 4:5 ratio,
  title below in a refined weight. Gentle lift on hover/press.
- Grid: large single column on small phones is fine; 2 columns from ~600px up. Generous gap.
- Dialog: full-width on mobile; image(s) on top (a simple swipe/scroll gallery if multiple),
  details below, the WhatsApp button prominent near the bottom in the accent color.
- RTL: the whole app is Hebrew. Set `dir="rtl"`, create an Emotion cache with
  `stylis-plugin-rtl`, and wrap the app so MUI renders RTL. Text right-aligned.
- Motion: subtle only — a fade/scale on the dialog. Nothing flashy.

## Conventions
- TypeScript strict. Functional components + hooks only. No class components.
- Keep components small and single-purpose. No business logic in App.tsx beyond wiring.
- All user-facing text in Hebrew.
- Do not add dependencies beyond what's listed above without asking first.

## Build order — work in phases, pause for confirmation between each
1. `theme.ts` + RTL setup + fonts. Show me the blank, themed app.
2. `data/furniture.ts` with 4 realistic mock items (Unsplash furniture photos, Hebrew text).
3. `FurnitureCard` + `Gallery`.
4. `FurnitureDialog` with image(s), details, and `WhatsAppButton`.
5. Polish pass: spacing, mobile layout, and verify the WhatsApp link actually opens correctly.

## After each phase
- Run `npm run build` and confirm it compiles with no TypeScript errors before saying a phase is done.
- Update `PROGRESS.md`: check off what's done, log any decision or deviation, list what's next.

@PROGRESS.md
