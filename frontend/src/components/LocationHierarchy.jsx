import { AlertCircle } from 'lucide-react';
import sdpData from '../../../backend/data';

export default function LocationHierarchy({ formData, errors, onCascadeChange }) {
  // Helper function to get projects for selected component
  const getProjectsForComponent = () => {
    return formData.component ? (sdpData.projects[formData.component] || []) : [];
  };

  // Helper function to get zonal areas for selected project
  const getZonalAreasForProject = () => {
    return formData.project ? (sdpData.zonalArea[formData.project] || []) : [];
  };

  // Helper function to get DM areas for selected zonal area or project (when N/A)
  const getDMAreasForZonalArea = () => {
    if (!formData.zonalArea) return [];
    
    // If zonal area is N/A, get DM areas from project mapping
    if (formData.zonalArea === 'N/A') {
      return formData.project ? (sdpData.projectDmAreaMapping[formData.project] || []) : [];
    }
    
    // Otherwise, get DM areas from zonal area mapping
    return sdpData.zonalAreaDmAreas[formData.zonalArea] || [];
  };

  // Check if zonal area is N/A
  const isZonalAreaNA = formData.zonalArea === 'N/A';

  // Helper function to get branches for selected DM area
  const getBranchesForDMArea = () => {
    return formData.dmArea ? (sdpData.dmAreas[formData.dmArea] || []) : [];
  };

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-primary-500">
        Location & Project Hierarchy
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Component <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.component}
            onChange={(e) => onCascadeChange('component', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none focus:z-50 ${
              errors.component ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {formData.component === '' && <option value="">Select Component</option>}
            {sdpData.components.map(comp => (
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
            onChange={(e) => onCascadeChange('project', e.target.value)}
            disabled={!formData.component}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none focus:z-50 disabled:bg-gray-100 disabled:cursor-not-allowed ${
              errors.project ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {formData.project === '' && <option value="">Select Project</option>}
            {getProjectsForComponent().map(proj => (
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
            onChange={(e) => onCascadeChange('zonalArea', e.target.value)}
            disabled={!formData.project}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none focus:z-50 disabled:bg-gray-100 disabled:cursor-not-allowed ${
              errors.zonalArea ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {formData.zonalArea === '' && <option value="">Select Zonal Area</option>}
            {getZonalAreasForProject().map(zone => (
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
            onChange={(e) => onCascadeChange('dmArea', e.target.value)}
            disabled={!formData.zonalArea}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none focus:z-50 disabled:bg-gray-100 disabled:cursor-not-allowed ${
              errors.dmArea ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {formData.dmArea === '' && <option value="">Select DM Area</option>}
            {getDMAreasForZonalArea().map(dm => (
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
            Branch Name
          </label>
          <select
            value={formData.branchName}
            onChange={(e) => onCascadeChange('branchName', e.target.value)}
            disabled={!formData.dmArea}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none focus:z-50 disabled:bg-gray-100 disabled:cursor-not-allowed border-gray-300"
          >
            {formData.branchName === '' && <option value="">Select Branch (Optional)</option>}
            {getBranchesForDMArea().map(branch => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
        </div>

        <div className={!isZonalAreaNA ? 'hidden' : ''}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            District Name
          </label>
          <input
            type="text"
            value={formData.districtName}
            onChange={(e) => onCascadeChange('districtName', e.target.value)}
            placeholder="Enter District Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
}
