import { AlertCircle, Upload, X } from 'lucide-react';
import mockData from '../../../backend/mock-data';

export default function IssueInformation({
  formData,
  errors,
  onChange,
  onFileChange,
  onRemoveFile,
  onReset,
  onSubmit
}) {
  return (
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
              onChange={onChange}
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
              onChange={onChange}
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
            onChange={onChange}
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
                  onClick={onRemoveFile}
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
                  onChange={onFileChange}
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
            onClick={onReset}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-700"
          >
            Submit Report
          </button>
        </div>
      </div>
    </section>
  );
}
