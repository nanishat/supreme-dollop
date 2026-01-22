/**
 * SDP Data Index
 * Central export point for all data modules
 * 
 * This file consolidates all data from separate modules into a single
 * object structure for easy import and use throughout the application.
 * 
 * Structure:
 * - components: Array of top-level organizational units
 * - projects: Mapping of components to projects
 * - zonalAreasByProject: Mapping of projects to zonal areas
 * - zonalAreas: Mapping of zonal areas to DM areas
 * - dmAreas: Mapping of DM areas to branches
 * - branches: Mapping of branches to districts
 * - phases: Form phase options
 * - errorTypes: Form error type options
 */

import components from './components.js';
import projects from './projects.js';
import { zonalAreasByProject, zonalAreas } from './zonalAreas.js';
import dmAreas from './dmAreas.js';
import branches from './branches.js';
import { phases, errorTypes } from './formConfig.js';

const sdpData = {
  components,
  projects,
  zonalAreasByProject,
  zonalAreas,
  dmAreas,
  branches,
  phases,
  errorTypes,
};

export default sdpData;

// Optional: Export individual modules for specific imports
export {
  components,
  projects,
  zonalAreasByProject,
  zonalAreas,
  dmAreas,
  branches,
  phases,
  errorTypes,
};
