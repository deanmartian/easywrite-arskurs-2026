# Easywrite Årskurs 2026

En modern landningssida för Easywrite's skrivkurs "Årskurs 2026" - ett årsprogram för blivande författare som vill utveckla sin skrivkonst.

> ✅ **Redo för produktion!** Formspree-formuläret är redan konfigurerat (ID: `f/myzndddj`) och redo att ta emot anmälningar.

## 📝 Projektbeskrivning

Årskurs 2026 är ett årsprogram för blivande författare som kombinerar individuell handledning, inspirerande skrivuppgifter och en stark gemenskap med andra deltagare. Denna landningssida presenterar kursen och erbjuder en smidig anmälningsprocess genom Formspree-integration.

## ✨ Funktioner

- **Responsiv design** - Fungerar perfekt på alla enheter
- **Smooth scroll-animationer** - Interaktiva animationer när användaren scrollar
- **Kontaktformulär** - Integrerat med Formspree för enkel hantering av anmälningar
- **Modern UI** - Byggd med shadcn/ui komponenter och Tailwind CSS
- **TypeScript** - Fullständig typsäkerhet
- **SEO-optimerad** - Förberedd för sökmotoroptimering
- **Vercel-redo** - Konfigurerad för smidig deployment

## 🛠 Teknisk stack

- **Framework**: Next.js 15
- **Språk**: TypeScript
- **Styling**: Tailwind CSS
- **UI-komponenter**: shadcn/ui
- **Animationer**: CSS transitions + Intersection Observer API
- **Formulärhantering**: Formspree
- **Deployment**: Vercel
- **Pakethanterare**: Bun

## 🚀 Kom igång

### Förutsättningar

- Node.js 18+ eller Bun
- Git

### Installation

1. Klona repositoryt:
```bash
git clone https://github.com/deanmartian/easywrite-arskurs-2026.git
cd easywrite-arskurs-2026
```

2. Installera beroenden:
```bash
bun install
```

3. Starta utvecklingsservern:
```bash
bun dev
```

4. Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## 📧 Formspree-integration

✅ **Kontaktformuläret är redan konfigurerat och redo att använda!**

Formuläret använder Formspree-ID: `f/myzndddj` och skickar alla anmälningar direkt till `post@easywrite.se`.

### ✨ Vad som redan är konfigurerat:
- **Form ID**: `f/myzndddj` är redan inställt i koden
- **E-postmottagare**: Anmälningar skickas till `post@easywrite.se`
- **Automatisk ämnesrad**: "Ny anmälan till Årskurs 2026"
- **Spamskydd**: Inbyggt skydd mot spam och bots

### 🚀 Hur du aktiverar formuläret:
1. **Logga in på Formspree**: Gå till [formspree.io](https://formspree.io) med kontot som äger formulär `f/myzndddj`
2. **Verifiera e-post**: Se till att `post@easywrite.se` är verifierad i Formspree
3. **Testa formuläret**: Formuläret fungerar direkt när sidan är deployed!

### Formspree-konfiguration
Formuläret är konfigurerat med följande fält:
- **name** - Namn (obligatoriskt)
- **email** - E-postadress (obligatoriskt)
- **phone** - Telefonnummer (valfritt)
- **message** - Meddelande (valfritt)
- **_subject** - Automatisk ämnesrad: "Ny anmälan till Årskurs 2026"
- **_replyto** - Automatisk svar-till från användarens e-post

## 🌐 Deployment till Vercel

Projektet är förkonfigurerat för Vercel-deployment med `vercel.json`.

### Automatisk deployment från GitHub

1. Gå till [vercel.com](https://vercel.com)
2. Logga in med ditt GitHub-konto
3. Klicka på "New Project"
4. Välj repositoryt `easywrite-arskurs-2026`
5. Vercel detekterar automatiskt Next.js och använder rätt inställningar
6. Klicka på "Deploy"

### Manuell deployment

```bash
# Installera Vercel CLI
npm i -g vercel

# Logga in
vercel login

# Deploya
vercel --prod
```

### Miljövariabler (valfritt)

Om du vill använda miljövariabler för Formspree:

1. I Vercel dashboard, gå till Project Settings > Environment Variables
2. Lägg till:
   - `NEXT_PUBLIC_FORMSPREE_ID` - Din Formspree formulär-ID

3. Uppdatera koden för att använda miljövariabeln:
```typescript
const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'myzndddj';
const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
```

## 📁 Projektstruktur

```
easywrite-arskurs-2026/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Huvudsida
│   │   ├── globals.css         # Globala stilar
│   │   └── ClientBody.tsx      # Client-side wrapper
│   ├── components/
│   │   └── ui/                 # shadcn/ui komponenter
│   └── lib/
│       └── utils.ts            # Utility-funktioner
├── public/                     # Statiska filer
├── .gitignore                  # Git ignore-regler
├── vercel.json                 # Vercel-konfiguration
├── package.json                # Projektberoenden
├── tailwind.config.ts          # Tailwind-konfiguration
└── README.md                   # Denna fil
```

## 🎨 Anpassning

### Färger och styling
Projektet använder Tailwind CSS med anpassade färgvariabler. Huvudfärgerna kan ändras i `tailwind.config.ts`.

### Innehåll
- **Huvudtexten** - Redigera i `src/app/page.tsx`
- **Testimonials** - Uppdatera citaten i testimonials-sektionen
- **Kontaktinformation** - Ändra e-postadress i footer

### Animationer
Scroll-animationerna använder Intersection Observer API och kan anpassas genom att modifiera:
- Animation-timing i `useEffect`
- CSS transitions i klassnamnen
- Stagger-delays för kortanimationer

## 🔧 Utveckling

### Tillgängliga kommandon

```bash
# Utveckling
bun dev

# Byggning
bun run build

# Starta produktionsserver
bun start

# Linting
bun run lint

# Formatering
bun run format
```

### Kodkvalitet
Projektet använder:
- **ESLint** - Kodanalys
- **Biome** - Kodformatering
- **TypeScript** - Typsäkerhet

## 📞 Support

För frågor om kursen, kontakta:
- **E-post**: post@easywrite.se
- **Webbplats**: [easywrite.se](https://easywrite.se)

För teknisk support gällande denna webbplats, skapa en issue i detta repository.

## 📄 Licens

© 2025 Easywrite. Alla rättigheter förbehållna.

---

**Utvecklad med** ❤️ **för Easywrite Årskurs 2026**
