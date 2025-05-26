
// Configuration pour l'API
export const API_URL = import.meta.env.VITE_API_URL || 'http://10.0.0.3:5010/api';

// Configuration pour les endpoints
export const ENDPOINTS = {
  // Authentication
  AUTH: {
    SIGNUP: '/auth/signup',
    LOGIN: '/auth/login',
    PROFILE: '/auth/profile',
  },
  
  // Formations
  FORMATIONS: '/formations',
};
