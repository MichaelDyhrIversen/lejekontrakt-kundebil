# Lejekontrakt - Kundebil

En browser-baseret applikation til oprettelse og administration af lejekontrakter for kundebiler.

## 🚀 Funktioner

### ✅ Kernefunktionalitet
- **Form-baseret indtastning** med realtids forhåndsvisning
- **LocalStorage persistens** - alle data gemmes lokalt i browseren
- **Udlejer-profiler** - opret og gendan flere udlejerprofiler
- **Bilbibliotek** - vedligehold en liste over ofte udlejede biler
- **Standardværdier** - sæt standardværdier for nye kontrakter
- **Print-optimeret** - passer præcist på 2 A4-sider
- **Totally offline** - ingen server-kommunikation

### 📋 Datahåndtering
- Auto-gem af aktuel kontrakt
- Eksport/import af alle data som JSON backup
- Standard udlejer-profil
- Validering af felter

### 🎨 Brugervenligt Interface
- Split-view med form til venstre og preview til højre
- Direkte redigering i preview (contenteditable)
- Responsive design (fungerer på tablets og mobil)
- Modal-baserede indstillinger

## 📁 Projektstruktur

```
lejekontrakt.qcompany.dk/
├── index.html              # Hovedapplikation
├── template.html           # Original template (reference)
├── css/
│   ├── app.css            # Applikations UI-styles
│   └── print.css          # Print-specifikke styles
├── js/
│   ├── storage.js         # LocalStorage manager
│   ├── app.js             # Hovedkontroller
│   └── modules/
│       ├── settings.js    # Indstillinger
│       ├── udlejer.js     # Udlejer-profiler
│       ├── cars.js        # Bilbibliotek
│       ├── form.js        # Kontrakt-form
│       ├── preview.js     # Template preview
│       └── print.js       # Print-håndtering
├── plans/
│   └── rental-contract-plan.md
└── README.md              # Denne fil
```

## 🎯 Kom i gang

### Installation
Ingen installation nødvendig! Åbn blot `index.html` i en moderne browser:

1. Naviger til projektmappen
2. Dobbeltklik på `index.html`
3. Eller højreklik og vælg "Åbn med" → din foretrukne browser

### Første gang opsætning

1. **Tilføj en udlejer-profil**
   - Klik på "Indstillinger" knappen
   - Gå til "Udlejere" fanen
   - Klik "Tilføj udlejer"
   - Udfyld navn, adresse, og postnr/by
   - Gem - den første profil bliver automatisk standard

2. **Tilføj biler til biblioteket** (valgfrit)
   - I indstillinger, gå til "Biler" fanen
   - Tilføj model og registreringsnummer
   - Disse kan hurtigt vælges når du opretter kontrakter

3. **Sæt standardværdier** (valgfrit)
   - Gå til "Standardværdier" fanen
   - Indstil almindelige værdier (f.eks. Kasko: 5000)
   - Disse bruges automatisk i nye kontrakter

## 📝 Brug

### Opret ny kontrakt

1. Klik "Ny Kontrakt" for at starte fra bunden
2. Brug dropdown-menuerne til at vælge udlejer og bil (hvis konfigureret)
3. Udfyld lejeroplysninger, lejeperiode, osv.
4. Formular gemmes automatisk mens du skriver
5. Se preview opdateres live til højre

### Redigering

**I formularen (venstre):**
- Standard formularfelter
- Ændringer gemmes automatisk efter 300ms

**I preview (højre):**
- Klik på et hvilket som helst felt for at redigere direkte
- Ændringer synkroniseres tilbage til formularen

### Udskrivning

1. Udfyld alle nødvendige felter
2. Klik "Udskriv" knappen
3. Brug browser's print-dialog:
   - Vælg printer eller "Gem som PDF"
   - Sørg for A4-papir er valgt
   - Margin: Standard
4. Output vil være præcis 2 sider

### Data management

**Eksport:**
- Indstillinger → Backup → "Eksporter alle data"
- Gemmer en JSON-fil med alle udlejere, biler, indstillinger, og aktuel kontrakt

**Import:**
- Indstillinger → Backup → "Importer data"
- Vælg en tidligere eksporteret JSON-fil
- Dette overskriver alle eksisterende data

## 🔧 Tekniske detaljer

### Browser-kompatibilitet
- ✅ Chrome/Edge (anbefalet)
- ✅ Firefox
- ✅ Safari
- ⚠️ Internet Explorer: Ikke understøttet

### LocalStorage
- Alle data gemmes i browser's LocalStorage
- Typisk begrænsning: 5-10MB (mere end rigeligt)
- Data er per-domæne/origin
- Persistence: Indtil du rydder browser-data

### Data-struktur

Kontrakt-objektet følger denne struktur:

```javascript
{
  udlejer: { navn, adresse, postby },
  lejer: { navn, tlf, koerekortnr, koerekort_udstedt },
  foerer: { koerekortnr, koerekort_udstedt },
  bil: { model, regnr, km_start, km_slut, kort_km, braendstof_pr_km },
  leje: { fra, fra_kl, til, til_kl },
  pris: { lejepris },
  selvrisiko: { ansvar, kasko, tillaeg },
  bemaerkninger: string,
  meta: { dato },
  erklaering: { ejer, regnr, dato, navn, tlf }
}
```

### Print-optimering

Print-stylingen i [`css/print.css`](css/print.css) er optimeret til at passe præcis på 2 A4-sider:

**Side 1:** Alle kontraktdetaljer
- Udlejer/lejer info
- Biloplysninger
- Lejeperiode
- Pris og selvrisiko
- Underskrifter

**Side 2:** Tro og love-erklæring
- Erklæringstekst
- Vanvidskørsel-information
- Underskrift

Optimeringer inkluderer:
- Reducerede margins (10mm top/bottom, 12mm sides)
- Komprimerede font-størrelser
- Minimal padding og spacing
- Strategiske page-break kontroller

## 🛠️ Udvikling

### Moduler

**StorageManager** ([`js/storage.js`](js/storage.js))
- CRUD operationer for alle data-typer
- UUID generation
- Export/import funktionalitet

**App** ([`js/app.js`](js/app.js))
- Hovedapplikations-controller
- State management
- Event koordinering

**ContractForm** ([`js/modules/form.js`](js/modules/form.js))
- Form input håndtering
- Auto-save med debouncing
- Udlejer/bil selector logik

**TemplatePreview** ([`js/modules/preview.js`](js/modules/preview.js))
- Realtids sync mellem form og preview
- Contenteditable håndtering
- Bi-direktionel data binding

**SettingsManager** ([`js/modules/settings.js`](js/modules/settings.js))
- Modal håndtering
- Tab switching
- Export/import UI

**UdlejerManager** ([`js/modules/udlejer.js`](js/modules/udlejer.js))
- CRUD for udlejer-profiler
- Standard profil management

**CarManager** ([`js/modules/cars.js`](js/modules/cars.js))
- CRUD for bil-bibliotek

**PrintManager** ([`js/modules/print.js`](js/modules/print.js))
- Print funktionalitet

### Tilpasning

**Ændre standardværdier:**
Rediger i [`js/storage.js`](js/storage.js:19-23):
```javascript
defaultValues: {
  selvrisiko: { ansvar: "", kasko: "5000", tillaeg: "" },
  bil: { braendstof_pr_km: "0,00" }
}
```

**Ændre template layout:**
Rediger HTML i [`index.html`](index.html) under `#page-1` og `#page-2` sections.

**Justere print-layout:**
Modificer [`css/print.css`](css/print.css) - fokuser på:
- `@page` margins
- `.box` padding
- Font-størrelser
- Gap mellem elementer

## ⚠️ Vigtige noter

1. **Data backup:** Brug eksport-funktionen regelmæssigt for at sikre dine data
2. **Browser cache:** Ryd ikke browser-data hvis du vil beholde dine kontrakter
3. **Privatliv:** Alle data forbliver lokalt - ingen cloud sync
4. **Multi-device:** Data deles ikke mellem enheder eller browsere
5. **Print-test:** Test altid print preview før endelig udskrift

## 📄 Licens

Dette projekt er udviklet til intern brug hos QCompany.

## 🤝 Support

For spørgsmål eller problemer, kontakt udviklingsteamet.

---

**Version:** 1.0.0  
**Sidste opdatering:** Marts 2026  
**Udviklet med:** Vanilla JavaScript, ingen eksterne dependencies
