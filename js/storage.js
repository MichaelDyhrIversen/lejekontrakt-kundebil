/**
 * Convert DD-MM-YYYY → YYYY-MM-DD for use in <input type="date">
 */
function toInputDate(ddmmyyyy) {
  if (!ddmmyyyy) return '';
  const [d, m, y] = ddmmyyyy.split('-');
  return (d && m && y) ? `${y}-${m}-${d}` : '';
}

/**
 * Convert YYYY-MM-DD (from <input type="date">) → DD-MM-YYYY for storage
 */
function fromInputDate(yyyymmdd) {
  if (!yyyymmdd) return '';
  const [y, m, d] = yyyymmdd.split('-');
  return (d && m && y) ? `${d}-${m}-${y}` : '';
}

/**
 * Format a loose time string to HH:MM.
 * Examples: "730" → "07:30", "17" → "17:00", "1730" → "17:30"
 */
function formatTime(value) {
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';

  let h, m;
  if (digits.length <= 2) {
    h = digits.padStart(2, '0');
    m = '00';
  } else if (digits.length === 3) {
    h = '0' + digits[0];
    m = digits.slice(1);
  } else {
    h = digits.slice(0, 2);
    m = digits.slice(2, 4);
  }

  const hNum = Math.min(parseInt(h, 10), 23);
  const mNum = Math.min(parseInt(m, 10), 59);
  return `${String(hNum).padStart(2, '0')}:${String(mNum).padStart(2, '0')}`;
}

/**
 * LocalStorage Manager
 * Handles all data persistence operations for the rental contract application
 */

const StorageManager = {
  // Storage keys
  KEYS: {
    SETTINGS: 'lejekontrakt_settings',
    UDLEJERE: 'lejekontrakt_udlejere',
    BILER: 'lejekontrakt_biler',
    CURRENT: 'lejekontrakt_current'
  },

  /**
   * Initialize storage with default values if empty
   */
  init() {
    // Initialize settings if not exists
    if (!this.get(this.KEYS.SETTINGS)) {
      this.set(this.KEYS.SETTINGS, {
        defaultUdlejer: null,
        defaultStartDato: true,
        defaultLejeDage: null,
        defaultFraKl: '',
        defaultTilKl: '',
        stampImage: null,
        noteBlack: '',
        noteRed: '',
        defaultValues: {
          selvrisiko: { ansvar: "", kasko: "5000", tillaeg: "" },
          bil: { braendstof_pr_km: "0,00" }
        }
      });
    }

    // Initialize arrays if not exists
    if (!this.get(this.KEYS.UDLEJERE)) {
      this.set(this.KEYS.UDLEJERE, []);
    }
    if (!this.get(this.KEYS.BILER)) {
      this.set(this.KEYS.BILER, []);
    }
  },

  /**
   * Get item from localStorage
   */
  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Error reading from localStorage:', e);
      return null;
    }
  },

  /**
   * Set item in localStorage
   */
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Error writing to localStorage:', e);
      return false;
    }
  },

  /**
   * Remove item from localStorage
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('Error removing from localStorage:', e);
      return false;
    }
  },

  /**
   * Generate UUID
   */
  generateId() {
    return crypto.randomUUID();
  },

  // ========== UDLEJER OPERATIONS ==========

  /**
   * Get all udlejer profiles
   */
  getUdlejere() {
    return this.get(this.KEYS.UDLEJERE) || [];
  },

  /**
   * Add new udlejer profile
   */
  addUdlejer(data) {
    const udlejere = this.getUdlejere();
    const newUdlejer = {
      id: this.generateId(),
      navn: data.navn || '',
      adresse: data.adresse || '',
      postby: data.postby || ''
    };
    udlejere.push(newUdlejer);
    this.set(this.KEYS.UDLEJERE, udlejere);
    return newUdlejer;
  },

  /**
   * Update udlejer profile
   */
  updateUdlejer(id, data) {
    const udlejere = this.getUdlejere();
    const index = udlejere.findIndex(u => u.id === id);
    if (index !== -1) {
      udlejere[index] = { ...udlejere[index], ...data };
      this.set(this.KEYS.UDLEJERE, udlejere);
      return udlejere[index];
    }
    return null;
  },

  /**
   * Delete udlejer profile
   */
  deleteUdlejer(id) {
    const udlejere = this.getUdlejere();
    const filtered = udlejere.filter(u => u.id !== id);
    this.set(this.KEYS.UDLEJERE, filtered);
    
    // Remove as default if it was
    const settings = this.get(this.KEYS.SETTINGS);
    if (settings.defaultUdlejer === id) {
      settings.defaultUdlejer = null;
      this.set(this.KEYS.SETTINGS, settings);
    }
    
    return true;
  },

  /**
   * Get udlejer by ID
   */
  getUdlejer(id) {
    const udlejere = this.getUdlejere();
    return udlejere.find(u => u.id === id) || null;
  },

  // ========== CAR OPERATIONS ==========

  /**
   * Get all cars
   */
  getBiler() {
    return this.get(this.KEYS.BILER) || [];
  },

  /**
   * Add new car
   */
  addBil(data) {
    const biler = this.getBiler();
    const newBil = {
      id: this.generateId(),
      model: data.model || '',
      regnr: data.regnr || '',
      lejepris: data.lejepris || ''
    };
    biler.push(newBil);
    this.set(this.KEYS.BILER, biler);
    return newBil;
  },

  /**
   * Update car
   */
  updateBil(id, data) {
    const biler = this.getBiler();
    const index = biler.findIndex(b => b.id === id);
    if (index !== -1) {
      biler[index] = { ...biler[index], ...data };
      this.set(this.KEYS.BILER, biler);
      return biler[index];
    }
    return null;
  },

  /**
   * Delete car
   */
  deleteBil(id) {
    const biler = this.getBiler();
    const filtered = biler.filter(b => b.id !== id);
    this.set(this.KEYS.BILER, filtered);
    return true;
  },

  /**
   * Get car by ID
   */
  getBil(id) {
    const biler = this.getBiler();
    return biler.find(b => b.id === id) || null;
  },

  // ========== SETTINGS OPERATIONS ==========

  /**
   * Get settings
   */
  getSettings() {
    return this.get(this.KEYS.SETTINGS) || {
      defaultUdlejer: null,
      defaultStartDato: true,
      defaultLejeDage: null,
      defaultFraKl: '',
      defaultTilKl: '',
      stampImage: null,
      noteBlack: '',
      noteRed: '',
      defaultValues: {
        selvrisiko: { ansvar: "", kasko: "5000", tillaeg: "" },
        bil: { braendstof_pr_km: "0,00" }
      }
    };
  },

  /**
   * Update settings
   */
  updateSettings(settings) {
    this.set(this.KEYS.SETTINGS, settings);
    return settings;
  },

  /**
   * Set default udlejer
   */
  setDefaultUdlejer(id) {
    const settings = this.getSettings();
    settings.defaultUdlejer = id;
    this.set(this.KEYS.SETTINGS, settings);
    return true;
  },

  /**
   * Get default udlejer
   */
  getDefaultUdlejer() {
    const settings = this.getSettings();
    if (settings.defaultUdlejer) {
      return this.getUdlejer(settings.defaultUdlejer);
    }
    return null;
  },

  // ========== CURRENT CONTRACT OPERATIONS ==========

  /**
   * Get current contract
   */
  getCurrentContract() {
    return this.get(this.KEYS.CURRENT);
  },

  /**
   * Save current contract
   */
  saveCurrentContract(data) {
    this.set(this.KEYS.CURRENT, data);
    return true;
  },

  /**
   * Clear current contract
   */
  clearCurrentContract() {
    this.remove(this.KEYS.CURRENT);
    return true;
  },

  /**
   * Get new contract template with defaults
   */
  getNewContractTemplate() {
    const settings = this.getSettings();
    const defaultUdlejer = this.getDefaultUdlejer();
    
    // Get today's date in DD-MM-YYYY format
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const dateStr = `${dd}-${mm}-${yyyy}`;

    // Compute fra date (default to today unless explicitly disabled)
    const fraStr = settings.defaultStartDato !== false ? dateStr : '';

    // Compute til date (fra + defaultLejeDage days, if set)
    let tilStr = '';
    if (settings.defaultLejeDage && fraStr) {
      const [fDay, fMonth, fYear] = fraStr.split('-').map(Number);
      const tilDate = new Date(fYear, fMonth - 1, fDay + settings.defaultLejeDage);
      tilStr = `${String(tilDate.getDate()).padStart(2, '0')}-${String(tilDate.getMonth() + 1).padStart(2, '0')}-${tilDate.getFullYear()}`;
    }

    return {
      udlejerId: defaultUdlejer ? defaultUdlejer.id : null,
      bilId: null,
      udlejer: defaultUdlejer || { navn: '', adresse: '', postby: '' },
      lejer: { navn: '', tlf: '', koerekortnr: '', koerekort_udstedt: '' },
      foerer: { koerekortnr: '', koerekort_udstedt: '', tekst: '' },
      bil: {
        model: '',
        regnr: '',
        km_start: '',
        km_slut: '',
        kort_km: '',
        braendstof_pr_km: settings.defaultValues.bil.braendstof_pr_km || '0,00'
      },
      leje: {
        fra: fraStr,
        fra_kl: settings.defaultFraKl || '',
        til: tilStr,
        til_kl: settings.defaultTilKl || ''
      },
      pris: { lejepris: '' },
      selvrisiko: settings.defaultValues.selvrisiko || { ansvar: '', kasko: '5000', tillaeg: '' },
      bemaerkninger: '',
      meta: { dato: dateStr },
      erklaering: {
        ejer: defaultUdlejer ? defaultUdlejer.navn : '',
        regnr: '',
        dato: dateStr,
        navn: '',
        tlf: ''
      }
    };
  },

  // ========== EXPORT / IMPORT ==========

  /**
   * Export all data
   */
  exportAll() {
    return {
      settings: this.get(this.KEYS.SETTINGS),
      udlejere: this.get(this.KEYS.UDLEJERE),
      biler: this.get(this.KEYS.BILER),
      current: this.get(this.KEYS.CURRENT)
    };
  },

  /**
   * Import all data
   */
  importAll(data) {
    try {
      if (data.settings) this.set(this.KEYS.SETTINGS, data.settings);
      if (data.udlejere) this.set(this.KEYS.UDLEJERE, data.udlejere);
      if (data.biler) this.set(this.KEYS.BILER, data.biler);
      if (data.current) this.set(this.KEYS.CURRENT, data.current);
      return true;
    } catch (e) {
      console.error('Error importing data:', e);
      return false;
    }
  }
};
