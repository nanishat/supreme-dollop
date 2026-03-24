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
 * - phases: Form phase options
 * - errorCategories: Form error categories with cascading error types
 */

import components from './components.js';
import projects from './projects.js';
import { zonalArea, projectDmAreaMapping } from './zonalAreas.js';
import dmAreas from './dmAreas.js';
import branches from './branches.js';
import firstSupervisors from './firstSupervisors.js';
import secondSupervisors from './secondSupervisors.js';
import { phases, errorCategories } from './formConfig.js';

const sdpData = {
  components,
  projects,
  zonalArea,
  projectDmAreaMapping,
  dmAreas,
  branches,
  firstSupervisors,
  secondSupervisors,
  phases,
  errorCategories,
};

export default sdpData;
