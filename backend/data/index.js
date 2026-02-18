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
 * - zonalArea: Mapping of projects to zonal areas
 * - projectDmAreaMapping: Mapping of projects to DM areas (for N/A zonal area cases)
 * - dmAreas: Mapping of zonal areas to DM areas
 * - branches: Mapping of DM areas to branches
 * - zonalAreaDmAreas: Mapping of DM areas to districts
 * - phases: Form phase options
 * - errorTypes: Form error type options
 */

import components from './components.js';
import projects from './projects.js';
import { zonalArea, projectDmAreaMapping } from './zonalAreas.js';
import { zonalAreaDmAreas } from './zonalAreaDmAreas.js';
import dmAreas from './dmAreas.js';
import branches from './branches.js';
import { phases, errorTypes } from './formConfig.js';

const sdpData = {
  components,
  projects,
  zonalArea,
  projectDmAreaMapping,
  zonalAreaDmAreas,
  dmAreas,
  branches,
  phases,
  errorTypes,
};

export default sdpData;
