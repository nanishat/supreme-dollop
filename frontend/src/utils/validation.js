/**
 * Form validation utilities
 */

/**
 * Email validation regex
 */
const EMAIL_REGEX = /\S+@\S+\.\S+/;

/**
 * Validate form data and return errors object
 * @param {Object} formData - The form data to validate
 * @returns {Object} - Object with field names as keys and error messages as values
 */
export const validateForm = (formData) => {
  const newErrors = {};

  // Reporter Email validation
  if (!formData.reporterEmail) {
    newErrors.reporterEmail = 'Email is required';
  } else if (!EMAIL_REGEX.test(formData.reporterEmail)) {
    newErrors.reporterEmail = 'Invalid email format';
  }

  // Reporter Info validation
  if (!formData.reporterName) newErrors.reporterName = 'Reporter name is required';
  if (!formData.reporterPin) newErrors.reporterPin = 'Reporter PIN is required';
  if (!formData.reporterPhone) newErrors.reporterPhone = 'Phone number is required';

  // Supervisor validation
  if (!formData.supervisor1Name) newErrors.supervisor1Name = '1st supervisor is required';
  if (!formData.supervisor2Name) newErrors.supervisor2Name = '2nd supervisor is required';

  // Supervisors must be unique
  if (
    formData.supervisor1Name &&
    formData.supervisor2Name &&
    formData.supervisor1Name === formData.supervisor2Name
  ) {
    const message = 'Supervisor names must be different';
    newErrors.supervisor1Name = message;
    newErrors.supervisor2Name = message;
  }

  // Location hierarchy validation
  if (!formData.component) newErrors.component = 'Component is required';
  if (!formData.project) newErrors.project = 'Project is required';
  if (!formData.zonalArea) newErrors.zonalArea = 'Zonal Area is required';
  if (!formData.dmArea) newErrors.dmArea = 'DM Area is required';
  if (!formData.branchName) newErrors.branchName = 'Branch Name is required';

  // Issue info validation
  if (!formData.phase) newErrors.phase = 'Phase is required';
  if (!formData.errorType) newErrors.errorType = 'Error Type is required';
  if (!formData.issueDescription) newErrors.issueDescription = 'Issue description is required';

  return newErrors;
};

/**
 * Check if form has validation errors
 * @param {Object} errors - The errors object
 * @returns {boolean} - True if there are errors, false otherwise
 */
export const hasErrors = (errors) => Object.keys(errors).length > 0;
