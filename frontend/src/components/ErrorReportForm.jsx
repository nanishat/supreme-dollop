import { useState } from 'react';
import FormHeader from './FormHeader';
import ReporterInfo from './ReporterInfo';
import LocationHierarchy from './LocationHierarchy';
import IssueInformation from './IssueInformation';
import SuccessMessage from './SuccessMessage';
import Footer from './Footer';
import { getInitialFormData } from '../utils/formDefaults';
import { handleInputChange, handleCascadeChange, handleFileChange, removeFile } from '../utils/formHandlers';
import { validateForm } from '../utils/validation';
import { handleFormSubmission } from '../utils/api';

export default function ErrorReportForm() {
  const [formData, setFormData] = useState(getInitialFormData());
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => handleInputChange(e, setFormData, setErrors);

  const handleCascade = (field, value) => handleCascadeChange(field, value, setFormData, setErrors);

  const handleFile = (e) => handleFileChange(e, setFormData);

  const removeAttachment = () => removeFile(setFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const success = await handleFormSubmission(formData, setErrors);
    
    if (success) {
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData(getInitialFormData());
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleReset = () => {
    setFormData(getInitialFormData());
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <FormHeader />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
        {submitted ? (
          <SuccessMessage />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3 text-sm text-red-700">
                {errors.submit}
              </div>
            )}
            <LocationHierarchy formData={formData} errors={errors} onCascadeChange={handleCascade} />

            <ReporterInfo formData={formData} errors={errors} onChange={handleChange} project={formData.project} />

            <IssueInformation
              formData={formData}
              errors={errors}
              onChange={handleChange}
              onFileChange={handleFile}
              onRemoveFile={removeAttachment}
              onReset={handleReset}
            />
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}