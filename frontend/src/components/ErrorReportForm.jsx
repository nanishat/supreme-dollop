import { useState } from 'react';
import { AlertCircle, Upload, X } from 'lucide-react';
import mockData from '../../../backend/mock-data';

export default function ErrorReportForm() {
  const [formData, setFormData] = useState({
    reporterEmail: '',
    reporterNamePin: '',
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
    
    if (!formData.reporterNamePin) newErrors.reporterNamePin = 'Reporter name & PIN is required';
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
          reporterNamePin: '',
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
      {/* Header */}
      <header className="bg-[#f71598] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold">TaroWorks Troubleshooting</h1>
          <p className="text-primary-100 mt-1 text-sm md:text-base">Submit your error reports and issues</p>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <div className="text-green-600 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">Report Submitted Successfully!</h2>
            <p className="text-green-700">Your error report has been received and will be processed shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Reporter & People Info Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#f71598]">
                Reporter & People Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="reporterEmail"
                    value={formData.reporterEmail}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f71598] focus:outline-none ${
                      errors.reporterEmail ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.reporterEmail && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.reporterEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reporter Name & PIN <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="reporterNamePin"
                    value={formData.reporterNamePin}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f71598] focus:outline-none ${
                      errors.reporterNamePin ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Name + PIN"
                  />
                  {errors.reporterNamePin && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.reporterNamePin}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="reporterPhone"
                    value={formData.reporterPhone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f71598] focus:outline-none ${
                      errors.reporterPhone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter phone number"
                  />
                  {errors.reporterPhone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.reporterPhone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    1st Supervisor Name & PIN <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="supervisor1NamePin"
                    value={formData.supervisor1NamePin}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f71598] focus:outline-none ${
                      errors.supervisor1NamePin ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Supervisor 1 Name + PIN"
                  />
                  {errors.supervisor1NamePin && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.supervisor1NamePin}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    2nd Supervisor Name & PIN <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="supervisor2NamePin"
                    value={formData.supervisor2NamePin}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f71598] focus:outline-none ${
                      errors.supervisor2NamePin ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Supervisor 2 Name + PIN"
                  />
                  {errors.supervisor2NamePin && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.supervisor2NamePin}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Location & Project Hierarchy Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-[#f71598]">
                Location & Project Hierarchy
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Component <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.component}
                    onChange={(e) => handleCascadeChange('component', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f71598] focus:outline-none ${
                      errors.component ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Component</option>
                    {mockData.components.map(comp => (
                      <option key={comp} value={comp}>{comp}</option>
                    ))}
                  </select>
                  {errors.component && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.component}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => handleCascadeChange('project', e.target.value)}
                    disabled={!formData.component}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed ${
                      errors.project ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Project</option>
                    {formData.component && mockData.projects[formData.component]?.map(proj => (
                      <option key={proj} value={proj}>{proj}</option>
                    ))}
                  </select>
                  {errors.project && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.project}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zonal Area <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.zonalArea}
                    onChange={(e) => handleCascadeChange('zonalArea', e.target.value)}
                    disabled={!formData.project}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed ${
                      errors.zonalArea ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Zonal Area</option>
                    {formData.project && mockData.zonalAreas[formData.project]?.map(zone => (
                      <option key={zone} value={zone}>{zone}</option>
                    ))}
                  </select>
                  {errors.zonalArea && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.zonalArea}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    DM Area <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.dmArea}
                    onChange={(e) => handleCascadeChange('dmArea', e.target.value)}
                    disabled={!formData.zonalArea}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed ${
                      errors.dmArea ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select DM Area</option>
                    {formData.zonalArea && mockData.dmAreas[formData.zonalArea]?.map(dm => (
                      <option key={dm} value={dm}>{dm}</option>
                    ))}
                  </select>
                  {errors.dmArea && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.dmArea}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Branch Name <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.branchName}
                    onChange={(e) => handleCascadeChange('branchName', e.target.value)}
                    disabled={!formData.dmArea}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed ${
                      errors.branchName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Branch</option>
                    {formData.dmArea && mockData.branches[formData.dmArea]?.map(branch => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                  {errors.branchName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.branchName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    District Name
                  </label>
                  <select
                    value={formData.districtName}
                    onChange={(e) => handleCascadeChange('districtName', e.target.value)}
                    disabled={!formData.branchName}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Select District (Optional)</option>
                    {formData.branchName && mockData.districts[formData.branchName]?.map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Issue Information Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-primary-500">
                Issue Information
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phase <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.phase}
                      onChange={(e) => handleInputChange(e)}
                      name="phase"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none ${
                        errors.phase ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Phase</option>
                      {mockData.phases.map(phase => (
                        <option key={phase} value={phase}>{phase}</option>
                      ))}
                    </select>
                    {errors.phase && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.phase}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Error Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.errorType}
                      onChange={(e) => handleInputChange(e)}
                      name="errorType"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none ${
                        errors.errorType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Error Type</option>
                      {mockData.errorTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.errorType && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.errorType}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issue Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="issueDescription"
                    value={formData.issueDescription}
                    onChange={handleInputChange}
                    rows="5"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none resize-none ${
                      errors.issueDescription ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Describe the issue in detail..."
                  />
                  {errors.issueDescription && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.issueDescription}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Attachment (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    {formData.attachment ? (
                      <div className="flex items-center justify-between bg-primary-50 p-3 rounded">
                        <div className="flex items-center gap-2">
                          <Upload size={20} className="text-primary-600" />
                          <span className="text-sm text-gray-700 truncate max-w-xs">
                            {formData.attachment.name}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center cursor-pointer">
                        <Upload size={32} className="text-gray-400 mb-2" />
                        <span className="text-sm text-gray-600 mb-1">Click to upload file</span>
                        <span className="text-xs text-gray-400">PNG, JPG, PDF up to 10MB</span>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          accept=".png,.jpg,.jpeg,.pdf"
                        />
                      </label>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        reporterEmail: '',
                        reporterNamePin: '',
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
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    Reset
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                  >
                    Submit Report
                  </button>
                </div>
              </div>
            </section>

          </form>
        )}
      </main>
    </div>
  );
}