/**
 * Internationalization (i18n) Module
 * Supports: da (Danish), en (English), de (German)
 */

const I18nData = {

  /* ── DANISH ──────────────────────────────────────────────────────── */
  da: {
    // Header
    'ui.header.title': 'Lejekontrakt - Kundebil',
    'ui.header.btn_new': 'Ny Kontrakt',
    'ui.header.btn_settings': 'Indstillinger',
    'ui.header.btn_help': 'Hjælp',
    'ui.header.btn_print': 'Udskriv',

    // Form – Udlejer
    'ui.form.section_udlejer': '1. Udlejer',
    'ui.form.label_vaelg_profil': 'Vælg profil',
    'ui.form.option_select_udlejer': '-- Vælg udlejer --',
    'ui.form.label_navn': 'Navn',
    'ui.form.label_adresse': 'Adresse',
    'ui.form.label_postby': 'Postnr. & by',

    // Form – Lejer
    'ui.form.section_lejer': '2. Lejer',
    'ui.form.label_telefon': 'Telefon',
    'ui.form.label_koerekortnr': 'Kørekort nr.',
    'ui.form.label_udstedt_den': 'Udstedt den',

    // Form – Fører
    'ui.form.section_foerer': '3. Fører (udover lejer)',
    'ui.form.label_yderligere': 'Yderligere oplysninger',

    // Form – Bil
    'ui.form.section_bil': '4. Biloplysninger',
    'ui.form.label_vaelg_bil': 'Vælg bil',
    'ui.form.option_select_bil': '-- Vælg bil --',
    'ui.form.label_model': 'Model',
    'ui.form.label_regnr': 'Reg. nr.',
    'ui.form.label_km_start': 'Kilometer ved start',
    'ui.form.label_km_slut': 'Ved aflevering',
    'ui.form.label_koert_km': 'Kørt km',
    'ui.form.label_braendstof': 'Brændstof pr. km kr.',

    // Form – Lejeperiode
    'ui.form.section_lejeperiode': '5. Lejeperiode',
    'ui.form.label_fra_dato': 'Fra (dato)',
    'ui.form.label_kl': 'Kl.',
    'ui.form.label_til_dato': 'Til (dato)',

    // Form – Lejepris
    'ui.form.section_lejepris': '6. Lejepris',
    'ui.form.label_lejepris': 'Lejepris',

    // Form – Selvrisiko
    'ui.form.section_selvrisiko': '7. Selvrisiko',
    'ui.form.label_ansvar': 'Ansvar',
    'ui.form.label_kasko': 'Kasko',
    'ui.form.label_selvrisiko_forsikring': 'Selvrisiko-forsikring kr.',

    // Form – Bemærkninger
    'ui.form.section_bemaerkninger': 'Bemærkninger',
    'ui.form.label_bemaerkninger': 'Bemærkninger',

    // Form – Dato
    'ui.form.section_dato': 'Dato',
    'ui.form.label_kontraktdato': 'Kontraktdato',

    // Form – Erklæring
    'ui.form.section_erklaering': 'Tro og love-erklæring',
    'ui.form.label_koeretoej_ejet_af': 'Køretøjet er ejet af',
    'ui.form.label_registreringsnummer': 'Registreringsnummer',
    'ui.form.label_dato': 'Dato',

    // Contract page 1 – static labels
    'contract.title': 'Lejekontrakt',
    'contract.subtitle': '– Kundebil',
    'contract.section_udlejer': '1. Udlejer',
    'contract.section_lejer': '2. Lejer',
    'contract.label_tlf': 'Tlf:',
    'contract.label_koerekortnr': 'Kørekort nr.:',
    'contract.label_udstedt_den': 'Udstedt den:',
    'contract.section_foerer': '3. Fører – udover lejer',
    'contract.section_bil': '4. Biloplysninger',
    'contract.label_model': 'Model:',
    'contract.label_regnr': 'Reg. nr.:',
    'contract.section_lejeperiode': '5. Lejeperiode',
    'contract.label_fra': 'Fra:',
    'contract.label_kl': 'Kl:',
    'contract.label_til': 'Til:',
    'contract.label_aflevering_godkendes': 'Afleveringstidspunkt godkendes ved aflevering',
    'contract.caption_underskrift_lejer': 'Underskrift lejer',
    'contract.section_lejepris': '6. Lejepris',
    'contract.section_selvrisiko': '7. Selvrisiko',
    'contract.label_ansvar': 'Ansvar:',
    'contract.label_kasko': 'Kasko:',
    'contract.label_selvrisiko_forsikring': 'Selvrisiko-forsikring kr.:',
    'contract.label_bemaerkninger': 'Bemærkninger:',
    'contract.label_dato': 'Dato:',
    'contract.label_km_start': 'Kilometer ved start:',
    'contract.label_km_slut': 'Ved aflevering:',
    'contract.label_koert_km': 'Kørt km:',
    'contract.label_braendstof': 'Brændstof pr. km kr.:',
    'contract.caption_udlejer': 'Udlejer (navn/underskrift)',

    // Contract page 2
    'contract.page2.title': 'Tro og love\u2011erklæring vedrørende brug af køretøj',
    'contract.page2.intro': 'Undertegnede bekræfter, at jeg har fået overdraget et køretøj til mig.',
    'contract.page2.label_ejet_af': 'Køretøjet er ejet af:',
    'contract.page2.label_regnr': 'Køretøjet har registreringsnummer:',
    'contract.page2.para1': 'I forbindelse med overdragelsen af køretøjet erklærer jeg, at ejeren af køretøjet har undersøgt, at der som led i overdragelsen af køretøjet ikke er risiko for, at køretøjet vil blive anvendt til vanvidskørsel. Samtidig erklærer jeg, at ejeren har kontrolleret, at mit kørekort er gyldigt.',
    'contract.page2.para2': 'Jeg erklærer endvidere, at jeg og øvrige, der vil få adgang til køretøjet, ikke tidligere har foretaget vanvidskørsel eller andre grove overtrædelser af færdselsloven.',
    'contract.page2.para3': 'Som vanvidskørsel anses bl.a. kørsel med en hastighed over 200 km/t, kørsel med en hastighed over 100 km/t med en samtidig overskridelse af hastighedsgrænsen med mere end 100 pct., og spirituskørsel med en promille på over 2,00.',
    'contract.page2.para4': 'Jeg erklærer også, at jeg er gjort opmærksom på, at jeg kan blive pålagt det fulde erstatningsansvar, hvis køretøjet bliver konfiskeret som følge af vanvidskørsel.',
    'contract.page2.label_dato': 'Dato:',
    'contract.page2.label_navn': 'Navn:',
    'contract.page2.label_tlf': 'Tlf:',
    'contract.page2.caption_underskrift': 'Underskrift',

    // Settings modal
    'settings.title': 'Indstillinger',
    'settings.tab_udlejere': 'Udlejere',
    'settings.tab_biler': 'Biler',
    'settings.tab_defaults': 'Standardværdier',
    'settings.tab_stempel': 'Stempel',
    'settings.tab_tekster': 'Tekster',
    'settings.tab_export': 'Backup',
    'settings.udlejere.heading': 'Udlejerprofiler',
    'settings.udlejere.btn_add': 'Tilføj udlejer',
    'settings.udlejere.form_heading': 'Tilføj/Rediger Udlejer',
    'settings.udlejere.label_navn': 'Navn *',
    'settings.udlejere.label_adresse': 'Adresse',
    'settings.udlejere.label_postby': 'Postnr. & by',
    'settings.udlejere.btn_gem': 'Gem',
    'settings.udlejere.btn_annuller': 'Annuller',
    'settings.biler.heading': 'Bilbibliotek',
    'settings.biler.btn_add': 'Tilføj bil',
    'settings.biler.form_heading': 'Tilføj/Rediger Bil',
    'settings.biler.label_model': 'Model *',
    'settings.biler.label_regnr': 'Registreringsnummer *',
    'settings.biler.label_lejepris': 'Lejepris',
    'settings.biler.btn_gem': 'Gem',
    'settings.biler.btn_annuller': 'Annuller',
    'settings.defaults.heading': 'Standardværdier',
    'settings.defaults.desc': 'Disse værdier bruges som standard for nye kontrakter',
    'settings.defaults.lejeperiode_heading': 'Lejeperiode',
    'settings.defaults.checkbox_startdato': 'Sæt startdato automatisk til dagens dato',
    'settings.defaults.label_leje_dage': 'Standard lejeperiode (dage)',
    'settings.defaults.label_fra_kl': 'Standard starttidspunkt',
    'settings.defaults.label_til_kl': 'Standard sluttidspunkt',
    'settings.defaults.selvrisiko_heading': 'Selvrisiko',
    'settings.defaults.label_ansvar': 'Ansvar',
    'settings.defaults.label_kasko': 'Kasko',
    'settings.defaults.label_selvrisiko': 'Selvrisiko-forsikring kr.',
    'settings.defaults.bil_heading': 'Bil',
    'settings.defaults.label_braendstof': 'Brændstof pr. km kr.',
    'settings.defaults.btn_gem': 'Gem standardværdier',
    'settings.stempel.heading': 'Stempel / Underskrift',
    'settings.stempel.desc': 'Upload et billede der vises som overlay i \u201eUdlejer (navn/underskrift)\u201c boksen ved udskrivning.',
    'settings.stempel.btn_upload': 'Upload stempel',
    'settings.stempel.btn_remove': 'Fjern stempel',
    'settings.stempel.preview_alt': 'Stempel preview',
    'settings.tekster.heading': 'Tekster på side 1',
    'settings.tekster.desc': 'Tilpas de to informationstekster der vises under kontraktfelterne på side 1.',
    'settings.tekster.label_sort': 'Sort tekst',
    'settings.tekster.label_rod': 'Rød tekst (OBS)',
    'settings.tekster.btn_gem': 'Gem tekster',
    'settings.tekster.btn_reset': 'Nulstil til standard',
    'settings.export.heading': 'Backup & Gendan',
    'settings.export.desc': 'Eksporter og importer alle dine data',
    'settings.export.btn_export': 'Eksporter alle data',
    'settings.export.btn_import': 'Importer data',
    'settings.export.reset_heading': 'Nulstil alle data',
    'settings.export.reset_desc': 'Sletter alle gemte data permanent \u2013 udlejerprofiler, biler, indstillinger og nuværende kontrakt. Kan ikke fortrydes.',
    'settings.export.btn_reset': 'Nulstil alle data',

    // Help modal
    'help.title': 'Hjælp',
    'help.tab_velkommen': 'Velkommen',
    'help.tab_generelt': 'Generelt',
    'help.tab_url': 'URL-integration',
    'help.tab_stempel': 'Stempel',
    'help.tab_backup': 'Backup',
    'help.velkommen_body': '<div style="text-align:center; padding: 1rem 0 1.5rem;"><img src="images/iTunesArtwork.png" alt="QCompany logo" style="height:72px; width:auto; border-radius:10px; margin-bottom:1rem;"><h3 style="font-size:1.4rem; margin-bottom:0.5rem;">Velkommen til Lejekontrakt</h3><p class="text-muted">af QCompany</p></div><p style="margin-bottom:1rem;">Dette værktøj lader dig hurtigt oprette og udskrive professionelle lejekontakter til kundebiler – direkte i din browser, uden installation og uden konto.</p><div style="background:#f0f7ff; border-left:4px solid #0f6cbd; border-radius:4px; padding:1rem 1.25rem; margin-bottom:1.25rem;"><strong>Dine data er 100% private.</strong><br>Alt gemmes lokalt i denne browser – udlejerprofiler, biler, indstillinger og kontrakter. Ingenting sendes til en server. Kun du har adgang til dine data.</div><p style="margin-bottom:0.75rem;">Inden du går i gang, anbefaler vi at du læser hjælpesektionen:</p><ul style="line-height:2; padding-left:1.25rem; margin-bottom:1.25rem;"><li><strong>Generelt</strong> – trin-for-trin guide til at oprette din første kontrakt</li><li><strong>Stempel</strong> – upload din underskrift eller firmaets stempel</li><li><strong>Backup</strong> – sådan eksporterer og gendanner du dine data</li></ul><p class="text-muted" style="font-size:0.9rem;">Denne velkomstskærm vises kun, indtil du har oprettet din første udlejerprofil under <strong>Indstillinger</strong>.</p>',
    'help.generelt_body': '<h3>Kom godt i gang</h3><p class="text-muted" style="margin-bottom:1rem;">Sådan opretter du en lejekontrakt trin for trin.</p><ol style="line-height:2; padding-left:1.25rem;"><li>Åbn <strong>Indstillinger</strong> og opret mindst én udlejerprofil og én bil – disse gemmes til fremtidig brug.</li><li>Vælg udlejer og bil i venstre side, eller udfyld felterne manuelt.</li><li>Udfyld lejers oplysninger: navn, telefon og kørekortoplysninger.</li><li>Angiv lejeperiode (fra/til dato og klokkeslæt) samt lejepris og selvrisiko.</li><li>Gennemse kontrakten i forhåndsvisningen til højre – felterne kan også redigeres direkte der.</li><li>Klik <strong>Udskriv</strong> for at printe kontrakten eller gemme den som PDF.</li></ol><p class="text-muted" style="margin-top:1rem;">Kontrakten gemmes automatisk løbende. Klik <strong>Ny Kontrakt</strong> for at starte en ny.</p>',
    'help.url_body': '<h3>URL-integration</h3><p class="text-muted" style="margin-bottom:1rem;">Et eksternt system (f.eks. et værkstedssystem, CRM eller bookingsystem) kan åbne appen og forudfylde lejers oplysninger automatisk via URL-parametre.</p><h4 style="margin-bottom:0.5rem;">Understøttede parametre</h4><table style="width:100%; border-collapse:collapse; margin-bottom:1.5rem; font-size:0.9rem;"><thead><tr style="background:#f5f5f5;"><th style="text-align:left; padding:0.5rem 0.75rem; border:1px solid #ddd;">Parameter</th><th style="text-align:left; padding:0.5rem 0.75rem; border:1px solid #ddd;">Felt</th><th style="text-align:left; padding:0.5rem 0.75rem; border:1px solid #ddd;">Format</th></tr></thead><tbody><tr><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>renter_name</code> / <code>lejer_navn</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Navn</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Fritekst</td></tr><tr style="background:#fafafa;"><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>renter_phone</code> / <code>lejer_tlf</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Telefon</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Fritekst</td></tr><tr><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>renter_license</code> / <code>lejer_koerekortnr</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Kørekort nr.</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Fritekst</td></tr><tr style="background:#fafafa;"><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>renter_license_date</code> / <code>lejer_koerekort_udstedt</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Udstedt den</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">DD-MM-YYYY</td></tr><tr><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>lang</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Sprog</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>da</code>, <code>en</code>, <code>de</code></td></tr></tbody></table><h4 style="margin-bottom:0.5rem;">Eksempel-URL</h4><code style="display:block; background:#f5f5f5; border:1px solid #ddd; border-radius:4px; padding:0.75rem; font-size:0.8rem; word-break:break-all; line-height:1.6;">https://lejekontrakt.qcompany.dk/?lang=da&amp;renter_name=Jan%20Hansen&amp;renter_phone=12345678&amp;renter_license=1234567890&amp;renter_license_date=15-06-2018</code><p class="text-muted" style="margin-top:1rem;">Når appen åbner med parametre, oprettes altid en ny kontrakt med de angivne oplysninger. Parametrene fjernes automatisk fra adresselinjen.</p>',
    'help.stempel_body': '<h3>Stempel / underskrift-overlay</h3><p class="text-muted" style="margin-bottom:1rem;">Du kan uploade et billede (f.eks. en scannet underskrift eller et firmastempel) der automatisk vises i "Udlejer (navn/underskrift)"-boksen på side 1.</p><ol style="line-height:2; padding-left:1.25rem;"><li>Åbn <strong>Indstillinger → Stempel</strong>.</li><li>Klik <strong>Upload stempel</strong> og vælg et billede (PNG med transparent baggrund anbefales).</li><li>Billedet gemmes og vises straks i underskriftsboksen i forhåndsvisningen.</li><li>Stemplet medtages automatisk ved udskrivning.</li><li>Klik <strong>Fjern stempel</strong> for at slette det igen.</li></ol><p class="text-muted" style="margin-top:1rem;">Stemplet gemmes lokalt i browseren og følger med ved backup-eksport.</p>',
    'help.backup_body': '<h3>Backup &amp; Gendan</h3><p class="text-muted" style="margin-bottom:1rem;">Alle data (udlejerprofiler, biler, indstillinger og stempel) gemmes i browserens lokale lager. Brug eksport/import til at tage backup eller flytte data til en anden browser/enhed.</p><h4 style="margin-bottom:0.5rem;">Eksporter</h4><p style="margin-bottom:1rem;">Åbn <strong>Indstillinger → Backup</strong> og klik <strong>Eksporter alle data</strong>. En JSON-fil downloades til din computer.</p><h4 style="margin-bottom:0.5rem;">Importer</h4><p>Klik <strong>Importer data</strong> og vælg en tidligere eksporteret JSON-fil.</p><p class="text-muted" style="margin-top:0.5rem;"><strong>OBS:</strong> Import overskriver alle eksisterende data – tag en eksport først, hvis du vil bevare nuværende data.</p>',

    // Default note texts
    'notes.default_black': 'Bilen må kun føres af lejer (eller angivet fører) i lejeperioden. Bilen må ikke fremlejes, benyttes til motorsport, eller til person- eller godstransport mod betaling. Bilen må kun anvendes til kørsel i Danmark. Udlejer er berettiget til at undlade at tegne kaskoforsikring. Lejer er i så fald stillet som om kaskoforsikringen var tegnet. Lejer hæfter for alle skader, som ikke er eller ville være dækket af en tegnet kaskoforsikring. Bemærk venligst at bilen er en ikke-ryger bil, og der må ikke medtages husdyr. Udgifter i øvrigt i forbindelse med uheld under udlejning afholdes af lejer. Udgifter til reparationer foretaget uden aftale med udlejer er denne uvedkommende. Eventuelle standsnings- og parkeringsafgifter samt andre bøder og afgifter i forbindelse med lejeperioden påhviler lejer. Lejeaftalen kan kun forlænges ved ny lejeaftale. Lejekontrakten skal medbringes under kørsel og fremvises ved forlangende fra politiet eller andre myndigheder.',
    'notes.default_red': 'OBS: Læs venligst vilkår på bagsiden/side 2 om ansvar, selvrisiko og erstatning. Egenandel ved kasko fremgår af policen og udleveres ved underskrift.',

    // Dialogs
    'dialogs.confirm_new_contract': 'Du har ugemte ændringer. Er du sikker på at du vil oprette en ny kontrakt?',
    'dialogs.confirm_delete_udlejer': 'Er du sikker på at du vil slette denne udlejer?',
    'dialogs.confirm_delete_bil': 'Er du sikker på at du vil slette denne bil?',
    'dialogs.confirm_import': 'Dette vil overskrive alle eksisterende data. Er du sikker?',
    'dialogs.import_error': 'Kunne ikke importere data: ',
    'dialogs.confirm_reset_all': 'ADVARSEL: Dette sletter alle dine gemte data permanent.\n\nFølgende vil blive slettet:\n\u2022 Alle udlejerprofiler\n\u2022 Alle biler\n\u2022 Alle indstillinger og stempel\n\u2022 Nuværende kontrakt\n\nOvervej at tage en backup først (Eksporter alle data).\n\nEr du sikker på at du vil fortsætte?',
    'dialogs.validation_udlejer_navn': 'Navn er påkrævet',
    'dialogs.validation_bil': 'Model og registreringsnummer er påkrævet',

    // Toasts
    'toasts.tekster_gemt': 'Tekster gemt!',
    'toasts.tekster_nulstillet': 'Tekster nulstillet!',
    'toasts.stempel_gemt': 'Stempel gemt!',
    'toasts.stempel_fjernet': 'Stempel fjernet!',
    'toasts.standardvaerdier_gemt': 'Standardværdier gemt!',
    'toasts.data_eksporteret': 'Data eksporteret!',
    'toasts.data_importeret': 'Data importeret! Genindlæser...',
    'toasts.alle_data_slettet': 'Alle data er slettet. Genindlæser...',
    'toasts.udlejer_gemt': 'Udlejer gemt!',
    'toasts.udlejer_slettet': 'Udlejer slettet',
    'toasts.standard_udlejer_opdateret': 'Standard udlejer opdateret',
    'toasts.bil_gemt': 'Bil gemt!',
    'toasts.bil_slettet': 'Bil slettet',

    // Dynamic JS strings
    'dynamic.empty_udlejere': 'Ingen udlejere endnu. Klik \u201eTilf\u00f8j udlejer\u201c for at oprette.',
    'dynamic.empty_biler': 'Ingen biler endnu. Klik \u201eTilf\u00f8j bil\u201c for at oprette.',
    'dynamic.badge_standard': 'Standard',
    'dynamic.btn_set_default': 'Sæt som standard',
    'dynamic.btn_edit': 'Rediger',
    'dynamic.btn_delete': 'Slet',
    'dynamic.car_regnr_prefix': 'Reg.nr: ',
  },

  /* ── ENGLISH ─────────────────────────────────────────────────────── */
  en: {
    // Header
    'ui.header.title': 'Rental Agreement - Customer Car',
    'ui.header.btn_new': 'New Contract',
    'ui.header.btn_settings': 'Settings',
    'ui.header.btn_help': 'Help',
    'ui.header.btn_print': 'Print',

    // Form – Lessor
    'ui.form.section_udlejer': '1. Lessor',
    'ui.form.label_vaelg_profil': 'Select profile',
    'ui.form.option_select_udlejer': '-- Select lessor --',
    'ui.form.label_navn': 'Name',
    'ui.form.label_adresse': 'Address',
    'ui.form.label_postby': 'Postcode & city',

    // Form – Renter
    'ui.form.section_lejer': '2. Renter',
    'ui.form.label_telefon': 'Phone',
    'ui.form.label_koerekortnr': 'Licence no.',
    'ui.form.label_udstedt_den': 'Issued on',

    // Form – Driver
    'ui.form.section_foerer': '3. Additional driver',
    'ui.form.label_yderligere': 'Additional information',

    // Form – Vehicle
    'ui.form.section_bil': '4. Vehicle details',
    'ui.form.label_vaelg_bil': 'Select vehicle',
    'ui.form.option_select_bil': '-- Select vehicle --',
    'ui.form.label_model': 'Model',
    'ui.form.label_regnr': 'Reg. no.',
    'ui.form.label_km_start': 'Mileage at start',
    'ui.form.label_km_slut': 'Mileage at return',
    'ui.form.label_koert_km': 'Km driven',
    'ui.form.label_braendstof': 'Fuel charge per km (DKK)',

    // Form – Rental period
    'ui.form.section_lejeperiode': '5. Rental period',
    'ui.form.label_fra_dato': 'From (date)',
    'ui.form.label_kl': 'Time',
    'ui.form.label_til_dato': 'To (date)',

    // Form – Rental price
    'ui.form.section_lejepris': '6. Rental price',
    'ui.form.label_lejepris': 'Rental price',

    // Form – Excess
    'ui.form.section_selvrisiko': '7. Excess',
    'ui.form.label_ansvar': 'Liability',
    'ui.form.label_kasko': 'Comprehensive',
    'ui.form.label_selvrisiko_forsikring': 'Excess insurance (DKK)',

    // Form – Notes
    'ui.form.section_bemaerkninger': 'Notes',
    'ui.form.label_bemaerkninger': 'Notes',

    // Form – Date
    'ui.form.section_dato': 'Date',
    'ui.form.label_kontraktdato': 'Contract date',

    // Form – Declaration
    'ui.form.section_erklaering': 'Statutory declaration',
    'ui.form.label_koeretoej_ejet_af': 'Vehicle owned by',
    'ui.form.label_registreringsnummer': 'Registration number',
    'ui.form.label_dato': 'Date',

    // Contract page 1
    'contract.title': 'Rental Agreement',
    'contract.subtitle': '– Customer Car',
    'contract.section_udlejer': '1. Lessor',
    'contract.section_lejer': '2. Renter',
    'contract.label_tlf': 'Phone:',
    'contract.label_koerekortnr': 'Licence no.:',
    'contract.label_udstedt_den': 'Issued on:',
    'contract.section_foerer': '3. Additional driver',
    'contract.section_bil': '4. Vehicle details',
    'contract.label_model': 'Model:',
    'contract.label_regnr': 'Reg. no.:',
    'contract.section_lejeperiode': '5. Rental period',
    'contract.label_fra': 'From:',
    'contract.label_kl': 'Time:',
    'contract.label_til': 'To:',
    'contract.label_aflevering_godkendes': 'Return time confirmed upon vehicle return',
    'contract.caption_underskrift_lejer': 'Renter\'s signature',
    'contract.section_lejepris': '6. Rental price',
    'contract.section_selvrisiko': '7. Excess',
    'contract.label_ansvar': 'Liability:',
    'contract.label_kasko': 'Comprehensive:',
    'contract.label_selvrisiko_forsikring': 'Excess insurance (DKK):',
    'contract.label_bemaerkninger': 'Notes:',
    'contract.label_dato': 'Date:',
    'contract.label_km_start': 'Mileage at start:',
    'contract.label_km_slut': 'Mileage at return:',
    'contract.label_koert_km': 'Km driven:',
    'contract.label_braendstof': 'Fuel charge per km (DKK):',
    'contract.caption_udlejer': 'Lessor (name/signature)',

    // Contract page 2
    'contract.page2.title': 'Statutory declaration regarding use of vehicle',
    'contract.page2.intro': 'The undersigned confirms that a vehicle has been handed over to me.',
    'contract.page2.label_ejet_af': 'The vehicle is owned by:',
    'contract.page2.label_regnr': 'The vehicle has registration number:',
    'contract.page2.para1': 'In connection with the transfer of the vehicle, I declare that the owner of the vehicle has verified that there is no risk, as part of the transfer, that the vehicle will be used for reckless driving. I also declare that the owner has verified that my driving licence is valid.',
    'contract.page2.para2': 'I further declare that I and others who will have access to the vehicle have not previously engaged in reckless driving or other serious violations of road traffic law.',
    'contract.page2.para3': 'Reckless driving includes, among other things, driving at a speed exceeding 200 km/h, driving at a speed exceeding 100 km/h while simultaneously exceeding the speed limit by more than 100%, and drink driving with a blood alcohol level above 2.00\u2030.',
    'contract.page2.para4': 'I also declare that I have been made aware that I may be held fully liable for damages if the vehicle is confiscated as a result of reckless driving.',
    'contract.page2.label_dato': 'Date:',
    'contract.page2.label_navn': 'Name:',
    'contract.page2.label_tlf': 'Phone:',
    'contract.page2.caption_underskrift': 'Signature',

    // Settings modal
    'settings.title': 'Settings',
    'settings.tab_udlejere': 'Lessors',
    'settings.tab_biler': 'Vehicles',
    'settings.tab_defaults': 'Default values',
    'settings.tab_stempel': 'Stamp',
    'settings.tab_tekster': 'Texts',
    'settings.tab_export': 'Backup',
    'settings.udlejere.heading': 'Lessor profiles',
    'settings.udlejere.btn_add': 'Add lessor',
    'settings.udlejere.form_heading': 'Add / Edit Lessor',
    'settings.udlejere.label_navn': 'Name *',
    'settings.udlejere.label_adresse': 'Address',
    'settings.udlejere.label_postby': 'Postcode & city',
    'settings.udlejere.btn_gem': 'Save',
    'settings.udlejere.btn_annuller': 'Cancel',
    'settings.biler.heading': 'Vehicle library',
    'settings.biler.btn_add': 'Add vehicle',
    'settings.biler.form_heading': 'Add / Edit Vehicle',
    'settings.biler.label_model': 'Model *',
    'settings.biler.label_regnr': 'Registration number *',
    'settings.biler.label_lejepris': 'Rental price',
    'settings.biler.btn_gem': 'Save',
    'settings.biler.btn_annuller': 'Cancel',
    'settings.defaults.heading': 'Default values',
    'settings.defaults.desc': 'These values are used as defaults for new contracts',
    'settings.defaults.lejeperiode_heading': 'Rental period',
    'settings.defaults.checkbox_startdato': 'Automatically set start date to today',
    'settings.defaults.label_leje_dage': 'Default rental period (days)',
    'settings.defaults.label_fra_kl': 'Default start time',
    'settings.defaults.label_til_kl': 'Default end time',
    'settings.defaults.selvrisiko_heading': 'Excess',
    'settings.defaults.label_ansvar': 'Liability',
    'settings.defaults.label_kasko': 'Comprehensive',
    'settings.defaults.label_selvrisiko': 'Excess insurance (DKK)',
    'settings.defaults.bil_heading': 'Vehicle',
    'settings.defaults.label_braendstof': 'Fuel charge per km (DKK)',
    'settings.defaults.btn_gem': 'Save default values',
    'settings.stempel.heading': 'Stamp / Signature',
    'settings.stempel.desc': 'Upload an image to display as an overlay in the \u201cLessor (name/signature)\u201d box when printing.',
    'settings.stempel.btn_upload': 'Upload stamp',
    'settings.stempel.btn_remove': 'Remove stamp',
    'settings.stempel.preview_alt': 'Stamp preview',
    'settings.tekster.heading': 'Texts on page 1',
    'settings.tekster.desc': 'Customise the two information texts shown below the contract fields on page 1.',
    'settings.tekster.label_sort': 'Black text',
    'settings.tekster.label_rod': 'Red text (NB)',
    'settings.tekster.btn_gem': 'Save texts',
    'settings.tekster.btn_reset': 'Reset to default',
    'settings.export.heading': 'Backup & Restore',
    'settings.export.desc': 'Export and import all your data',
    'settings.export.btn_export': 'Export all data',
    'settings.export.btn_import': 'Import data',
    'settings.export.reset_heading': 'Reset all data',
    'settings.export.reset_desc': 'Permanently deletes all saved data \u2013 lessor profiles, vehicles, settings and current contract. Cannot be undone.',
    'settings.export.btn_reset': 'Reset all data',

    // Help modal
    'help.title': 'Help',
    'help.tab_velkommen': 'Welcome',
    'help.tab_generelt': 'General',
    'help.tab_url': 'URL integration',
    'help.tab_stempel': 'Stamp',
    'help.tab_backup': 'Backup',
    'help.velkommen_body': '<div style="text-align:center; padding: 1rem 0 1.5rem;"><img src="images/iTunesArtwork.png" alt="QCompany logo" style="height:72px; width:auto; border-radius:10px; margin-bottom:1rem;"><h3 style="font-size:1.4rem; margin-bottom:0.5rem;">Welcome to Rental Agreement</h3><p class="text-muted">by QCompany</p></div><p style="margin-bottom:1rem;">This tool lets you quickly create and print professional rental agreements for customer cars \u2013 directly in your browser, with no installation or account required.</p><div style="background:#f0f7ff; border-left:4px solid #0f6cbd; border-radius:4px; padding:1rem 1.25rem; margin-bottom:1.25rem;"><strong>Your data is 100% private.</strong><br>Everything is stored locally in this browser \u2013 lessor profiles, vehicles, settings and contracts. Nothing is sent to a server. Only you have access to your data.</div><p style="margin-bottom:0.75rem;">Before you begin, we recommend reading the help section:</p><ul style="line-height:2; padding-left:1.25rem; margin-bottom:1.25rem;"><li><strong>General</strong> \u2013 step-by-step guide to creating your first contract</li><li><strong>Stamp</strong> \u2013 upload your signature or company stamp</li><li><strong>Backup</strong> \u2013 how to export and restore your data</li></ul><p class="text-muted" style="font-size:0.9rem;">This welcome screen is only shown until you have created your first lessor profile under <strong>Settings</strong>.</p>',
    'help.generelt_body': '<h3>Getting started</h3><p class="text-muted" style="margin-bottom:1rem;">How to create a rental agreement step by step.</p><ol style="line-height:2; padding-left:1.25rem;"><li>Open <strong>Settings</strong> and create at least one lessor profile and one vehicle \u2013 these are saved for future use.</li><li>Select the lessor and vehicle on the left, or fill in the fields manually.</li><li>Fill in the renter\u2019s details: name, phone and driving licence information.</li><li>Enter the rental period (from/to date and time) as well as the rental price and excess.</li><li>Review the contract in the preview on the right \u2013 fields can also be edited directly there.</li><li>Click <strong>Print</strong> to print the contract or save it as a PDF.</li></ol><p class="text-muted" style="margin-top:1rem;">The contract is saved automatically. Click <strong>New Contract</strong> to start a new one.</p>',
    'help.url_body': '<h3>URL Integration</h3><p class="text-muted" style="margin-bottom:1rem;">An external system (e.g. a workshop system, CRM or booking system) can open the app and pre-fill the renter\u2019s details automatically via URL parameters.</p><h4 style="margin-bottom:0.5rem;">Supported parameters</h4><table style="width:100%; border-collapse:collapse; margin-bottom:1.5rem; font-size:0.9rem;"><thead><tr style="background:#f5f5f5;"><th style="text-align:left; padding:0.5rem 0.75rem; border:1px solid #ddd;">Parameter</th><th style="text-align:left; padding:0.5rem 0.75rem; border:1px solid #ddd;">Field</th><th style="text-align:left; padding:0.5rem 0.75rem; border:1px solid #ddd;">Format</th></tr></thead><tbody><tr><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>renter_name</code> / <code>lejer_navn</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Name</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Free text</td></tr><tr style="background:#fafafa;"><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>renter_phone</code> / <code>lejer_tlf</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Phone</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Free text</td></tr><tr><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>renter_license</code> / <code>lejer_koerekortnr</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Licence no.</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Free text</td></tr><tr style="background:#fafafa;"><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>renter_license_date</code> / <code>lejer_koerekort_udstedt</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Issued on</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">DD-MM-YYYY</td></tr><tr><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>lang</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Language</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>da</code>, <code>en</code>, <code>de</code></td></tr></tbody></table><h4 style="margin-bottom:0.5rem;">Example URL</h4><code style="display:block; background:#f5f5f5; border:1px solid #ddd; border-radius:4px; padding:0.75rem; font-size:0.8rem; word-break:break-all; line-height:1.6;">https://lejekontrakt.qcompany.dk/?lang=en&amp;renter_name=John%20Smith&amp;renter_phone=12345678&amp;renter_license=1234567890&amp;renter_license_date=15-06-2018</code><p class="text-muted" style="margin-top:1rem;">When the app opens with parameters, a new contract is always created with the provided details. The parameters are automatically removed from the address bar.</p>',
    'help.stempel_body': '<h3>Stamp / signature overlay</h3><p class="text-muted" style="margin-bottom:1rem;">You can upload an image (e.g. a scanned signature or company stamp) that is automatically displayed in the \u201cLessor (name/signature)\u201d box on page 1.</p><ol style="line-height:2; padding-left:1.25rem;"><li>Open <strong>Settings \u2192 Stamp</strong>.</li><li>Click <strong>Upload stamp</strong> and select an image (PNG with transparent background recommended).</li><li>The image is saved and immediately shown in the signature box in the preview.</li><li>The stamp is automatically included when printing.</li><li>Click <strong>Remove stamp</strong> to delete it.</li></ol><p class="text-muted" style="margin-top:1rem;">The stamp is stored locally in the browser and is included in backup exports.</p>',
    'help.backup_body': '<h3>Backup &amp; Restore</h3><p class="text-muted" style="margin-bottom:1rem;">All data (lessor profiles, vehicles, settings and stamp) is stored in the browser\u2019s local storage. Use export/import to back up or transfer data to another browser or device.</p><h4 style="margin-bottom:0.5rem;">Export</h4><p style="margin-bottom:1rem;">Open <strong>Settings \u2192 Backup</strong> and click <strong>Export all data</strong>. A JSON file is downloaded to your computer.</p><h4 style="margin-bottom:0.5rem;">Import</h4><p>Click <strong>Import data</strong> and select a previously exported JSON file.</p><p class="text-muted" style="margin-top:0.5rem;"><strong>NB:</strong> Importing overwrites all existing data \u2013 export first if you want to keep your current data.</p>',

    // Default note texts
    'notes.default_black': 'The vehicle may only be driven by the renter (or the named driver) during the rental period. The vehicle may not be sublet, used for motorsport, or for the transport of persons or goods for payment. The vehicle may only be used for driving in Denmark. The lessor is entitled to waive comprehensive insurance. In such case, the renter is treated as if comprehensive insurance had been taken out. The renter is liable for all damage that is not or would not be covered by comprehensive insurance. Please note that this is a non-smoking vehicle and no pets are permitted. Any other expenses related to accidents during the rental period shall be borne by the renter. Expenses for repairs carried out without the lessor\'s agreement are not the lessor\'s responsibility. Any stopping and parking fines, as well as other fines and charges incurred during the rental period, are the renter\'s responsibility. The rental agreement can only be extended by a new rental agreement. The rental contract must be carried during driving and presented upon request by the police or other authorities.',
    'notes.default_red': 'NB: Please read the terms on the reverse/page 2 regarding liability, excess and compensation. The excess for comprehensive insurance is stated in the policy and will be provided upon signing.',

    // Dialogs
    'dialogs.confirm_new_contract': 'You have unsaved changes. Are you sure you want to create a new contract?',
    'dialogs.confirm_delete_udlejer': 'Are you sure you want to delete this lessor?',
    'dialogs.confirm_delete_bil': 'Are you sure you want to delete this vehicle?',
    'dialogs.confirm_import': 'This will overwrite all existing data. Are you sure?',
    'dialogs.import_error': 'Could not import data: ',
    'dialogs.confirm_reset_all': 'WARNING: This will permanently delete all your saved data.\n\nThe following will be deleted:\n\u2022 All lessor profiles\n\u2022 All vehicles\n\u2022 All settings and stamp\n\u2022 Current contract\n\nConsider taking a backup first (Export all data).\n\nAre you sure you want to continue?',
    'dialogs.validation_udlejer_navn': 'Name is required',
    'dialogs.validation_bil': 'Model and registration number are required',

    // Toasts
    'toasts.tekster_gemt': 'Texts saved!',
    'toasts.tekster_nulstillet': 'Texts reset!',
    'toasts.stempel_gemt': 'Stamp saved!',
    'toasts.stempel_fjernet': 'Stamp removed!',
    'toasts.standardvaerdier_gemt': 'Default values saved!',
    'toasts.data_eksporteret': 'Data exported!',
    'toasts.data_importeret': 'Data imported! Reloading...',
    'toasts.alle_data_slettet': 'All data deleted. Reloading...',
    'toasts.udlejer_gemt': 'Lessor saved!',
    'toasts.udlejer_slettet': 'Lessor deleted',
    'toasts.standard_udlejer_opdateret': 'Default lessor updated',
    'toasts.bil_gemt': 'Vehicle saved!',
    'toasts.bil_slettet': 'Vehicle deleted',

    // Dynamic
    'dynamic.empty_udlejere': 'No lessors yet. Click \u201cAdd lessor\u201d to create one.',
    'dynamic.empty_biler': 'No vehicles yet. Click \u201cAdd vehicle\u201d to create one.',
    'dynamic.badge_standard': 'Default',
    'dynamic.btn_set_default': 'Set as default',
    'dynamic.btn_edit': 'Edit',
    'dynamic.btn_delete': 'Delete',
    'dynamic.car_regnr_prefix': 'Reg.no: ',
  },

  /* ── GERMAN ──────────────────────────────────────────────────────── */
  de: {
    // Header
    'ui.header.title': 'Mietvertrag - Kundenfahrzeug',
    'ui.header.btn_new': 'Neuer Vertrag',
    'ui.header.btn_settings': 'Einstellungen',
    'ui.header.btn_help': 'Hilfe',
    'ui.header.btn_print': 'Drucken',

    // Form – Vermieter
    'ui.form.section_udlejer': '1. Vermieter',
    'ui.form.label_vaelg_profil': 'Profil auswählen',
    'ui.form.option_select_udlejer': '-- Vermieter auswählen --',
    'ui.form.label_navn': 'Name',
    'ui.form.label_adresse': 'Adresse',
    'ui.form.label_postby': 'PLZ & Ort',

    // Form – Mieter
    'ui.form.section_lejer': '2. Mieter',
    'ui.form.label_telefon': 'Telefon',
    'ui.form.label_koerekortnr': 'Führerschein-Nr.',
    'ui.form.label_udstedt_den': 'Ausgestellt am',

    // Form – Fahrer
    'ui.form.section_foerer': '3. Weiterer Fahrer',
    'ui.form.label_yderligere': 'Weitere Angaben',

    // Form – Fahrzeug
    'ui.form.section_bil': '4. Fahrzeugdaten',
    'ui.form.label_vaelg_bil': 'Fahrzeug auswählen',
    'ui.form.option_select_bil': '-- Fahrzeug auswählen --',
    'ui.form.label_model': 'Modell',
    'ui.form.label_regnr': 'Kennzeichen',
    'ui.form.label_km_start': 'Kilometerstand bei Übergabe',
    'ui.form.label_km_slut': 'Bei Rückgabe',
    'ui.form.label_koert_km': 'Gefahrene km',
    'ui.form.label_braendstof': 'Kraftstoffkosten pro km (DKK)',

    // Form – Mietzeit
    'ui.form.section_lejeperiode': '5. Mietzeit',
    'ui.form.label_fra_dato': 'Von (Datum)',
    'ui.form.label_kl': 'Uhrzeit',
    'ui.form.label_til_dato': 'Bis (Datum)',

    // Form – Mietpreis
    'ui.form.section_lejepris': '6. Mietpreis',
    'ui.form.label_lejepris': 'Mietpreis',

    // Form – Selbstbehalt
    'ui.form.section_selvrisiko': '7. Selbstbehalt',
    'ui.form.label_ansvar': 'Haftpflicht',
    'ui.form.label_kasko': 'Vollkasko',
    'ui.form.label_selvrisiko_forsikring': 'Selbstbehaltsversicherung (DKK)',

    // Form – Bemerkungen
    'ui.form.section_bemaerkninger': 'Bemerkungen',
    'ui.form.label_bemaerkninger': 'Bemerkungen',

    // Form – Datum
    'ui.form.section_dato': 'Datum',
    'ui.form.label_kontraktdato': 'Vertragsdatum',

    // Form – Erklärung
    'ui.form.section_erklaering': 'Eidesstattliche Erklärung',
    'ui.form.label_koeretoej_ejet_af': 'Fahrzeug im Eigentum von',
    'ui.form.label_registreringsnummer': 'Kennzeichen',
    'ui.form.label_dato': 'Datum',

    // Contract page 1
    'contract.title': 'Mietvertrag',
    'contract.subtitle': '– Kundenfahrzeug',
    'contract.section_udlejer': '1. Vermieter',
    'contract.section_lejer': '2. Mieter',
    'contract.label_tlf': 'Tel.:',
    'contract.label_koerekortnr': 'Führerschein-Nr.:',
    'contract.label_udstedt_den': 'Ausgestellt am:',
    'contract.section_foerer': '3. Weiterer Fahrer',
    'contract.section_bil': '4. Fahrzeugdaten',
    'contract.label_model': 'Modell:',
    'contract.label_regnr': 'Kennzeichen:',
    'contract.section_lejeperiode': '5. Mietzeit',
    'contract.label_fra': 'Von:',
    'contract.label_kl': 'Uhrzeit:',
    'contract.label_til': 'Bis:',
    'contract.label_aflevering_godkendes': 'Rückgabezeitpunkt wird bei Rückgabe bestätigt',
    'contract.caption_underskrift_lejer': 'Unterschrift Mieter',
    'contract.section_lejepris': '6. Mietpreis',
    'contract.section_selvrisiko': '7. Selbstbehalt',
    'contract.label_ansvar': 'Haftpflicht:',
    'contract.label_kasko': 'Vollkasko:',
    'contract.label_selvrisiko_forsikring': 'Selbstbehaltsversicherung (DKK):',
    'contract.label_bemaerkninger': 'Bemerkungen:',
    'contract.label_dato': 'Datum:',
    'contract.label_km_start': 'Kilometerstand bei Übergabe:',
    'contract.label_km_slut': 'Bei Rückgabe:',
    'contract.label_koert_km': 'Gefahrene km:',
    'contract.label_braendstof': 'Kraftstoffkosten pro km (DKK):',
    'contract.caption_udlejer': 'Vermieter (Name/Unterschrift)',

    // Contract page 2
    'contract.page2.title': 'Eidesstattliche Erkl\u00e4rung zur Fahrzeugnutzung',
    'contract.page2.intro': 'Der/die Unterzeichnende best\u00e4tigt, dass ihm/ihr ein Fahrzeug \u00fcbergeben wurde.',
    'contract.page2.label_ejet_af': 'Das Fahrzeug geh\u00f6rt:',
    'contract.page2.label_regnr': 'Das Fahrzeug hat das Kennzeichen:',
    'contract.page2.para1': 'Im Zusammenhang mit der \u00dcbergabe des Fahrzeugs erkl\u00e4re ich, dass der Eigent\u00fcmer des Fahrzeugs gepr\u00fcft hat, dass im Rahmen der Fahrzeug\u00fcbergabe kein Risiko besteht, dass das Fahrzeug f\u00fcr r\u00fccksichtsloses Fahren verwendet wird. Gleichzeitig erkl\u00e4re ich, dass der Eigent\u00fcmer \u00fcberpr\u00fcft hat, dass mein F\u00fchrerschein g\u00fcltig ist.',
    'contract.page2.para2': 'Ich erkl\u00e4re au\u00dferdem, dass ich und andere Personen, die Zugang zu dem Fahrzeug haben werden, nicht zuvor r\u00fccksichtsloses Fahren oder andere schwerwiegende Verst\u00f6\u00dfe gegen die Stra\u00dfenverkehrsordnung begangen haben.',
    'contract.page2.para3': 'Als r\u00fccksichtsloses Fahren gilt unter anderem das Fahren mit einer Geschwindigkeit von \u00fcber 200 km/h, das Fahren mit einer Geschwindigkeit von \u00fcber 100 km/h bei gleichzeitiger \u00dcberschreitung der H\u00f6chstgeschwindigkeit um mehr als 100\u00a0%, sowie Trunkenheit am Steuer mit einem Promillewert von \u00fcber 2,00.',
    'contract.page2.para4': 'Ich erkl\u00e4re au\u00dferdem, dass ich darauf hingewiesen wurde, dass mir die volle Schadensersatzpflicht auferlegt werden kann, wenn das Fahrzeug infolge r\u00fccksichtslosen Fahrens beschlagnahmt wird.',
    'contract.page2.label_dato': 'Datum:',
    'contract.page2.label_navn': 'Name:',
    'contract.page2.label_tlf': 'Tel.:',
    'contract.page2.caption_underskrift': 'Unterschrift',

    // Settings modal
    'settings.title': 'Einstellungen',
    'settings.tab_udlejere': 'Vermieter',
    'settings.tab_biler': 'Fahrzeuge',
    'settings.tab_defaults': 'Standardwerte',
    'settings.tab_stempel': 'Stempel',
    'settings.tab_tekster': 'Texte',
    'settings.tab_export': 'Backup',
    'settings.udlejere.heading': 'Vermieterprofile',
    'settings.udlejere.btn_add': 'Vermieter hinzuf\u00fcgen',
    'settings.udlejere.form_heading': 'Vermieter hinzuf\u00fcgen / bearbeiten',
    'settings.udlejere.label_navn': 'Name *',
    'settings.udlejere.label_adresse': 'Adresse',
    'settings.udlejere.label_postby': 'PLZ & Ort',
    'settings.udlejere.btn_gem': 'Speichern',
    'settings.udlejere.btn_annuller': 'Abbrechen',
    'settings.biler.heading': 'Fahrzeugbibliothek',
    'settings.biler.btn_add': 'Fahrzeug hinzuf\u00fcgen',
    'settings.biler.form_heading': 'Fahrzeug hinzuf\u00fcgen / bearbeiten',
    'settings.biler.label_model': 'Modell *',
    'settings.biler.label_regnr': 'Kennzeichen *',
    'settings.biler.label_lejepris': 'Mietpreis',
    'settings.biler.btn_gem': 'Speichern',
    'settings.biler.btn_annuller': 'Abbrechen',
    'settings.defaults.heading': 'Standardwerte',
    'settings.defaults.desc': 'Diese Werte werden als Standard f\u00fcr neue Vertr\u00e4ge verwendet',
    'settings.defaults.lejeperiode_heading': 'Mietzeit',
    'settings.defaults.checkbox_startdato': 'Startdatum automatisch auf heute setzen',
    'settings.defaults.label_leje_dage': 'Standard-Mietdauer (Tage)',
    'settings.defaults.label_fra_kl': 'Standard-Startzeit',
    'settings.defaults.label_til_kl': 'Standard-Endzeit',
    'settings.defaults.selvrisiko_heading': 'Selbstbehalt',
    'settings.defaults.label_ansvar': 'Haftpflicht',
    'settings.defaults.label_kasko': 'Vollkasko',
    'settings.defaults.label_selvrisiko': 'Selbstbehaltsversicherung (DKK)',
    'settings.defaults.bil_heading': 'Fahrzeug',
    'settings.defaults.label_braendstof': 'Kraftstoffkosten pro km (DKK)',
    'settings.defaults.btn_gem': 'Standardwerte speichern',
    'settings.stempel.heading': 'Stempel / Unterschrift',
    'settings.stempel.desc': 'Laden Sie ein Bild hoch, das beim Drucken als \u00dcberlagerung im Feld \u201eVermieter (Name/Unterschrift)\u201c angezeigt wird.',
    'settings.stempel.btn_upload': 'Stempel hochladen',
    'settings.stempel.btn_remove': 'Stempel entfernen',
    'settings.stempel.preview_alt': 'Stempel-Vorschau',
    'settings.tekster.heading': 'Texte auf Seite 1',
    'settings.tekster.desc': 'Passen Sie die zwei Informationstexte an, die unter den Vertragsfeldern auf Seite 1 angezeigt werden.',
    'settings.tekster.label_sort': 'Schwarzer Text',
    'settings.tekster.label_rod': 'Roter Text (Hinweis)',
    'settings.tekster.btn_gem': 'Texte speichern',
    'settings.tekster.btn_reset': 'Auf Standard zur\u00fccksetzen',
    'settings.export.heading': 'Backup & Wiederherstellen',
    'settings.export.desc': 'Exportieren und importieren Sie alle Ihre Daten',
    'settings.export.btn_export': 'Alle Daten exportieren',
    'settings.export.btn_import': 'Daten importieren',
    'settings.export.reset_heading': 'Alle Daten zur\u00fccksetzen',
    'settings.export.reset_desc': 'L\u00f6scht alle gespeicherten Daten dauerhaft \u2013 Vermieterprofile, Fahrzeuge, Einstellungen und aktuellen Vertrag. Kann nicht r\u00fcckg\u00e4ngig gemacht werden.',
    'settings.export.btn_reset': 'Alle Daten zur\u00fccksetzen',

    // Help modal
    'help.title': 'Hilfe',
    'help.tab_velkommen': 'Willkommen',
    'help.tab_generelt': 'Allgemein',
    'help.tab_url': 'URL-Integration',
    'help.tab_stempel': 'Stempel',
    'help.tab_backup': 'Backup',
    'help.velkommen_body': '<div style="text-align:center; padding: 1rem 0 1.5rem;"><img src="images/iTunesArtwork.png" alt="QCompany logo" style="height:72px; width:auto; border-radius:10px; margin-bottom:1rem;"><h3 style="font-size:1.4rem; margin-bottom:0.5rem;">Willkommen beim Mietvertrag</h3><p class="text-muted">von QCompany</p></div><p style="margin-bottom:1rem;">Dieses Tool erm\u00f6glicht es Ihnen, professionelle Mietvertr\u00e4ge f\u00fcr Kundenfahrzeuge schnell zu erstellen und zu drucken \u2013 direkt im Browser, ohne Installation und ohne Konto.</p><div style="background:#f0f7ff; border-left:4px solid #0f6cbd; border-radius:4px; padding:1rem 1.25rem; margin-bottom:1.25rem;"><strong>Ihre Daten sind 100\u00a0% privat.</strong><br>Alles wird lokal in diesem Browser gespeichert \u2013 Vermieterprofile, Fahrzeuge, Einstellungen und Vertr\u00e4ge. Nichts wird an einen Server gesendet. Nur Sie haben Zugriff auf Ihre Daten.</div><p style="margin-bottom:0.75rem;">Bevor Sie beginnen, empfehlen wir, den Hilfebereich zu lesen:</p><ul style="line-height:2; padding-left:1.25rem; margin-bottom:1.25rem;"><li><strong>Allgemein</strong> \u2013 Schritt-f\u00fcr-Schritt-Anleitung zur Erstellung Ihres ersten Vertrags</li><li><strong>Stempel</strong> \u2013 Laden Sie Ihre Unterschrift oder den Firmenstempel hoch</li><li><strong>Backup</strong> \u2013 So exportieren und stellen Sie Ihre Daten wieder her</li></ul><p class="text-muted" style="font-size:0.9rem;">Dieser Willkommensbildschirm wird nur angezeigt, bis Sie unter <strong>Einstellungen</strong> Ihr erstes Vermieterprofil erstellt haben.</p>',
    'help.generelt_body': '<h3>Erste Schritte</h3><p class="text-muted" style="margin-bottom:1rem;">So erstellen Sie einen Mietvertrag Schritt f\u00fcr Schritt.</p><ol style="line-height:2; padding-left:1.25rem;"><li>\u00d6ffnen Sie <strong>Einstellungen</strong> und erstellen Sie mindestens ein Vermieterprofil und ein Fahrzeug \u2013 diese werden f\u00fcr die zuk\u00fcnftige Nutzung gespeichert.</li><li>W\u00e4hlen Sie Vermieter und Fahrzeug auf der linken Seite aus, oder f\u00fcllen Sie die Felder manuell aus.</li><li>Geben Sie die Mieterdaten ein: Name, Telefon und F\u00fchrerscheindaten.</li><li>Geben Sie die Mietzeit (Von/Bis-Datum und Uhrzeit) sowie Mietpreis und Selbstbehalt an.</li><li>\u00dcberpr\u00fcfen Sie den Vertrag in der Vorschau auf der rechten Seite \u2013 Felder k\u00f6nnen dort auch direkt bearbeitet werden.</li><li>Klicken Sie auf <strong>Drucken</strong>, um den Vertrag zu drucken oder als PDF zu speichern.</li></ol><p class="text-muted" style="margin-top:1rem;">Der Vertrag wird automatisch gespeichert. Klicken Sie auf <strong>Neuer Vertrag</strong>, um einen neuen zu starten.</p>',
    'help.url_body': '<h3>URL-Integration</h3><p class="text-muted" style="margin-bottom:1rem;">Ein externes System (z.\u00a0B. ein Werkstattsystem, CRM oder Buchungssystem) kann die App \u00f6ffnen und die Mieterdaten automatisch \u00fcber URL-Parameter vorausf\u00fcllen.</p><h4 style="margin-bottom:0.5rem;">Unterst\u00fctzte Parameter</h4><table style="width:100%; border-collapse:collapse; margin-bottom:1.5rem; font-size:0.9rem;"><thead><tr style="background:#f5f5f5;"><th style="text-align:left; padding:0.5rem 0.75rem; border:1px solid #ddd;">Parameter</th><th style="text-align:left; padding:0.5rem 0.75rem; border:1px solid #ddd;">Feld</th><th style="text-align:left; padding:0.5rem 0.75rem; border:1px solid #ddd;">Format</th></tr></thead><tbody><tr><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>renter_name</code> / <code>lejer_navn</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Name</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Freitext</td></tr><tr style="background:#fafafa;"><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>renter_phone</code> / <code>lejer_tlf</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Telefon</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Freitext</td></tr><tr><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>renter_license</code> / <code>lejer_koerekortnr</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">F\u00fchrerschein-Nr.</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Freitext</td></tr><tr style="background:#fafafa;"><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>renter_license_date</code> / <code>lejer_koerekort_udstedt</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Ausgestellt am</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">DD-MM-YYYY</td></tr><tr><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>lang</code></td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;">Sprache</td><td style="padding:0.4rem 0.75rem; border:1px solid #ddd;"><code>da</code>, <code>en</code>, <code>de</code></td></tr></tbody></table><h4 style="margin-bottom:0.5rem;">Beispiel-URL</h4><code style="display:block; background:#f5f5f5; border:1px solid #ddd; border-radius:4px; padding:0.75rem; font-size:0.8rem; word-break:break-all; line-height:1.6;">https://lejekontrakt.qcompany.dk/?lang=de&amp;renter_name=Hans%20M\u00fcller&amp;renter_phone=12345678&amp;renter_license=1234567890&amp;renter_license_date=15-06-2018</code><p class="text-muted" style="margin-top:1rem;">Wenn die App mit Parametern ge\u00f6ffnet wird, wird immer ein neuer Vertrag mit den angegebenen Daten erstellt. Die Parameter werden automatisch aus der Adressleiste entfernt.</p>',
    'help.stempel_body': '<h3>Stempel / Unterschrift-\u00dcberlagerung</h3><p class="text-muted" style="margin-bottom:1rem;">Sie k\u00f6nnen ein Bild hochladen (z.\u00a0B. eine eingescannte Unterschrift oder einen Firmenstempel), das automatisch im Feld \u201eVermieter (Name/Unterschrift)\u201c auf Seite 1 angezeigt wird.</p><ol style="line-height:2; padding-left:1.25rem;"><li>\u00d6ffnen Sie <strong>Einstellungen \u2192 Stempel</strong>.</li><li>Klicken Sie auf <strong>Stempel hochladen</strong> und w\u00e4hlen Sie ein Bild (PNG mit transparentem Hintergrund empfohlen).</li><li>Das Bild wird gespeichert und sofort im Unterschriftsfeld der Vorschau angezeigt.</li><li>Der Stempel wird beim Drucken automatisch einbezogen.</li><li>Klicken Sie auf <strong>Stempel entfernen</strong>, um ihn zu l\u00f6schen.</li></ol><p class="text-muted" style="margin-top:1rem;">Der Stempel wird lokal im Browser gespeichert und beim Backup-Export einbezogen.</p>',
    'help.backup_body': '<h3>Backup &amp; Wiederherstellen</h3><p class="text-muted" style="margin-bottom:1rem;">Alle Daten (Vermieterprofile, Fahrzeuge, Einstellungen und Stempel) werden im lokalen Speicher des Browsers gespeichert. Verwenden Sie Export/Import, um ein Backup zu erstellen oder Daten in einen anderen Browser oder ein anderes Ger\u00e4t zu \u00fcbertragen.</p><h4 style="margin-bottom:0.5rem;">Exportieren</h4><p style="margin-bottom:1rem;">Öffnen Sie <strong>Einstellungen \u2192 Backup</strong> und klicken Sie auf <strong>Alle Daten exportieren</strong>. Eine JSON-Datei wird auf Ihren Computer heruntergeladen.</p><h4 style="margin-bottom:0.5rem;">Importieren</h4><p>Klicken Sie auf <strong>Daten importieren</strong> und w\u00e4hlen Sie eine zuvor exportierte JSON-Datei.</p><p class="text-muted" style="margin-top:0.5rem;"><strong>Hinweis:</strong> Beim Importieren werden alle vorhandenen Daten \u00fcberschrieben \u2013 exportieren Sie zuerst, wenn Sie Ihre aktuellen Daten behalten m\u00f6chten.</p>',

    // Default note texts
    'notes.default_black': 'Das Fahrzeug darf w\u00e4hrend der Mietzeit nur vom Mieter (oder dem angegebenen Fahrer) gef\u00fchrt werden. Das Fahrzeug darf nicht untervermietet, im Motorsport genutzt oder f\u00fcr den Personen- oder G\u00fctertransport gegen Entgelt verwendet werden. Das Fahrzeug darf nur in D\u00e4nemark gefahren werden. Der Vermieter ist berechtigt, auf eine Kaskoversicherung zu verzichten. In diesem Fall wird der Mieter so gestellt, als ob eine Kaskoversicherung abgeschlossen worden w\u00e4re. Der Mieter haftet f\u00fcr alle Sch\u00e4den, die nicht oder nicht durch eine abgeschlossene Kaskoversicherung gedeckt w\u00e4ren. Bitte beachten Sie, dass es sich um ein Nichtraucherfahrzeug handelt und keine Haustiere mitgenommen werden d\u00fcrfen. Sonstige Kosten im Zusammenhang mit Unf\u00e4llen w\u00e4hrend der Mietzeit tr\u00e4gt der Mieter. Kosten f\u00fcr Reparaturen, die ohne Absprache mit dem Vermieter durchgef\u00fchrt wurden, gehen nicht zu Lasten des Vermieters. Etwaige Halte- und Parkstrafen sowie sonstige Bu\u00dfgelder und Geb\u00fchren w\u00e4hrend der Mietzeit sind vom Mieter zu tragen. Der Mietvertrag kann nur durch einen neuen Mietvertrag verl\u00e4ngert werden. Der Mietvertrag muss w\u00e4hrend der Fahrt mitgef\u00fchrt und auf Verlangen der Polizei oder anderer Beh\u00f6rden vorgezeigt werden.',
    'notes.default_red': 'HINWEIS: Bitte lesen Sie die Bedingungen auf der R\u00fcckseite/Seite 2 bez\u00fcglich Haftung, Selbstbehalt und Entsch\u00e4digung. Der Selbstbehalt bei Kaskosch\u00e4den ist dem Versicherungsschein zu entnehmen und wird bei Unterzeichnung ausgeh\u00e4ndigt.',

    // Dialogs
    'dialogs.confirm_new_contract': 'Sie haben ungespeicherte \u00c4nderungen. M\u00f6chten Sie wirklich einen neuen Vertrag erstellen?',
    'dialogs.confirm_delete_udlejer': 'M\u00f6chten Sie diesen Vermieter wirklich l\u00f6schen?',
    'dialogs.confirm_delete_bil': 'M\u00f6chten Sie dieses Fahrzeug wirklich l\u00f6schen?',
    'dialogs.confirm_import': 'Dadurch werden alle vorhandenen Daten \u00fcberschrieben. Sind Sie sicher?',
    'dialogs.import_error': 'Daten konnten nicht importiert werden: ',
    'dialogs.confirm_reset_all': 'WARNUNG: Dadurch werden alle Ihre gespeicherten Daten dauerhaft gel\u00f6scht.\n\nFolgendes wird gel\u00f6scht:\n\u2022 Alle Vermieterprofile\n\u2022 Alle Fahrzeuge\n\u2022 Alle Einstellungen und Stempel\n\u2022 Aktueller Vertrag\n\nErw\u00e4gen Sie zun\u00e4chst ein Backup (Alle Daten exportieren).\n\nM\u00f6chten Sie wirklich fortfahren?',
    'dialogs.validation_udlejer_navn': 'Name ist erforderlich',
    'dialogs.validation_bil': 'Modell und Kennzeichen sind erforderlich',

    // Toasts
    'toasts.tekster_gemt': 'Texte gespeichert!',
    'toasts.tekster_nulstillet': 'Texte zur\u00fcckgesetzt!',
    'toasts.stempel_gemt': 'Stempel gespeichert!',
    'toasts.stempel_fjernet': 'Stempel entfernt!',
    'toasts.standardvaerdier_gemt': 'Standardwerte gespeichert!',
    'toasts.data_eksporteret': 'Daten exportiert!',
    'toasts.data_importeret': 'Daten importiert! Wird neu geladen...',
    'toasts.alle_data_slettet': 'Alle Daten gel\u00f6scht. Wird neu geladen...',
    'toasts.udlejer_gemt': 'Vermieter gespeichert!',
    'toasts.udlejer_slettet': 'Vermieter gel\u00f6scht',
    'toasts.standard_udlejer_opdateret': 'Standard-Vermieter aktualisiert',
    'toasts.bil_gemt': 'Fahrzeug gespeichert!',
    'toasts.bil_slettet': 'Fahrzeug gel\u00f6scht',

    // Dynamic
    'dynamic.empty_udlejere': 'Noch keine Vermieter. Klicken Sie auf \u201eVermieter hinzuf\u00fcgen\u201c.',
    'dynamic.empty_biler': 'Noch keine Fahrzeuge. Klicken Sie auf \u201eFahrzeug hinzuf\u00fcgen\u201c.',
    'dynamic.badge_standard': 'Standard',
    'dynamic.btn_set_default': 'Als Standard setzen',
    'dynamic.btn_edit': 'Bearbeiten',
    'dynamic.btn_delete': 'L\u00f6schen',
    'dynamic.car_regnr_prefix': 'Kennz.: ',
  }
};

/* ── I18n Manager ────────────────────────────────────────────────────── */
const I18nManager = {
  currentLang: 'da',
  SUPPORTED: ['da', 'en', 'de'],
  STORAGE_KEY: 'lejekontrakt_lang',

  /**
   * Initialise: resolve language, apply to DOM, wire switcher
   */
  init() {
    const p = new URLSearchParams(location.search);
    const urlLang = p.get('lang');

    if (urlLang && this.SUPPORTED.includes(urlLang)) {
      this.currentLang = urlLang;
      localStorage.setItem(this.STORAGE_KEY, urlLang);
      // Strip lang param from address bar
      p.delete('lang');
      const newSearch = p.toString();
      history.replaceState(null, '', location.pathname + (newSearch ? '?' + newSearch : ''));
    } else {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored && this.SUPPORTED.includes(stored)) {
        this.currentLang = stored;
      } else {
        // Auto-detect from browser
        const nav = (navigator.language || navigator.userLanguage || 'da').slice(0, 2).toLowerCase();
        this.currentLang = this.SUPPORTED.includes(nav) ? nav : 'da';
        localStorage.setItem(this.STORAGE_KEY, this.currentLang);
      }
    }

    this.applyToDOM();

    // Wire language switcher
    const switcher = document.getElementById('lang-switcher');
    if (switcher) {
      switcher.value = this.currentLang;
      switcher.addEventListener('change', (e) => this.setLanguage(e.target.value));
    }
  },

  /**
   * Look up a translation key (falls back to 'da')
   */
  t(key) {
    const langData = I18nData[this.currentLang];
    if (langData && langData[key] !== undefined) return langData[key];
    const daData = I18nData.da;
    if (daData && daData[key] !== undefined) return daData[key];
    return key;
  },

  /**
   * Apply all translations to the current DOM
   */
  applyToDOM() {
    document.documentElement.lang = this.currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = this.t(el.getAttribute('data-i18n'));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = this.t(el.getAttribute('data-i18n-html'));
    });
  },

  /**
   * Switch language, persist, and refresh UI
   */
  setLanguage(lang) {
    if (!this.SUPPORTED.includes(lang)) return;
    this.currentLang = lang;
    localStorage.setItem(this.STORAGE_KEY, lang);

    this.applyToDOM();

    // Update switcher
    const switcher = document.getElementById('lang-switcher');
    if (switcher) switcher.value = lang;

    // Re-apply note texts (respects custom overrides)
    if (typeof SettingsManager !== 'undefined') {
      SettingsManager.applyTexts();
    }

    // If settings modal is open, refresh the active tab (re-renders dynamic lists)
    if (typeof SettingsManager !== 'undefined' && SettingsManager.modal &&
        SettingsManager.modal.classList.contains('active')) {
      const activeTab = SettingsManager.modal.querySelector('.tab-btn.active');
      if (activeTab && activeTab.dataset.tab) {
        SettingsManager.switchTab(activeTab.dataset.tab);
      }
    }
  }
};
