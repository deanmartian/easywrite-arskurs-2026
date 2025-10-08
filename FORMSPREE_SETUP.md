# 📧 Formspree Setup för Easywrite Årskurs 2026

## Steg för att aktivera formulärhantering:

### 1. Skapa Formspree-konto
- Gå till [formspree.io](https://formspree.io)
- Registrera ett gratis konto
- Verifiera din e-post

### 2. Skapa nytt formulär
- Klicka på "New Form"
- Namnge formuläret: "Årskurs 2026 Anmälningar"
- Ange din e-post: `post@easywrite.se`

### 3. Få formulär-ID
- Kopiera formulär-ID:t (format: `f/XXXXXXXX`)
- Exempel: `f/mzzzpjka`

### 4. Uppdatera koden
I filen `src/app/page.tsx`, på rad ~81, ersätt:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```
med:
```javascript
const response = await fetch('https://formspree.io/f/DITT_FORM_ID', {
```

### 5. Deploy till Vercel
- Pusha koden till GitHub
- Koppla GitHub-repo till Vercel
- Automatisk deployment sker

## 📧 Vad händer när någon skickar formuläret:

✅ **E-post till dig**: Anmälan skickas direkt till `post@easywrite.se`
✅ **Dashboard**: Alla anmälningar syns i Formspree dashboard
✅ **Spamskydd**: Inbyggt skydd mot spam och bots
✅ **Autoresponder**: Kan ställas in för automatiskt svar till användaren

## 💰 Kostnad:
- **Gratis**: 50 submissions/månad
- **Gold ($10/mån)**: 1,000 submissions/månad
- **Platinum ($40/mån)**: 10,000 submissions/månad

## 🔧 Extra funktioner du kan aktivera:
- Autoresponder till användaren
- Webhook till Slack/Discord
- CSV-export av alla anmälningar
- Anpassade tack-sidor
