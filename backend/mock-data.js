// Mock data structure for cascading dropdowns
const mockData = {
  components: ['Component A', 'Component B', 'Component C'],
  projects: {
    'Component A': ['Project A1', 'Project A2', 'Project A3'],
    'Component B': ['Project B1', 'Project B2'],
    'Component C': ['Project C1', 'Project C2', 'Project C3']
  },
  zonalAreas: {
    'Project A1': ['Zone A1-1', 'Zone A1-2'],
    'Project A2': ['Zone A2-1', 'Zone A2-2'],
    'Project A3': ['Zone A3-1', 'Zone A3-2'],
    'Project B1': ['Zone B1-1', 'Zone B1-2'],
    'Project B2': ['Zone B2-1', 'Zone B2-2'],
    'Project C1': ['Zone C1-1', 'Zone C1-2'],
    'Project C2': ['Zone C2-1', 'Zone C2-2'],
    'Project C3': ['Zone C3-1', 'Zone C3-2']
  },
  dmAreas: {
    'Zone A1-1': ['DM A1-1-1', 'DM A1-1-2'],
    'Zone A1-2': ['DM A1-2-1', 'DM A1-2-2'],
    'Zone A2-1': ['DM A2-1-1', 'DM A2-1-2'],
    'Zone A2-2': ['DM A2-2-1', 'DM A2-2-2'],
    'Zone A3-1': ['DM A3-1-1', 'DM A3-1-2'],
    'Zone A3-2': ['DM A3-2-1', 'DM A3-2-2'],
    'Zone B1-1': ['DM B1-1-1', 'DM B1-1-2'],
    'Zone B1-2': ['DM B1-2-1', 'DM B1-2-2'],
    'Zone B2-1': ['DM B2-1-1', 'DM B2-1-2'],
    'Zone B2-2': ['DM B2-2-1', 'DM B2-2-2'],
    'Zone C1-1': ['DM C1-1-1', 'DM C1-1-2'],
    'Zone C1-2': ['DM C1-2-1', 'DM C1-2-2'],
    'Zone C2-1': ['DM C2-1-1', 'DM C2-1-2'],
    'Zone C2-2': ['DM C2-2-1', 'DM C2-2-2'],
    'Zone C3-1': ['DM C3-1-1', 'DM C3-1-2'],
    'Zone C3-2': ['DM C3-2-1', 'DM C3-2-2']
  },
  branches: {
    'DM A1-1-1': ['Branch 1', 'Branch 2'],
    'DM A1-1-2': ['Branch 3', 'Branch 4'],
    'DM A1-2-1': ['Branch 5', 'Branch 6'],
    'DM A1-2-2': ['Branch 7', 'Branch 8'],
    'DM A2-1-1': ['Branch 9', 'Branch 10'],
    'DM A2-1-2': ['Branch 11', 'Branch 12'],
    'DM A2-2-1': ['Branch 13', 'Branch 14'],
    'DM A2-2-2': ['Branch 15', 'Branch 16'],
    'DM A3-1-1': ['Branch 17', 'Branch 18'],
    'DM A3-1-2': ['Branch 19', 'Branch 20'],
    'DM A3-2-1': ['Branch 21', 'Branch 22'],
    'DM A3-2-2': ['Branch 23', 'Branch 24'],
    'DM B1-1-1': ['Branch 25', 'Branch 26'],
    'DM B1-1-2': ['Branch 27', 'Branch 28'],
    'DM B1-2-1': ['Branch 29', 'Branch 30'],
    'DM B1-2-2': ['Branch 31', 'Branch 32'],
    'DM B2-1-1': ['Branch 33', 'Branch 34'],
    'DM B2-1-2': ['Branch 35', 'Branch 36'],
    'DM B2-2-1': ['Branch 37', 'Branch 38'],
    'DM B2-2-2': ['Branch 39', 'Branch 40'],
    'DM C1-1-1': ['Branch 41', 'Branch 42'],
    'DM C1-1-2': ['Branch 43', 'Branch 44'],
    'DM C1-2-1': ['Branch 45', 'Branch 46'],
    'DM C1-2-2': ['Branch 47', 'Branch 48'],
    'DM C2-1-1': ['Branch 49', 'Branch 50'],
    'DM C2-1-2': ['Branch 51', 'Branch 52'],
    'DM C2-2-1': ['Branch 53', 'Branch 54'],
    'DM C2-2-2': ['Branch 55', 'Branch 56'],
    'DM C3-1-1': ['Branch 57', 'Branch 58'],
    'DM C3-1-2': ['Branch 59', 'Branch 60'],
    'DM C3-2-1': ['Branch 61', 'Branch 62'],
    'DM C3-2-2': ['Branch 63', 'Branch 64']
  },
  districts: {
    'Branch 1': ['District 1', 'District 2'],
    'Branch 2': ['District 3', 'District 4']
    // Add more as needed - simplified for demo
  },
  phases: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'],
  errorTypes: ['Data Entry Error', 'System Error', 'Network Error', 'Configuration Error', 'Other']
};

export default mockData;