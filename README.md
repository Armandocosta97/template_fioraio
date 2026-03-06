# Sito Fioraio - Roadmap Operativa

Obiettivo: creare un sito elegante e pulito per un fioraio, **senza backend** (solo frontend + servizi esterni dove necessario).

## Stack
- Frontend: React + Vite + TypeScript
- Styling: CSS modulare (o CSS variables globali)
- Form contatti: Formspree/Getform (esterno)
- Deploy: Vercel o Netlify

## Avvio Progetto
```bash
npm install
npm run dev
npm run build
```

## Piano Step-by-Step

### Fase 0 - Raccolta Requisiti
Task:
- [ ] Definire pagine: Home, Servizi, Galleria, Contatti
- [ ] Definire stile: elegante, minimale, palette colori
- [ ] Definire contenuti: testi, prezzi indicativi, CTA
- [ ] Raccogliere immagini (alta qualita, orientamento coerente)

Output fase:
- Brief approvato (1 pagina con struttura e stile)

### Fase 1 - Base Tecnica
Task:
- [x] Pulire struttura iniziale del template
- [x] Creare layout base con `header`, `main`, `footer`
- [x] Impostare variabili CSS (colori, spaziature, tipografia)
- [ ] Impostare routing pagine (se multi-page)

Output fase:
- Skeleton navigabile e consistente su desktop/mobile

### Fase 2 - UI Elegante e Pulita
Task:
- [x] Hero con headline forte + CTA primaria
- [x] Sezione servizi con card pulite
- [x] Sezione galleria responsive
- [x] Sezione "Chi siamo" breve e autentica
- [x] Footer con contatti, orari, social

Output fase:
- Homepage completa con identita visiva coerente

### Fase 3 - Contatti Senza Backend
Task:
- [x] Creare form (nome, email, messaggio, privacy)
- [x] Collegare il form a Formspree/Getform
- [x] Aggiungere validazione client-side
- [x] Gestire stati UI: invio, successo, errore
- [x] Aggiungere campo honeypot anti-spam

Output fase:
- Flusso contatto funzionante end-to-end senza server custom

### Fase 4 - SEO + Accessibilita + Performance
Task:
- [ ] Meta title/description per ogni pagina
- [ ] Open Graph base
- [ ] Struttura heading corretta (`h1`, `h2`, ...)
- [ ] `alt` descrittivi per immagini
- [ ] Ottimizzare immagini (WebP/AVIF, lazy loading)
- [ ] Verifica Lighthouse (Performance, SEO, A11y)

Output fase:
- Sito veloce, trovabile e accessibile

### Fase 5 - QA e Deploy
Task:
- [ ] Test responsive (mobile/tablet/desktop)
- [ ] Verifica link, CTA, form, social
- [ ] Build produzione senza errori
- [ ] Deploy su Vercel/Netlify
- [ ] Configurare dominio + HTTPS

Output fase:
- Sito online pronto per utenti reali

## Task Board (Priorita)

### Alta Priorita (MVP)
- [x] Layout base completo
- [x] Homepage elegante
- [x] Form contatti funzionante
- [ ] Deploy online

### Media Priorita
- [ ] Pagina galleria avanzata con filtri
- [ ] Animazioni leggere (fade/slide)
- [ ] SEO avanzata (sitemap/robots)

### Bassa Priorita
- [ ] Blog/notizie stagionali
- [ ] Multi-lingua
- [ ] Integrazione catalogo prodotti dinamico

## Definition of Done
- [ ] Design coerente con stile "elegante e pulito"
- [ ] Navigazione chiara su tutte le pagine
- [ ] Form contatti testato e funzionante
- [ ] Lighthouse: nessun problema critico
- [ ] Deploy stabile con dominio HTTPS

## Prossima Azione Consigliata
Partire da **Fase 4** con:
1. configurare endpoint reale Formspree in ambiente
2. test completo invio form su produzione
3. ottimizzare immagini locali in WebP/AVIF
4. completare task SEO (meta tag + Open Graph)

## Avanzamento Implementazione

Data: 6 marzo 2026

Completato:
- Pulizia completa template Vite iniziale (rimozione demo e asset non necessari)
- Layout single-page con struttura semantica (`header`, `main`, `footer`)
- Navigazione principale con ancore interne (Home, Servizi, Galleria, Contatti)
- Sezioni base implementate: Hero, Servizi, Galleria, Chi siamo, Contatti
- Design token CSS (palette, spaziature, radius, shadow) e base responsive
- Form contatti completo con validazione, stati di invio, honeypot anti-spam
- Integrazione Formspree pronta tramite variabile `VITE_FORMSPREE_ENDPOINT`
- Sostituzione immagini generiche con foto bouquet/atelier piu veritiere (hero + galleria)
- Download immagini in locale su `public/images` e collegamento diretto dal frontend
- Riduzione dimensioni immagini JPEG per migliorare caricamento
- Hero aggiornata con nuova immagine bouquet grande e ricca (diversa dalle immagini gia presenti)
- Hero aggiornata con bouquet misto (grande, multicolore) piu coerente con la richiesta
- Redesign sezione Servizi: gerarchia tipografica, CTA dedicate, layout 2+1 e hover piu elegante

## Configurazione Form

1. Copia `.env.example` in `.env`
2. Sostituisci `VITE_FORMSPREE_ENDPOINT` con il tuo endpoint Formspree
3. Riavvia il server di sviluppo

## Note Immagini

- Le immagini ora sono servite localmente da `public/images`.
- La conversione in WebP/AVIF richiede tool non presenti in questo ambiente (`cwebp`/`avifenc`).
