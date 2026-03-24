/**
 * Contract Form Module
 * Manages the contract form input and validation
 */

const ContractForm = {
  form: null,
  saveTimeout: null,
  DATE_FIELDS: new Set([
    'leje.fra', 'leje.til',
    'lejer.koerekort_udstedt', 'foerer.koerekort_udstedt',
    'meta.dato', 'erklaering.dato'
  ]),

  /**
   * Initialize form module
   */
  init() {
    this.form = document.getElementById('contract-form');
    
    if (!this.form) {
      console.error('Contract form not found');
      return;
    }

    // Auto-format time inputs on blur
    ['leje.fra_kl', 'leje.til_kl'].forEach(name => {
      const el = this.form.querySelector(`[name="${name}"]`);
      if (el) el.addEventListener('blur', () => { el.value = formatTime(el.value); });
    });

    // Setup event listeners
    this.setupEventListeners();
  },

  /**
   * Setup form event listeners
   */
  setupEventListeners() {
    // Listen to all form inputs (both input and change go through the same handler)
    this.form.addEventListener('input', (e) => this.handleInput(e));
    this.form.addEventListener('change', (e) => this.handleInput(e));

    // Udlejer selector
    const udlejerSelect = document.getElementById('udlejer-select');
    if (udlejerSelect) {
      udlejerSelect.addEventListener('change', (e) => {
        this.loadUdlejer(e.target.value);
      });
    }

    // Car selector
    const carSelect = document.getElementById('car-select');
    if (carSelect) {
      carSelect.addEventListener('change', (e) => {
        this.loadCar(e.target.value);
      });
    }
  },

  /**
   * Handle input events (with debouncing)
   */
  handleInput(e) {
    // Auto-mirror lejer name/phone into erklaering when user edits them
    if (e.target.name === 'lejer.navn') {
      const erkInput = this.form.querySelector('[name="erklaering.navn"]');
      if (erkInput && !erkInput.dataset.manuallyEdited) {
        erkInput.value = e.target.value;
      }
    } else if (e.target.name === 'lejer.tlf') {
      const erkInput = this.form.querySelector('[name="erklaering.tlf"]');
      if (erkInput && !erkInput.dataset.manuallyEdited) {
        erkInput.value = e.target.value;
      }
    } else if (e.target.name === 'erklaering.navn' || e.target.name === 'erklaering.tlf') {
      // Mark as manually edited so auto-fill stops overwriting
      e.target.dataset.manuallyEdited = 'true';
    }

    clearTimeout(this.saveTimeout);
    this.saveTimeout = setTimeout(() => {
      this.saveFormData();
    }, 300);
  },

  /**
   * Save form data to application state
   */
  saveFormData() {
    const formData = new FormData(this.form);
    const data = this.formDataToContract(formData);
    
    App.updateContract(data);
  },

  /**
   * Convert FormData to contract object structure
   */
  formDataToContract(formData) {
    const data = {
      udlejer: {},
      lejer: {},
      foerer: {},
      bil: {},
      leje: {},
      pris: {},
      selvrisiko: {},
      meta: {},
      erklaering: {}
    };

    for (const [key, value] of formData.entries()) {
      const parts = key.split('.');
      // Date inputs return YYYY-MM-DD; convert to DD-MM-YYYY for storage
      const cooked = this.DATE_FIELDS.has(key) ? fromInputDate(value) : value;
      if (parts.length === 2) {
        data[parts[0]][parts[1]] = cooked;
      } else if (parts.length === 1) {
        data[parts[0]] = cooked;
      }
    }

    return data;
  },

  /**
   * Load contract data into form
   */
  loadContract(contract) {
    if (!contract) return;

    // Reset manual-edit flags so auto-fill works on new contracts
    ['erklaering.navn', 'erklaering.tlf'].forEach(name => {
      const el = this.form.querySelector(`[name="${name}"]`);
      if (el) delete el.dataset.manuallyEdited;
    });

    // Load all fields
    Object.keys(contract).forEach(section => {
      if (typeof contract[section] === 'object' && contract[section] !== null) {
        Object.keys(contract[section]).forEach(field => {
          const fieldName = `${section}.${field}`;
          const input = this.form.querySelector(`[name="${fieldName}"]`);
          if (input) {
            const raw = contract[section][field] || '';
            // Date inputs require YYYY-MM-DD; stored value is DD-MM-YYYY
            input.value = this.DATE_FIELDS.has(fieldName) ? toInputDate(raw) : raw;
          }
        });
      } else {
        const input = this.form.querySelector(`[name="${section}"]`);
        if (input) {
          input.value = contract[section] || '';
        }
      }
    });

    // Update selectors (reads selected IDs from App.state.currentContract)
    this.updateUdlejerSelector();
    this.updateCarSelector();
  },

  /**
   * Update field from preview (sync back)
   */
  updateFieldFromPreview(fieldPath, value) {
    const input = this.form.querySelector(`[name="${fieldPath}"]`);
    if (input) {
      // Preview shows DD-MM-YYYY; date inputs need YYYY-MM-DD
      input.value = this.DATE_FIELDS.has(fieldPath) ? toInputDate(value) : value;
      this.saveFormData();
    }
  },

  /**
   * Load udlejer profile
   */
  loadUdlejer(id) {
    if (!id) return;

    const udlejer = StorageManager.getUdlejer(id);
    if (udlejer) {
      // Update form fields
      ['navn', 'adresse', 'postby'].forEach(field => {
        const input = this.form.querySelector(`[name="udlejer.${field}"]`);
        if (input) {
          input.value = udlejer[field] || '';
        }
      });

      // Also update erklaering.ejer
      const ejerInput = this.form.querySelector('[name="erklaering.ejer"]');
      if (ejerInput) {
        ejerInput.value = udlejer.navn || '';
      }

      // Store the selected ID on the contract
      App.state.currentContract.udlejerId = id;

      this.saveFormData();
    }
  },

  /**
   * Load car data
   */
  loadCar(id) {
    if (!id) return;

    const bil = StorageManager.getBil(id);
    if (bil) {
      // Update form fields
      ['model', 'regnr'].forEach(field => {
        const input = this.form.querySelector(`[name="bil.${field}"]`);
        if (input) {
          input.value = bil[field] || '';
        }
      });

      // Also update erklaering.regnr
      const regnrInput = this.form.querySelector('[name="erklaering.regnr"]');
      if (regnrInput) {
        regnrInput.value = bil.regnr || '';
      }

      // Auto-fill lejepris from the car if the car has one stored
      if (bil.lejepris) {
        const lejeprisInput = this.form.querySelector('[name="pris.lejepris"]');
        if (lejeprisInput) {
          lejeprisInput.value = bil.lejepris;
        }
      }

      // Store the selected ID on the contract
      App.state.currentContract.bilId = id;

      this.saveFormData();
    }
  },

  /**
   * Update udlejer selector options
   */
  updateUdlejerSelector() {
    const select = document.getElementById('udlejer-select');
    if (!select) return;

    const udlejere = StorageManager.getUdlejere();
    const selectedId = App.state.currentContract?.udlejerId;

    select.innerHTML = '<option value="">-- Vælg udlejer --</option>';
    udlejere.forEach(u => {
      const option = document.createElement('option');
      option.value = u.id;
      option.textContent = u.navn;
      if (selectedId && selectedId === u.id) {
        option.selected = true;
      }
      select.appendChild(option);
    });
  },

  /**
   * Update car selector options
   */
  updateCarSelector() {
    const select = document.getElementById('car-select');
    if (!select) return;

    const biler = StorageManager.getBiler();
    const selectedId = App.state.currentContract?.bilId;

    select.innerHTML = '<option value="">-- Vælg bil --</option>';
    biler.forEach(b => {
      const option = document.createElement('option');
      option.value = b.id;
      option.textContent = `${b.model} (${b.regnr})`;
      if (selectedId && selectedId === b.id) {
        option.selected = true;
      }
      select.appendChild(option);
    });
  },

  /**
   * Validate form
   */
  validate() {
    // Add validation logic here if needed
    return true;
  }
};
