/**
 * Main Application Controller
 * Coordinates all modules and manages application state
 */

const App = {
  state: {
    currentContract: null,
    unsavedChanges: false
  },
  saveTimeout: null,

  /**
   * Initialize the application
   */
  init() {
    console.log('Initializing Rental Contract Application...');
    
    // Initialize storage
    StorageManager.init();

    // Initialize i18n (must come before any module that renders DOM text)
    I18nManager.init();

    // Initialize all modules
    TemplatePreview.init();
    ContractForm.init();
    UdlejerManager.init();
    CarManager.init();
    SettingsManager.init();
    PrintManager.init();
    
    // Load current contract or create new
    this.loadOrCreateContract();
    
    // Setup event listeners
    this.setupEventListeners();
    
    console.log('Application initialized successfully');
  },

  /**
   * Read lejer fields from URL query parameters.
   * Returns an object if any lejer param is present, otherwise null.
   */
  readUrlParams() {
    const p = new URLSearchParams(location.search);

    // English aliases map to internal Danish field names
    const EN_MAP = {
      renter_name:         'lejer_navn',
      renter_phone:        'lejer_tlf',
      renter_license:      'lejer_koerekortnr',
      renter_license_date: 'lejer_koerekort_udstedt'
    };
    const DA_KEYS = ['lejer_navn', 'lejer_tlf', 'lejer_koerekortnr', 'lejer_koerekort_udstedt'];
    const allSupported = [...Object.keys(EN_MAP), ...DA_KEYS];

    if (!allSupported.some(f => p.has(f))) return null;

    // Resolve: English alias wins if both provided
    const resolved = {};
    for (const [enKey, daKey] of Object.entries(EN_MAP)) {
      if (p.has(enKey)) resolved[daKey] = p.get(enKey);
    }
    // Danish names fill in any gaps
    for (const daKey of ['lejer_navn', 'lejer_tlf', 'lejer_koerekortnr', 'lejer_koerekort_udstedt']) {
      if (p.has(daKey) && resolved[daKey] === undefined) resolved[daKey] = p.get(daKey);
    }

    return {
      navn:              resolved['lejer_navn'] || '',
      tlf:               resolved['lejer_tlf'] || '',
      koerekortnr:       resolved['lejer_koerekortnr'] || '',
      koerekort_udstedt: resolved['lejer_koerekort_udstedt'] || ''
    };
  },

  /**
   * Load current contract or create new one
   */
  loadOrCreateContract() {
    const urlLejer = this.readUrlParams();

    if (urlLejer) {
      // URL params present — always start a fresh contract and apply them
      this.state.currentContract = StorageManager.getNewContractTemplate();
      this.state.currentContract.lejer = { ...this.state.currentContract.lejer, ...urlLejer };
      StorageManager.saveCurrentContract(this.state.currentContract);
      // Remove params from address bar so a refresh doesn't re-apply them
      history.replaceState(null, '', location.pathname);
    } else {
      const saved = StorageManager.getCurrentContract();
      if (saved) {
        this.state.currentContract = saved;
      } else {
        this.state.currentContract = StorageManager.getNewContractTemplate();
      }
    }

    // Update UI
    ContractForm.loadContract(this.state.currentContract);
    TemplatePreview.updateTemplate(this.state.currentContract);
    SettingsManager.applyStamp();
    SettingsManager.applyTexts();
  },

  /**
   * Create new contract
   */
  newContract() {
    // Warn about unsaved changes
    if (this.state.unsavedChanges) {
      if (!confirm(I18nManager.t('dialogs.confirm_new_contract'))) {
        return;
      }
    }
    
    clearTimeout(this.saveTimeout);
    StorageManager.clearCurrentContract();
    this.state.currentContract = StorageManager.getNewContractTemplate();
    this.state.unsavedChanges = false;
    
    ContractForm.loadContract(this.state.currentContract);
    TemplatePreview.updateTemplate(this.state.currentContract);
    
    console.log('Created new contract');
  },

  /**
   * Update contract data
   */
  updateContract(data) {
    this.state.currentContract = { ...this.state.currentContract, ...data };
    this.state.unsavedChanges = true;

    // Debounced auto-save (does NOT clear unsavedChanges)
    clearTimeout(this.saveTimeout);
    this.saveTimeout = setTimeout(() => this.saveContract(), 500);

    // Update preview
    TemplatePreview.updateTemplate(this.state.currentContract);
  },

  /**
   * Save current contract
   */
  saveContract() {
    StorageManager.saveCurrentContract(this.state.currentContract);
    // unsavedChanges stays true — cleared only when user starts a new contract
  },

  /**
   * Setup global event listeners
   */
  setupEventListeners() {
    // New contract button
    const newBtn = document.getElementById('new-contract-btn');
    if (newBtn) {
      newBtn.addEventListener('click', () => this.newContract());
    }

    // Settings button
    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => SettingsManager.openModal());
    }

    // Print button
    const printBtn = document.getElementById('print-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => PrintManager.print());
    }

    // Help button
    const helpBtn = document.getElementById('help-btn');
    const helpModal = document.getElementById('help-modal');
    const helpClose = document.getElementById('help-close');
    if (helpBtn) helpBtn.addEventListener('click', () => helpModal.classList.add('active'));
    if (helpClose) helpClose.addEventListener('click', () => helpModal.classList.remove('active'));
    if (helpModal) helpModal.addEventListener('click', (e) => {
      if (e.target === helpModal) helpModal.classList.remove('active');
    });

    // Auto-open help on Velkommen tab for first-time visitors (no udlejere configured yet)
    if (helpModal && StorageManager.getUdlejere().length === 0) {
      const welcomeTabBtn = document.getElementById('help-tab-velkommen');
      if (welcomeTabBtn) welcomeTabBtn.style.display = '';
      switchHelpTab('velkommen');
      helpModal.classList.add('active');
    }

    // Warn before leaving with unsaved changes
    window.addEventListener('beforeunload', (e) => {
      if (this.state.unsavedChanges) {
        e.preventDefault();
      }
    });
  }
};

// Help modal tab switcher (called from onclick in help modal tabs)
function switchHelpTab(name) {
  document.querySelectorAll('#help-modal .tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick') === `switchHelpTab('${name}')`);
  });
  document.querySelectorAll('#help-modal .tab-content').forEach(el => {
    el.classList.toggle('active', el.id === `help-${name}`);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
