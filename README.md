# Easywrite Årskurs 2026

En modern landningssida för Easywrite's skrivkurs "Årskurs 2026" - ett årsprogram för blivande författare som vill utveckla sin skrivkonst.

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

För att aktivera kontaktformuläret behöver du konfigurera Formspree:

### Steg 1: Skapa Formspree-konto
1. Gå till [formspree.io](https://formspree.io)
2. Skapa ett gratis konto
3. Skapa ett nytt formulär för "Easywrite Årskurs 2026"

### Steg 2: Konfigurera formuläret
1. Kopiera din Formspree-formulär-ID från dashboarden
2. Öppna `src/app/page.tsx`
3. Hitta raden:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```
4. Ersätt `YOUR_FORM_ID` med din riktiga formulär-ID

### Steg 3: Testa formuläret
1. Spara filen och starta om utvecklingsservern
2. Testa att skicka en anmälan
3. Kontrollera att du får e-postnotifikationer i Formspree

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
const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORM_ID';
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
