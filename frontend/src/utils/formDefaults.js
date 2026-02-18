/**
 * Default form data structure for Error Report Form
 */
export const getInitialFormData = () => ({
  reporterEmail: '',
  reporterName: '',
  reporterPin: '',
  reporterPhone: '',
  supervisor1NamePin: '',
  supervisor2NamePin: '',
  component: '',
  project: '',
  zonalArea: '',
  dmArea: '',
  branchName: '',
  districtName: '',
  phase: '',
  errorType: '',
  issueDescription: '',
  attachment: null
});

/**
 * Get empty form data (for resets)
 */
export const getEmptyFormData = getInitialFormData;
