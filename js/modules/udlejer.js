/**
 * Udlejer Manager Module
 * Manages landlord profiles
 */

const UdlejerManager = {
  listContainer: null,
  editingId: null,

  /**
   * Initialize udlejer manager
   */
  init() {
    this.listContainer = document.getElementById('udlejer-list');
    
    if (!this.listContainer) {
      console.error('Udlejer list container not found');
      return;
    }

    this.setupEventListeners();
  },

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Add new udlejer button
    const addBtn = document.getElementById('add-udlejer-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => this.showForm());
    }

    // Save udlejer button
    const saveBtn = document.getElementById('save-udlejer-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => this.save());
    }

    // Cancel button
    const cancelBtn = document.getElementById('cancel-udlejer-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => this.hideForm());
    }
  },

  /**
   * Load and display udlejer list
   */
  loadList() {
    const udlejere = StorageManager.getUdlejere();
    const settings = StorageManager.getSettings();
    
    this.listContainer.innerHTML = '';
    
    if (udlejere.length === 0) {
      this.listContainer.innerHTML = '<p class="empty-message">Ingen udlejere endnu. Klik "Tilføj udlejer" for at oprette.</p>';
      return;
    }
    
    udlejere.forEach(udlejer => {
      const item = document.createElement('div');
      item.className = 'list-item';

      const isDefault = settings.defaultUdlejer === udlejer.id;

      const content = document.createElement('div');
      content.className = 'list-item-content';

      const strong = document.createElement('strong');
      strong.textContent = udlejer.navn;
      content.appendChild(strong);

      if (isDefault) {
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = 'Standard';
        content.appendChild(badge);
      }

      const sub = document.createElement('div');
      sub.className = 'text-muted';
      sub.textContent = `${udlejer.adresse}, ${udlejer.postby}`;
      content.appendChild(sub);

      const actions = document.createElement('div');
      actions.className = 'list-item-actions';

      if (!isDefault) {
        const defaultBtn = document.createElement('button');
        defaultBtn.className = 'btn-sm';
        defaultBtn.textContent = 'Sæt som standard';
        defaultBtn.addEventListener('click', () => UdlejerManager.setDefault(udlejer.id));
        actions.appendChild(defaultBtn);
      }

      const editBtn = document.createElement('button');
      editBtn.className = 'btn-sm';
      editBtn.textContent = 'Rediger';
      editBtn.addEventListener('click', () => UdlejerManager.edit(udlejer.id));
      actions.appendChild(editBtn);

      const delBtn = document.createElement('button');
      delBtn.className = 'btn-sm btn-danger';
      delBtn.textContent = 'Slet';
      delBtn.addEventListener('click', () => UdlejerManager.delete(udlejer.id));
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
    const form = document.getElementById('udlejer-form');
    if (!form) return;
    
    form.classList.add('active');
    
    // Reset or populate form
    document.getElementById('settings-udlejer-navn').value = data?.navn || '';
    document.getElementById('settings-udlejer-adresse').value = data?.adresse || '';
    document.getElementById('settings-udlejer-postby').value = data?.postby || '';
    
    this.editingId = data?.id || null;
  },

  /**
   * Hide form
   */
  hideForm() {
    const form = document.getElementById('udlejer-form');
    if (form) {
      form.classList.remove('active');
    }
    this.editingId = null;
  },

  /**
   * Save udlejer
   */
  save() {
    const navn = document.getElementById('settings-udlejer-navn').value.trim();
    const adresse = document.getElementById('settings-udlejer-adresse').value.trim();
    const postby = document.getElementById('settings-udlejer-postby').value.trim();
    
    if (!navn) {
      alert('Navn er påkrævet');
      return;
    }
    
    const data = { navn, adresse, postby };
    
    if (this.editingId) {
      StorageManager.updateUdlejer(this.editingId, data);
    } else {
      const newUdlejer = StorageManager.addUdlejer(data);
      
      // Set as default if it's the first one
      const udlejere = StorageManager.getUdlejere();
      if (udlejere.length === 1) {
        StorageManager.setDefaultUdlejer(newUdlejer.id);
      }
    }
    
    this.hideForm();
    this.loadList();
    ContractForm.updateUdlejerSelector();
    SettingsManager.showMessage('Udlejer gemt!');
  },

  /**
   * Edit udlejer
   */
  edit(id) {
    const udlejer = StorageManager.getUdlejer(id);
    if (udlejer) {
      this.showForm(udlejer);
    }
  },

  /**
   * Delete udlejer
   */
  delete(id) {
    if (confirm('Er du sikker på at du vil slette denne udlejer?')) {
      StorageManager.deleteUdlejer(id);
      this.loadList();
      ContractForm.updateUdlejerSelector();
      SettingsManager.showMessage('Udlejer slettet');
    }
  },

  /**
   * Set default udlejer
   */
  setDefault(id) {
    StorageManager.setDefaultUdlejer(id);
    this.loadList();
    SettingsManager.showMessage('Standard udlejer opdateret');
  }
};
