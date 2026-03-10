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
  if (field === 'supervisor2Name') {
    // supervisor2 doesn't cascade anymore; just update the value
    setFormData(prev => ({ ...prev, supervisor2Name: value }));
  } else {
    const updates = { [field]: value };

    // Reset dependent fields based on which field changed
    if (field === 'component') {
      updates.project = '';
      updates.supervisor1Name = '';
      updates.supervisor2Name = '';
      updates.zonalArea = '';
      updates.dmArea = '';
      updates.branchName = '';
    } else if (field === 'project') {
      updates.supervisor1Name = '';
      updates.supervisor2Name = '';
      updates.zonalArea = '';
      updates.dmArea = '';
      updates.branchName = '';
    } else if (field === 'zonalArea') {
      updates.dmArea = '';
      updates.branchName = '';
      updates.supervisor1Name = '';
      updates.supervisor2Name = '';
    } else if (field === 'dmArea') {
      updates.branchName = '';
      updates.supervisor1Name = '';
      updates.supervisor2Name = '';
    } else if (field === 'branchName') {
      // districtName removed from form
    }

    setFormData(prev => ({ ...prev, ...updates }));
  }

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
