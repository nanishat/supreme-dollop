/**
 * Default form data structure for Error Report Form
 */
export const getInitialFormData = () => ({
  reporterEmail: '',
  reporterName: '',
  reporterPin: '',
  reporterPhone: '',
  supervisor1Name: '',
  supervisor2Name: '',
  component: '',
  project: '',
  zonalArea: '',
  dmArea: '',
  branchName: '',
  phase: '',
  errorType: '',
  issueDescription: '',
  attachment: null
});

/**
 * Get empty form data (for resets)
 */
export const getEmptyFormData = getInitialFormData;
