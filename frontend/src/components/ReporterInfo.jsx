import { AlertCircle } from 'lucide-react';

export default function ReporterInfo({ formData, errors, onChange }) {
  return (
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
  );
}
