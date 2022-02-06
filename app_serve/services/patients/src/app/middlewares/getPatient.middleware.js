
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
        name,
        lastname
    } = data;

    if (
        typeof(name) !== "string" ||
        typeof(lastname) !== "string"
    ) {
        return false;
    }
    
    if (
        !name.match(/^[a-záéíóú]+$/ig) ||
        !lastname.match(/^[a-záéíóú]+$/ig)
    ) {
        return false;
    }

    return true;

}

module.exports = middleware;