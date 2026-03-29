/**
 * Car Manager Module
 * Manages car library
 */

const CarManager = {
  listContainer: null,
  editingId: null,

  /**
   * Initialize car manager
   */
  init() {
    this.listContainer = document.getElementById('car-list');
    
    if (!this.listContainer) {
      console.error('Car list container not found');
      return;
    }

    this.setupEventListeners();
  },

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Add new car button
    const addBtn = document.getElementById('add-car-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => this.showForm());
    }

    // Save car button
    const saveBtn = document.getElementById('save-car-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => this.save());
    }

    // Cancel button
    const cancelBtn = document.getElementById('cancel-car-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => this.hideForm());
    }
  },

  /**
   * Load and display car list
   */
  loadList() {
    const biler = StorageManager.getBiler();
    
    this.listContainer.innerHTML = '';
    
    if (biler.length === 0) {
      this.listContainer.innerHTML = `<p class="empty-message">${I18nManager.t('dynamic.empty_biler')}</p>`;
      return;
    }
    
    biler.forEach(bil => {
      const item = document.createElement('div');
      item.className = 'list-item';

      const content = document.createElement('div');
      content.className = 'list-item-content';

      const strong = document.createElement('strong');
      strong.textContent = bil.model;
      content.appendChild(strong);

      const sub = document.createElement('div');
      sub.className = 'text-muted';
      sub.textContent = I18nManager.t('dynamic.car_regnr_prefix') + bil.regnr;
      content.appendChild(sub);

      const actions = document.createElement('div');
      actions.className = 'list-item-actions';

      const editBtn = document.createElement('button');
      editBtn.className = 'btn-sm';
      editBtn.textContent = I18nManager.t('dynamic.btn_edit');
      editBtn.addEventListener('click', () => CarManager.edit(bil.id));
      actions.appendChild(editBtn);

      const delBtn = document.createElement('button');
      delBtn.className = 'btn-sm btn-danger';
      delBtn.textContent = I18nManager.t('dynamic.btn_delete');
      delBtn.addEventListener('click', () => CarManager.delete(bil.id));
      actions.appendChild(delBtn);

      item.appendChild(content);
      item.appendChild(actions);
      this.listContainer.appendChild(item);
    });
  },

  /**
   * Show add/edit form
   */
  showForm(data = null) {
    const form = document.getElementById('car-form');
    if (!form) return;
    
    form.classList.add('active');
    
    // Reset or populate form
    document.getElementById('settings-car-model').value = data?.model || '';
    document.getElementById('settings-car-regnr').value = data?.regnr || '';
    document.getElementById('settings-car-lejepris').value = data?.lejepris || '';
    
    this.editingId = data?.id || null;
  },

  /**
   * Hide form
   */
  hideForm() {
    const form = document.getElementById('car-form');
    if (form) {
      form.classList.remove('active');
    }
    this.editingId = null;
  },

  /**
   * Save car
   */
  save() {
    const model = document.getElementById('settings-car-model').value.trim();
    const regnr = document.getElementById('settings-car-regnr').value.trim();
    const lejepris = document.getElementById('settings-car-lejepris').value.trim();

    if (!model || !regnr) {
      alert(I18nManager.t('dialogs.validation_bil'));
      return;
    }

    const data = { model, regnr, lejepris };
    
    if (this.editingId) {
      StorageManager.updateBil(this.editingId, data);
    } else {
      StorageManager.addBil(data);
    }
    
    this.hideForm();
    this.loadList();
    ContractForm.updateCarSelector();
    SettingsManager.showMessage(I18nManager.t('toasts.bil_gemt'));
  },

  /**
   * Edit car
   */
  edit(id) {
    const bil = StorageManager.getBil(id);
    if (bil) {
      this.showForm(bil);
    }
  },

  /**
   * Delete car
   */
  delete(id) {
    if (confirm(I18nManager.t('dialogs.confirm_delete_bil'))) {
      StorageManager.deleteBil(id);
      this.loadList();
      ContractForm.updateCarSelector();
      SettingsManager.showMessage(I18nManager.t('toasts.bil_slettet'));
    }
  }
};
