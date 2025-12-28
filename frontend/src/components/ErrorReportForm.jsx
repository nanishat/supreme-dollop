import { useState } from 'react';
import FormHeader from './FormHeader';
import ReporterInfo from './ReporterInfo';
import LocationHierarchy from './LocationHierarchy';
import IssueInformation from './IssueInformation';
import SuccessMessage from './SuccessMessage';

export default function ErrorReportForm() {
  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCascadeChange = (field, value) => {
    const updates = { [field]: value };
    
    // Reset dependent fields
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
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, attachment: file }));
    }
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, attachment: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.reporterEmail) newErrors.reporterEmail = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.reporterEmail)) newErrors.reporterEmail = 'Invalid email format';
    
    if (!formData.reporterName) newErrors.reporterName = 'Reporter name is required';
    if (!formData.reporterPin) newErrors.reporterPin = 'Reporter PIN is required';
    if (!formData.reporterPhone) newErrors.reporterPhone = 'Phone number is required';
    if (!formData.supervisor1NamePin) newErrors.supervisor1NamePin = '1st supervisor is required';
    if (!formData.supervisor2NamePin) newErrors.supervisor2NamePin = '2nd supervisor is required';
    if (!formData.component) newErrors.component = 'Component is required';
    if (!formData.project) newErrors.project = 'Project is required';
    if (!formData.zonalArea) newErrors.zonalArea = 'Zonal Area is required';
    if (!formData.dmArea) newErrors.dmArea = 'DM Area is required';
    if (!formData.branchName) newErrors.branchName = 'Branch Name is required';
    if (!formData.phase) newErrors.phase = 'Phase is required';
    if (!formData.errorType) newErrors.errorType = 'Error Type is required';
    if (!formData.issueDescription) newErrors.issueDescription = 'Issue description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
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
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <FormHeader />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
        {submitted ? (
          <SuccessMessage />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <ReporterInfo formData={formData} errors={errors} onChange={handleInputChange} />

            <LocationHierarchy formData={formData} errors={errors} onCascadeChange={handleCascadeChange} />

            <IssueInformation
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
              onFileChange={handleFileChange}
              onRemoveFile={removeFile}
              onReset={() => {
                setFormData({
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
                setErrors({});
              }}
              onSubmit={handleSubmit}
            />
          </form>
        )}
      </main>
    </div>
  );
}