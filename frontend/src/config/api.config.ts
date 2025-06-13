// api.config.ts
export const API_URL = import.meta.env.VITE_API_URL || 'http://10.0.0.2:5010/api';

export const ENDPOINTS = {
  // Authentication
  AUTH: {
    SIGNUP: '/auth/signup',
    LOGIN: '/auth/login',
    PROFILE: '/auth/profile',
  },

  // Formations
  FORMATIONS: '/formations',

  // Telecom Opinions
  TELECOM_OPINIONS: '/telecom-opinions', // Ajout de l'endpoint
};
