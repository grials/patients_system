
const middleware = function (req, res, next){

    if (ValidPetition(req.body)) {
        next();
    }else{
        res.status(200).json({
            msg:"hay un error en los datos",
            error: true
        })
    }

}

function ValidPetition(data){
    const {
        username,
        password
    } = data;

    if (
        typeof(username) !== "string" ||
        typeof(password) !== "string"
    ) {
        return false;
    }

    if (
        !username.match(/^[a-z]+$/ig) ||
        (password.length > 24 || password.length < 8) 
    ) {
        return false;
    }

    return true;

}

module.exports = middleware;