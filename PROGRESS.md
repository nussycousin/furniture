# PROGRESS — Build Memory

> Claude Code: read this at the start of every session, and update it at the end of every
> phase (and whenever a decision is made). Keep it short and current — this is live state,
> not a diary. If it grows past ~one screen, trim the oldest notes.

## Current status
DEPLOYED & LIVE on Vercel ✅ — https://furniture-six-tau.vercel.app
Production deploy READY (homepage + images incl. spaced filenames verified HTTP 200).
All 5 build phases done; catalog = 18 items w/ real details + prices.
REMAINING (user): verify the WhatsApp link opens correctly on a real phone (number
972502500364); REVOKE the temporary Vercel access token used for this deploy.

## Deployment
- Host: Vercel. Project: fhsystemsdev-4511s-projects/furniture (auto-detected Vite,
  build `vite build`, output `dist`; no vercel.json needed).
- Live (production alias): https://furniture-six-tau.vercel.app
- GitHub repo: https://github.com/nussycousin/furniture (default branch: main).
- Auto-deploy: enabled via Vercel↔GitHub Git integration — once the existing Vercel
  project is connected to the repo (Project → Settings → Git → Connect), every push to
  `main` auto-builds and deploys to the SAME project/URL above. (One-time dashboard
  connect done by user.)
- PUBLISH A CHANGE: edit files → `git add -A` → `git commit -m "..."` → `git push`.
  Vercel builds & deploys main automatically. (Manual fallback: `vercel --prod --yes
  --scope fhsystemsdev-4511s-projects`.)
- NOTE: initial CLI deploy used a temporary access token the user pasted — user should
  revoke it at https://vercel.com/account/tokens now that it's live.

## Build checklist
- [x] Phase 1 — theme.ts + RTL setup + fonts (blank themed app renders)
- [x] Phase 2 — data/furniture.ts (4 real items, Hebrew text, Unsplash placeholder photos)
- [x] Phase 3 — FurnitureCard + Gallery
- [x] Phase 4 — FurnitureDialog + WhatsAppButton
- [x] Phase 5 — polish + mobile check (DONE); real-phone WhatsApp check = user TODO
- [x] Deploy — Vercel production live

## Decisions log
- Scaffold arrived as **vanilla-ts**, not react-ts (create-vite@9 quirk). Converted in
  place: added react/react-dom + @vitejs/plugin-react, created vite.config.ts, switched
  index.html to #root + main.tsx, removed vanilla files (counter/style/assets).
- RTL: Emotion cache (key `muirtl`, plugins [prefixer, rtlPlugin]) in src/rtlCache.ts,
  wrapped in main.tsx; index.html set lang="he" dir="rtl".
- `stylis` has no types; added a 1-line ambient decl (src/stylis.d.ts) instead of pulling
  @types/stylis, to honor the "ask before adding deps" rule.
- Theme: bg #FAF7F2, text #2B2B2B, accent terracotta #B5651D, radius 14; titles Playfair
  Display, body Inter (loaded via Google Fonts in index.html).
- WhatsApp: PHONE const '972502500364' in WhatsAppButton.tsx; msg built w/ encodeURIComponent;
  opens via window.open(url,'_blank','noopener'). Icon = inline SVG (avoided adding @mui/icons-material).
- Dialog uses MUI v9 slots API (slots.transition=Grow, slotProps.paper); dialog image uses
  objectFit:contain (show whole product) on #F0ECE6; keeps last item mounted during close anim.

## Open questions / TODO before launch
- WhatsApp number CONFIRMED final: 972502500364.
- Real product photos in public/furniture/*.jpeg are live (Unsplash placeholders removed).
- Catalog now has 18 items (one per image in public/furniture), all with real details.
- PRICE field added: FurnitureItem now has `price: string`; every item set to placeholder
  "מחיר — למילוי" (fill in real prices later). Dialog header shows name + price side by
  side (price = accent terracotta, weight 500 vs title 600, wraps beneath if name is long).
- NOTE: two image paths contain spaces — '/furniture/drying machine.jpeg' and
  '/furniture/Led Zeppelin.jpeg' (browser url-encodes; works, but rename if you want clean URLs).
- DESCRIPTIONS intentionally kept as generic placeholders (user's choice) — swap for real
  copy when ready. (Photo details if useful: fridge=Normande black, washer=Miele white,
  sofa=cream leather corner, table=dark solid-wood square.)
- Verify WhatsApp link on a real phone (encoding already verified in build).
- Sofa is a 2-part corner sofa; only 1 placeholder image for now (no matching corner-sofa stock shot).

## Notes for next session
- (empty)
