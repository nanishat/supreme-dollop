/**
 * Form input and event handlers for Error Report Form
 */

/**
 * Handle regular input field changes
 * @param {Object} e - The event object
 * @param {Function} setFormData - State setter for form data
 * @param {Function} setErrors - State setter for errors
 */
export const handleInputChange = (e, setFormData, setErrors) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
  if (setErrors) {
    setErrors(prev => {
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  }
};

/**
 * Handle cascading field changes (resets dependent fields)
 * @param {string} field - The field name that changed
 * @param {string} value - The new value
 * @param {Function} setFormData - State setter for form data
 * @param {Function} setErrors - State setter for errors
 */
export const handleCascadeChange = (field, value, setFormData, setErrors) => {
  const updates = { [field]: value };

  // Reset dependent fields based on which field changed
  if (field === 'component') {
    updates.project = '';
    updates.zonalArea = '';
    updates.dmArea = '';
    updates.branchName = '';
    updates.districtName = '';
  } else if (field === 'project') {
    updates.zonalArea = '';
    updates.dmArea = '';
    updates.branchName = '';
    updates.districtName = '';
  } else if (field === 'zonalArea') {
    updates.dmArea = '';
    updates.branchName = '';
    updates.districtName = '';
  } else if (field === 'dmArea') {
    updates.branchName = '';
    updates.districtName = '';
  } else if (field === 'branchName') {
    updates.districtName = '';
  }

  setFormData(prev => ({ ...prev, ...updates }));

  if (setErrors) {
    setErrors(prev => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  }
};

/**
 * Handle file input change
 * @param {Object} e - The event object
 * @param {Function} setFormData - State setter for form data
 */
export const handleFileChange = (e, setFormData) => {
  const file = e.target.files[0];
  if (file) {
    setFormData(prev => ({ ...prev, attachment: file }));
  }
};

/**
 * Remove attached file from form
 * @param {Function} setFormData - State setter for form data
 */
export const removeFile = (setFormData) => {
  setFormData(prev => ({ ...prev, attachment: null }));
};
