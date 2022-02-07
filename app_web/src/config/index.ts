export default {
  API: {
    port: '3000',
    host: 'localhost',
    urls: {
      addPatient: '/api/patients/add',
      getPatient: '/api/patients/patient',
      allPatients: '/api/patients/all',
      login: '/api/auth/login',
      verifiedToken: '/api/auth/token/verified',
      addUser: '/api/auth/user/add',
    },
  },
};
