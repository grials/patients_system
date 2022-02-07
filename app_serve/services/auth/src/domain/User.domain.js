const Bcrypt = require("../helpers/Bcrypt.service");
const UserModel = require("../model/user.model");
const JWT = require("../helpers/JWT.service");

class UserDomain{
    constructor(){}

    static start(){
        return new UserDomain();
    }

    async verifiedUser(username, password){
        try {
            const user = await UserModel.start().getUser(username);
            if (user) {
                const isEquals = await Bcrypt.compare(password, user.password)
                if (isEquals) {
                        let token = await JWT.assignToken(username);
                        return {
                            username,
                            token,
                            msg: "login exitoso",
                            error: false
                        }
                }else{
                    return {
                        msg:"contraseña invalida.",
                        error: true
                    };
                }
            }else{
                return {
                    msg:"usuario invalido.",
                    error: true
                };
            }
        } catch (error) {
            console.log("Error lin 37 "+__dirname+" ==> "+error);
            return {msg: "Error", error: true}
        }

    }

    async addUser(username, password){
        try {
           let isAdd = await UserModel.start().addUser(username, password);
           if (isAdd) {
                return {
                    msg:"user register suscess",
                    error: false
                    }
            }else{
                return {
                    msg:"error register, username is exists",
                    error: true
                }
            }
        } catch (error) {
            console.log("Error lin 35 "+error);
            return {msg: "Error", error: true};
        }
    }

    async verifiedToken(token){
        try {
            let data = await JWT.verifiedToken(token);

            return {msg: "token valid", dataUser: {
                username : data.username, token
            }, error: false};
        } catch (error) {
            // console.log("Error lin 68 "+__dirname+" "+error);
            return {msg: "token invalid", data: null, error: true};
        }
    }
}

module.exports = UserDomain;