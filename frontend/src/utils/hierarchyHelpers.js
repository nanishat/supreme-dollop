/**
 * Helper functions for location hierarchy cascading data
 */
import sdpData from '../../../backend/data';

/**
 * Get projects available for the selected component
 * @param {string} component - The selected component
 * @returns {Array} - List of projects
 */
export const getProjectsForComponent = (component) => {
  if (!component) return [];
  return sdpData.projects[component] || [];
};

/**
 * Get zonal areas available for the selected project
 * @param {string} project - The selected project
 * @returns {Array} - List of zonal areas
 */
export const getZonalAreasForProject = (project) => {
  if (!project) return [];
  return sdpData.zonalArea[project] || [];
};

/**
 * Get DM areas for the selected zonal area
 * Handles special case when zonal area is 'N/A'
 * @param {string} project - The selected project
 * @param {string} zonalArea - The selected zonal area
 * @returns {Array} - List of DM areas
 */
export const getDMAreasForZonalArea = (project, zonalArea) => {
  if (!zonalArea || !project) return [];

  // If zonal area is N/A, get DM areas from project mapping
  if (zonalArea === 'N/A') {
    return sdpData.projectDmAreaMapping[project] || [];
  }

  // Otherwise, get DM areas from nested structure: project -> zonal -> dmAreas
  const projectMap = sdpData.dmAreas[project] || {};
  return projectMap[zonalArea] || [];
};

/**
 * Check if the selected zonal area is 'N/A'
 * @param {string} zonalArea - The selected zonal area
 * @returns {boolean} - True if zonal area is N/A
 */
export const isZonalAreaNA = (zonalArea) => {
  return zonalArea === 'N/A';
};

/**
 * Get branches available for the selected DM area
 * @param {string} project - The selected project
 * @param {string} dmArea - The selected DM area
 * @returns {Array} - List of branches
 */
export const getBranchesForDMArea = (project, dmArea) => {
  if (!dmArea || !project) return [];
  // Access nested branches: project -> dmArea -> branches
  const projectBranches = sdpData.branches[project] || {};
  return projectBranches[dmArea] || [];
};

/**
 * Get DM areas for a specific project (used for non-hierarchical access)
 * @param {string} project - The selected project
 * @returns {Array} - All DM areas for the project
 */
export const getDMAreasForProject = (project) => {
  if (!project) return [];
  return sdpData.projectDmAreaMapping[project] || [];
};

/**
 * Get supervisors available for the selected project
 * @param {string} project - The selected project
 * @returns {Array} - List of supervisors with name only
 */
export const getSupervisorsForProject = (project) => {
  if (!project) return [];
  return sdpData.supervisors[project] || [];
};

/**
 * Get first supervisors available for the selected project
 * @param {string} project - The selected project
 * @param {string} dmArea - The selected DM area (optional, for nested structures)
 * @param {string} branchName - The selected branch name (optional, for nested branch structures)
 * @returns {Array} - List of first supervisors with name only
 */
export const getFirstSupervisorsForProject = (project, dmArea = '', branchName = '') => {
  if (!project) return [];
  
  const projectData = sdpData.firstSupervisors[project];
  if (!projectData) return [];
  
  // If projectData is an array, return it directly
  if (Array.isArray(projectData)) {
    return projectData;
  }
  
  // If projectData is an object (nested by DM area)
  if (dmArea && projectData[dmArea]) {
    const dmAreaData = projectData[dmArea];
    
    // If dmAreaData is an array, return it directly
    if (Array.isArray(dmAreaData)) {
      return dmAreaData;
    }
    
    // If dmAreaData is an object with branches and branchName is provided
    if (branchName && dmAreaData[branchName]) {
      const supervisors = dmAreaData[branchName];
      return Array.isArray(supervisors) ? supervisors : [];
    }
  }
  
  return [];
};

/**
 * Get second supervisors available for the selected project
 * @param {string} project - The selected project
 * @param {string} dmArea - The selected DM area (optional, for nested structures)
 * @param {string} branchName - The selected branch name (optional, for nested branch structures)
 * @returns {Array} - List of second supervisors with name only
 */
export const getSecondSupervisorsForProject = (project, dmArea = '', branchName = '') => {
  if (!project) return [];
  
  const projectData = sdpData.secondSupervisors[project];
  if (!projectData) return [];
  
  // If projectData is an array, return it directly
  if (Array.isArray(projectData)) {
    return projectData;
  }
  
  // If projectData is an object (nested by DM area)
  if (dmArea && projectData[dmArea]) {
    const dmAreaData = projectData[dmArea];
    
    // If dmAreaData is an array, return it directly
    if (Array.isArray(dmAreaData)) {
      return dmAreaData;
    }
    
    // If dmAreaData is an object with branches and branchName is provided
    if (branchName && dmAreaData[branchName]) {
      const supervisors = dmAreaData[branchName];
      return Array.isArray(supervisors) ? supervisors : [];
    }
  }
  
  return [];
};

/**
 * Get all supervisors from all projects
 * @returns {Array} - List of all supervisors with name and PIN
 */
export const getAllSupervisors = () => {
  const allSupervisors = [];
  const supervisorSet = new Set(); // To avoid duplicates by name

  Object.values(sdpData.firstSupervisors).forEach(projectSupervisors => {
    projectSupervisors.forEach(supervisor => {
      if (!supervisorSet.has(supervisor.name)) {
        supervisorSet.add(supervisor.name);
        allSupervisors.push(supervisor);
      }
    });
  });

  Object.values(sdpData.secondSupervisors).forEach(projectSupervisors => {
    projectSupervisors.forEach(supervisor => {
      if (!supervisorSet.has(supervisor.name)) {
        supervisorSet.add(supervisor.name);
        allSupervisors.push(supervisor);
      }
    });
  });

  return allSupervisors.sort((a, b) => a.name.localeCompare(b.name));
};
