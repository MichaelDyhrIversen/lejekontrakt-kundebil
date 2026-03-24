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
    const supported = ['lejer_navn', 'lejer_tlf', 'lejer_koerekortnr', 'lejer_koerekort_udstedt'];
    if (!supported.some(f => p.has(f))) return null;
    return {
      navn: p.get('lejer_navn') || '',
      tlf: p.get('lejer_tlf') || '',
      koerekortnr: p.get('lejer_koerekortnr') || '',
      koerekort_udstedt: p.get('lejer_koerekort_udstedt') || ''
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
      if (!confirm('Du har ugemte ændringer. Er du sikker på at du vil oprette en ny kontrakt?')) {
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

    // Warn before leaving with unsaved changes
    window.addEventListener('beforeunload', (e) => {
      if (this.state.unsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
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
