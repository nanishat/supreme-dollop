/**
 * API utilities for form submission and file upload (Hybrid OAuth + Service Account)
 * 
 * - File uploads use OAuth 2.0 refresh token (backend handles auth silently)
 * - Form submission uses Service Account (already set up)
 * - No user authentication prompts during submission
 */

/**
 * Upload file to Google Drive using OAuth 2.0 (backend)
 * @param {File} file - The file to upload
 * @returns {Promise<Object>} - Upload response with fileId and webViewLink
 * @throws {Error} - If the upload fails
 */
export const uploadFile = async (file) => {
  try {
    if (!file) {
      return { success: true, skipped: true, message: "No file to upload" };
    }

    // Convert file to base64
    const fileBase64 = await fileToBase64(file);

    const response = await fetch(`/api/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fileName: file.name,
        fileBase64: fileBase64,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Upload failed');
    }

    return await response.json();
  } catch (err) {
    console.error('Upload error:', err);
    throw err;
  }
};

/**
 * Convert File object to base64 string
 * @param {File} file - File object
 * @returns {Promise<string>} - Base64 encoded string
 */
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      // Extract base64 part (after "data:...;base64,")
      const base64 = reader.result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Submit form data to the backend (Service Account for Sheets)
 * @param {Object} formData - The form data to submit
 * @returns {Promise<Object>} - Response from the server
 * @throws {Error} - If the submission fails
 */
export const submitForm = async (formData) => {
  const baseUrl = import.meta.env.VITE_API_URL || 'localhost:3000';
  try {
    const response = await fetch(`${baseUrl}/api/submit`, {
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
 * Handle form submission with file upload (OAuth for Drive + Service Account for Sheets)
 * - Upload file to Google Drive using OAuth 2.0 refresh token (backend handles auth)
 * - Submit form with file link to Google Sheets using Service Account
 * 
 * @param {Object} formData - The form data to submit
 * @param {File} file - Optional file to upload
 * @param {Function} setErrors - State setter for errors
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const handleFormSubmissionWithFile = async (formData, file, setErrors) => {
  try {
    // Step 1: Upload file to Google Drive (if exists)
    // OAuth 2.0 authentication is handled silently by the backend
    let fileLink = null;
    if (file) {
      console.log('Uploading file to Google Drive (OAuth 2.0)...');
      const uploadResult = await uploadFile(file);
      if (!uploadResult.success && !uploadResult.skipped) {
        throw new Error(uploadResult.message || 'File upload failed');
      }
      fileLink = uploadResult.webViewLink;
      console.log('File uploaded successfully:', fileLink);
    }

    // Step 2: Prepare form data with file link
    const submitData = {
      ...formData,
      attachment: fileLink || null,
    };

    // Step 3: Submit form to Google Sheets (Service Account)
    console.log('Submitting form to Google Sheets (Service Account)...');
    const submitResult = await submitForm(submitData);

    if (!submitResult.success) {
      throw new Error('Form submission failed');
    }

    setErrors({});
    return {
      success: true,
      message: 'Form and file submitted successfully',
    };
  } catch (err) {
    const errorMessage = err.message || 'Submission failed';
    setErrors(prev => ({
      ...prev,
      submit: errorMessage
    }));
    console.error('Form submission error:', errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
};

/**
 * Handle form submission with error handling (without file upload)
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