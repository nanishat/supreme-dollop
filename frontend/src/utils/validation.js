/**
 * Form validation utilities
 */

/**
 * Email validation regex
 */
const EMAIL_REGEX = /\S+@\S+\.\S+/;

/**
 * Issue description validation regex - checks for required ID patterns
 */
const ID_REGEX = /(EID-\d{6}|BISD-\d{6}|Lrnr-\d{9}|MCP-\d{9})/;

/**
 * Validate issue description for required ID patterns
 * @param {string} text - The issue description text to validate
 * @returns {boolean} - True if text contains a valid ID pattern
 */
export const validateIssueDescription = (text) => {
  return ID_REGEX.test(text);
};

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

  // Location hierarchy validation
  if (!formData.component) newErrors.component = 'Component is required';
  if (!formData.project) newErrors.project = 'Project is required';
  if (!formData.zonalArea) newErrors.zonalArea = 'Zonal Area is required';
  if (!formData.dmArea) newErrors.dmArea = 'DM Area is required';
  if (!formData.branchName) newErrors.branchName = 'Branch Name is required';

  // Issue info validation
  if (!formData.phase) newErrors.phase = 'Phase is required';
  if (!formData.errorType) newErrors.errorType = 'Error Type is required';
  if (!formData.issueDescription) {
    newErrors.issueDescription = 'Issue description is required';
  } else if (!validateIssueDescription(formData.issueDescription)) {
    newErrors.issueDescription = 'Issue description must contain one of: EID-######, BISD-######, Lrnr-#########, or MCP-#########';
  }

  return newErrors;
};

/**
 * Check if form has validation errors
 * @param {Object} errors - The errors object
 * @returns {boolean} - True if there are errors, false otherwise
 */
export const hasErrors = (errors) => Object.keys(errors).length > 0;
