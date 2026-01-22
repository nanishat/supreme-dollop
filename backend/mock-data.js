/**
 * SDP Mock Data - Backward Compatibility Wrapper
 * 
 * This file now imports from the destructured data modules in the /data folder.
 * It maintains backward compatibility while allowing the actual data to be
 * stored in organized, maintainable files.
 * 
 * All data is now organized in:
 * - data/components.js
 * - data/projects.js
 * - data/zonalAreas.js
 * - data/dmAreas.js
 * - data/branches.js
 * - data/formConfig.js
 * - data/index.js (main entry point)
 * 
 * To maintain data: Edit files in the /data folder, not this file.
 * See data/README.md for detailed documentation.
 */

import sdpData from './data/index.js';

export default sdpData;
