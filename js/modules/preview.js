/**
 * Template Preview Module
 * Handles real-time synchronization between form and template preview
 */

const TemplatePreview = {
  previewContainer: null,

  /**
   * Initialize preview module
   */
  init() {
    this.previewContainer = document.getElementById('template-preview');
    
    if (!this.previewContainer) {
      console.error('Template preview container not found');
      return;
    }

    // Listen for direct edits in contenteditable fields
    this.previewContainer.addEventListener('input', (e) => {
      if (e.target.matches('[data-field]') && e.target.isContentEditable) {
        this.handleDirectEdit(e.target);
      }
    });
  },

  /**
   * Update template with contract data
   */
  updateTemplate(data) {
    if (!this.previewContainer) return;

    // Update all fields with data-field attributes
    this.previewContainer.querySelectorAll('[data-field]').forEach(el => {
      const path = el.getAttribute('data-field').split('.');
      let value = data;
      
      for (const key of path) {
        value = value && value[key] != null ? value[key] : '';
      }
      
      const text = (value ?? '').toString();

      // Update contenteditable field, but skip if user is currently editing it
      if (el.isContentEditable) {
        if (document.activeElement === el) return;
        el.textContent = text;
      }

      // Update or create mirror element for print
      let mirror = el.nextElementSibling;
      if (!mirror || !mirror.classList.contains('field-value')) {
        mirror = document.createElement('span');
        mirror.className = 'field-value';
        el.after(mirror);
      }
      mirror.textContent = text;
    });
  },

  /**
   * Handle direct edit in contenteditable field
   */
  handleDirectEdit(element) {
    const fieldPath = element.getAttribute('data-field');
    const value = element.textContent;

    // Update mirror for print
    let mirror = element.nextElementSibling;
    if (!mirror || !mirror.classList.contains('field-value')) {
      mirror = document.createElement('span');
      mirror.className = 'field-value';
      element.after(mirror);
    }
    mirror.textContent = value;

    // Sync back to form
    ContractForm.updateFieldFromPreview(fieldPath, value);
  },

  /**
   * Get current data from template
   */
  getCurrentData() {
    const data = {};
    
    this.previewContainer.querySelectorAll('[data-field]').forEach(el => {
      const path = el.getAttribute('data-field').split('.');
      const value = el.textContent;
      
      // Build nested object
      let current = data;
      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) current[path[i]] = {};
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
    });
    
    return data;
  }
};
