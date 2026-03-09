import { AlertCircle } from 'lucide-react';
import { getFirstSupervisorsForProject, getSecondSupervisorsForProject } from '../utils/hierarchyHelpers';

export default function ReporterInfo({ formData, errors, onChange, onCascade, project }) {
  // derive supervisor lists; first supervisor cascades from second supervisor
  const firstSupervisors = project ? getFirstSupervisorsForProject(project) : [];
  const secondSupervisors = project ? getSecondSupervisorsForProject(project) : [];

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-primary-500">
        Reporter & People Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reporter Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="reporterEmail"
            value={formData.reporterEmail}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none ${
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

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="reporterPhone"
            value={formData.reporterPhone}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none ${
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

        {/* Reporter Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reporter Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="reporterName"
            value={formData.reporterName}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none ${
              errors.reporterName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Name"
          />
          {errors.reporterName && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.reporterName}
            </p>
          )}
        </div>

        {/* Reporter PIN */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reporter PIN <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="reporterPin"
            value={formData.reporterPin}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none ${
              errors.reporterPin ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="PIN"
          />
          {errors.reporterPin && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.reporterPin}
            </p>
          )}
        </div>

        {/* Supervisor 1 Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            1st Supervisor Name <span className="text-red-500">*</span>
          </label>
          <select
            name="supervisor1Name"
            value={formData.supervisor1Name}
            onChange={onChange}
            disabled={!project}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none focus:z-50 disabled:bg-gray-100 disabled:cursor-not-allowed ${
              errors.supervisor1Name ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {formData.supervisor1Name === '' && <option value="">Select 1st Supervisor</option>}
            {firstSupervisors.map(supervisor => (
              <option key={supervisor.name} value={supervisor.name}>
                {supervisor.name}
              </option>
            ))}
          </select>
          {errors.supervisor1Name && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.supervisor1Name}
            </p>
          )}
        </div>

        {/* Supervisor 2 Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            2nd Supervisor Name <span className="text-red-500">*</span>
          </label>
          <select
            name="supervisor2Name"
            value={formData.supervisor2Name}
            onChange={e => {
              onChange(e);
              if (onCascade) onCascade('supervisor2Name', e.target.value);
            }}
            disabled={!project}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none focus:z-50 disabled:bg-gray-100 disabled:cursor-not-allowed ${
              errors.supervisor2Name ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {formData.supervisor2Name === '' && <option value="">Select 2nd Supervisor</option>}
            {secondSupervisors.map(supervisor => (
              <option key={supervisor.name} value={supervisor.name}>
                {supervisor.name}
              </option>
            ))}
          </select>
          {errors.supervisor2Name && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.supervisor2Name}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
