/**
 * Settings Manager Module
 * Manages application settings and configuration
 */

const SettingsManager = {
  modal: null,

  /**
   * Initialize settings module
   */
  init() {
    this.modal = document.getElementById('settings-modal');
    
    if (!this.modal) {
      console.error('Settings modal not found');
      return;
    }

    this.setupEventListeners();
  },

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Close button
    const closeBtn = this.modal.querySelector('.close-modal');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    // Click outside to close
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });

    // Tab switching
    const tabs = this.modal.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => this.switchTab(tab.dataset.tab));
    });

    // Auto-format time inputs in defaults
    ['default-fra-kl', 'default-til-kl'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('blur', () => { el.value = formatTime(el.value); });
    });

    // Save default values
    const saveDefaultsBtn = document.getElementById('save-defaults-btn');
    if (saveDefaultsBtn) {
      saveDefaultsBtn.addEventListener('click', () => this.saveDefaults());
    }

    // Export/Import buttons
    const exportBtn = document.getElementById('export-data-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.exportData());
    }

    const importBtn = document.getElementById('import-data-btn');
    const importFile = document.getElementById('import-data-file');
    if (importBtn && importFile) {
      importBtn.addEventListener('click', () => importFile.click());
      importFile.addEventListener('change', (e) => this.importData(e));
    }

    // Tekster buttons
    const saveTeksterBtn = document.getElementById('save-tekster-btn');
    if (saveTeksterBtn) {
      saveTeksterBtn.addEventListener('click', () => this.saveTekster());
    }

    const resetTeksterBtn = document.getElementById('reset-tekster-btn');
    if (resetTeksterBtn) {
      resetTeksterBtn.addEventListener('click', () => this.resetTekster());
    }

    // Reset all data button
    const resetAllBtn = document.getElementById('reset-all-btn');
    if (resetAllBtn) {
      resetAllBtn.addEventListener('click', () => this.resetAllData());
    }

    // Stamp buttons
    const uploadStampBtn = document.getElementById('upload-stamp-btn');
    const stampFileInput = document.getElementById('stamp-file-input');
    const removeStampBtn = document.getElementById('remove-stamp-btn');

    if (uploadStampBtn && stampFileInput) {
      uploadStampBtn.addEventListener('click', () => stampFileInput.click());
      stampFileInput.addEventListener('change', (e) => this.handleStampUpload(e));
    }

    if (removeStampBtn) {
      removeStampBtn.addEventListener('click', () => this.removeStamp());
    }
  },

  /**
   * Open settings modal
   */
  openModal() {
    this.modal.classList.add('active');
    this.loadSettings();
    this.switchTab('udlejere');
  },

  /**
   * Close settings modal
   */
  closeModal() {
    this.modal.classList.remove('active');
  },

  // Default note texts – language-aware via i18n
  get DEFAULT_NOTE_BLACK() { return I18nManager.t('notes.default_black'); },
  get DEFAULT_NOTE_RED()   { return I18nManager.t('notes.default_red'); },

  /**
   * Apply stored note texts to the template
   */
  applyTexts() {
    const settings = StorageManager.getSettings();
    const noteBlack = document.getElementById('note-black');
    const noteRed = document.getElementById('note-red');
    if (noteBlack) noteBlack.textContent = settings.noteBlack || this.DEFAULT_NOTE_BLACK;
    if (noteRed) noteRed.textContent = settings.noteRed || this.DEFAULT_NOTE_RED;
  },

  /**
   * Load stored texts into the settings form
   */
  loadTekster() {
    const settings = StorageManager.getSettings();
    const noteBlackInput = document.getElementById('settings-note-black');
    const noteRedInput = document.getElementById('settings-note-red');
    if (noteBlackInput) noteBlackInput.value = settings.noteBlack || this.DEFAULT_NOTE_BLACK;
    if (noteRedInput) noteRedInput.value = settings.noteRed || this.DEFAULT_NOTE_RED;
  },

  /**
   * Save note texts from form
   */
  saveTekster() {
    const settings = StorageManager.getSettings();
    const noteBlackInput = document.getElementById('settings-note-black');
    const noteRedInput = document.getElementById('settings-note-red');
    settings.noteBlack = noteBlackInput ? noteBlackInput.value.trim() : '';
    settings.noteRed = noteRedInput ? noteRedInput.value.trim() : '';
    StorageManager.updateSettings(settings);
    this.applyTexts();
    this.showMessage(I18nManager.t('toasts.tekster_gemt'));
  },

  /**
   * Reset note texts to defaults
   */
  resetTekster() {
    const noteBlackInput = document.getElementById('settings-note-black');
    const noteRedInput = document.getElementById('settings-note-red');
    if (noteBlackInput) noteBlackInput.value = this.DEFAULT_NOTE_BLACK;
    if (noteRedInput) noteRedInput.value = this.DEFAULT_NOTE_RED;
    const settings = StorageManager.getSettings();
    settings.noteBlack = '';
    settings.noteRed = '';
    StorageManager.updateSettings(settings);
    this.applyTexts();
    this.showMessage(I18nManager.t('toasts.tekster_nulstillet'));
  },

  /**
   * Apply stamp image to the template overlay
   */
  applyStamp() {
    const settings = StorageManager.getSettings();
    const stampImg = document.getElementById('stamp-img');
    const previewImg = document.getElementById('stamp-preview-img');
    const previewWrap = document.getElementById('stamp-preview-wrap');
    const removeBtn = document.getElementById('remove-stamp-btn');

    if (settings.stampImage) {
      if (stampImg) {
        stampImg.src = settings.stampImage;
        stampImg.style.display = '';
      }
      if (previewImg) previewImg.src = settings.stampImage;
      if (previewWrap) previewWrap.style.display = '';
      if (removeBtn) removeBtn.style.display = '';
    } else {
      if (stampImg) {
        stampImg.src = '';
        stampImg.style.display = 'none';
      }
      if (previewImg) previewImg.src = '';
      if (previewWrap) previewWrap.style.display = 'none';
      if (removeBtn) removeBtn.style.display = 'none';
    }
  },

  /**
   * Handle stamp file upload
   */
  handleStampUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const settings = StorageManager.getSettings();
      settings.stampImage = e.target.result;
      StorageManager.updateSettings(settings);
      this.applyStamp();
      this.showMessage(I18nManager.t('toasts.stempel_gemt'));
    };
    reader.readAsDataURL(file);

    // Reset so same file can be re-selected
    event.target.value = '';
  },

  /**
   * Remove stamp image
   */
  removeStamp() {
    const settings = StorageManager.getSettings();
    settings.stampImage = null;
    StorageManager.updateSettings(settings);
    this.applyStamp();
    this.showMessage(I18nManager.t('toasts.stempel_fjernet'));
  },

  /**
   * Switch tab
   */
  switchTab(tabName) {
    // Update tab buttons
    this.modal.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Update tab content
    this.modal.querySelectorAll('.tab-content').forEach(content => {
      content.classList.toggle('active', content.id === `${tabName}-tab`);
    });

    // Load specific tab data
    if (tabName === 'udlejere') {
      UdlejerManager.loadList();
    } else if (tabName === 'biler') {
      CarManager.loadList();
    } else if (tabName === 'defaults') {
      this.loadDefaults();
    } else if (tabName === 'tekster') {
      this.loadTekster();
    } else if (tabName === 'stempel') {
      this.applyStamp();
    }
  },

  /**
   * Load settings into form
   */
  loadSettings() {
    this.loadDefaults();
  },

  /**
   * Load default values
   */
  loadDefaults() {
    const settings = StorageManager.getSettings();
    
    // Load default values into form
    if (settings.defaultValues) {
      // Lejeperiode
      const startDato = document.getElementById('default-start-dato');
      if (startDato) startDato.checked = settings.defaultStartDato !== false;

      const lejeDage = document.getElementById('default-leje-dage');
      if (lejeDage) lejeDage.value = settings.defaultLejeDage ?? '';

      const fraKl = document.getElementById('default-fra-kl');
      if (fraKl) fraKl.value = settings.defaultFraKl || '';

      const tilKl = document.getElementById('default-til-kl');
      if (tilKl) tilKl.value = settings.defaultTilKl || '';

      // Selvrisiko
      if (settings.defaultValues.selvrisiko) {
        const ansvar = document.getElementById('default-ansvar');
        const kasko = document.getElementById('default-kasko');
        const tillaeg = document.getElementById('default-tillaeg');

        if (ansvar) ansvar.value = settings.defaultValues.selvrisiko.ansvar || '';
        if (kasko) kasko.value = settings.defaultValues.selvrisiko.kasko || '';
        if (tillaeg) tillaeg.value = settings.defaultValues.selvrisiko.tillaeg || '';
      }
      
      // Bil
      if (settings.defaultValues.bil) {
        const braendstof = document.getElementById('default-braendstof');
        if (braendstof) braendstof.value = settings.defaultValues.bil.braendstof_pr_km || '';
      }
    }
  },

  /**
   * Save default values
   */
  saveDefaults() {
    const settings = StorageManager.getSettings();
    
    // Get values from form
    const startDato = document.getElementById('default-start-dato');
    const lejeDage = document.getElementById('default-leje-dage');
    const fraKl = document.getElementById('default-fra-kl');
    const tilKl = document.getElementById('default-til-kl');
    const ansvar = document.getElementById('default-ansvar');
    const kasko = document.getElementById('default-kasko');
    const tillaeg = document.getElementById('default-tillaeg');
    const braendstof = document.getElementById('default-braendstof');

    settings.defaultStartDato = startDato ? startDato.checked : true;
    settings.defaultLejeDage = lejeDage && lejeDage.value !== '' ? parseInt(lejeDage.value) : null;
    settings.defaultFraKl = fraKl ? fraKl.value.trim() : '';
    settings.defaultTilKl = tilKl ? tilKl.value.trim() : '';
    settings.defaultValues = {
      selvrisiko: {
        ansvar: ansvar ? ansvar.value : '',
        kasko: kasko ? kasko.value : '',
        tillaeg: tillaeg ? tillaeg.value : ''
      },
      bil: {
        braendstof_pr_km: braendstof ? braendstof.value : ''
      }
    };
    
    StorageManager.updateSettings(settings);
    this.showMessage(I18nManager.t('toasts.standardvaerdier_gemt'));
  },

  /**
   * Export all data
   */
  exportData() {
    const data = StorageManager.exportAll();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `lejekontrakt-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    this.showMessage(I18nManager.t('toasts.data_eksporteret'));
  },

  /**
   * Import data
   */
  async importData(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      
      if (confirm(I18nManager.t('dialogs.confirm_import'))) {
        StorageManager.importAll(data);
        this.showMessage(I18nManager.t('toasts.data_importeret'));
        setTimeout(() => location.reload(), 1000);
      }
    } catch (e) {
      alert(I18nManager.t('dialogs.import_error') + e.message);
    }
    
    // Reset file input
    event.target.value = '';
  },

  /**
   * Reset all stored data with confirmation
   */
  resetAllData() {
    const confirmed = confirm(I18nManager.t('dialogs.confirm_reset_all'));
    if (!confirmed) return;

    Object.values(StorageManager.KEYS).forEach(key => StorageManager.remove(key));
    this.showMessage(I18nManager.t('toasts.alle_data_slettet'));
    setTimeout(() => location.reload(), 1000);
  },

  /**
   * Show temporary message
   */
  showMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'toast-message';
    msg.textContent = text;
    document.body.appendChild(msg);
    
    setTimeout(() => msg.classList.add('show'), 10);
    setTimeout(() => {
      msg.classList.remove('show');
      setTimeout(() => msg.remove(), 300);
    }, 2000);
  }
};
