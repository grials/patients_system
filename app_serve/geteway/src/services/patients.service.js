const axios = require('axios');
const config = require('../config')

class PatientsService{
    static async getAllPatients(){
        const {port, host} = config.services.patients;
        const url = `http://${host}:${port}/api/all`;

        const data = await axios.get(url);

          return data;
    }

    static async addPatient(data){
        const {port, host} = config.services.patients;
        const url = `http://${host}:${port}/api/add`;

        try {
            const response = await axios
                        .post(url,
                                data,
                                {
                                    headers: {
                                        "X-Requested-With": "XMLHttpRequest",
                                        // "X-CSRF-TOKEN": token,
                                        // "Content-Type": "multipart/form-data",
                                        "Content-Type": "application/json",
                                    },
                                });
            return response
        } catch (error) {
           console.log("error line 32 "+error); 
        }

          return "error...";
    }

    static async getPatient(data){
        const {port, host} = config.services.patients;
        const url = `http://${host}:${port}/api/patient`;

        const response = await axios
                        .post(url,
                                data,
                                {
                                    headers: {
                                        "X-Requested-With": "XMLHttpRequest",
                                        // "X-CSRF-TOKEN": token,
                                        // "Content-Type": "multipart/form-data",
                                        "Content-Type": "application/json",
                                    },
                                });

          return response;
    }
}

module.exports = PatientsService;