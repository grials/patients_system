const UserDomain = require("../../domain/User.domain");


class ApiController{

    static login(req, res){
        const {username, password} = req.body;
        UserDomain.start()
        .verifiedUser(username, password)
        .then(data => res.status(200).json(data))
        .catch(err =>{
            console.log("Error lin 12 "+error);
            return res.status(500).json({msg: "Error", error: true});
        })
    }

    static verifiedToken(req, res){
        const {token} = req.body;
        try {
            UserDomain.start()
            .verifiedToken(token)
            .then(data =>{
                return res.status(200).json(data);
            })
            .catch(err =>{
                console.log("Error lin 26 "+__dirname+" "+err);
                return res.status(500).json({msg: "Error", error: true})
            })
        } catch (error) {
            
        }
    }

    static logout(req, res){
        
    }

    static addUser(req, res){
        const {username, password} = req.body;
        UserDomain.start()
        .addUser(username, password)
        .then(data =>{
            return res.status(200).json(data);
        })
        .catch(err =>{
            console.log("Error lin 27 "+error);
            return res.status(500).json({msg: "Error", error:true})
        })
    }

}

module.exports = ApiController;