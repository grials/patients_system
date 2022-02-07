const axios = require('axios');
const config = require('../config')

class AuthService{
    static async login(data){
        const {port, host} = config.services.auth;
        const url = `http://${host}:${port}/api/login`;

        const response = await axios.post(url,data,{
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                // "X-CSRF-TOKEN": token,
                // "Content-Type": "multipart/form-data",
                "Content-Type": "application/json",
            },
        });

          return response;
    }

    static async addUser(data){
        const {port, host} = config.services.auth;
        const url = `http://${host}:${port}/api/user/add`;

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

    static async verifiedToken(data){
        const {port, host} = config.services.auth;
        const url = `http://${host}:${port}/api/token/verified`;

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

module.exports = AuthService;