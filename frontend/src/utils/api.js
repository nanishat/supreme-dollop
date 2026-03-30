/**
 * API utilities for form submission
 */

/**
 * Submit form data to the backend
 * @param {Object} formData - The form data to submit
 * @returns {Promise<Object>} - Response from the server
 * @throws {Error} - If the submission fails
 */
export const submitForm = async (formData) => {
  try {
    const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${apiBase}/api/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(payload.message || 'Submission failed');
    }

    return await response.json();
  } catch (err) {
    console.error('Submission error:', err);
    throw err;
  }
};

/**
 * Handle form submission with error handling
 * @param {Object} formData - The form data to submit
 * @param {Function} setErrors - State setter for errors
 * @returns {Promise<boolean>} - True if submission was successful, false otherwise
 */
export const handleFormSubmission = async (formData, setErrors) => {
  try {
    await submitForm(formData);
    setErrors({});
    return true;
  } catch (err) {
    setErrors(prev => ({
      ...prev,
      submit: err.message || 'Network error'
    }));
    return false;
  }
};
