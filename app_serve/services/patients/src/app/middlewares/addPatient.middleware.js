const moment = require('moment'); 

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
        lastname,
        age,
        birthday,
        gender,
        phone,
        pregnancy
    } = data;

    if(pregnancy !== undefined){
        if (typeof(pregnancy) !== "boolean") {
            return false;
        }
    }

    if (
        typeof(name) !== "string" ||
        typeof(lastname) !== "string" ||
        typeof(parseInt(age)) !== "number" ||
        typeof(birthday) !== "string" ||
        typeof(gender) !== "string" ||
        typeof(phone) !== "string"
    ) {
        return false;
    }

    if (
        !name.match(/^[a-záéíóú]+$/ig) ||
        !lastname.match(/^[a-záéíóú]+$/ig) ||
        (parseInt(age) < 0 || parseInt(age) > 130) ||
        !moment(birthday, 'DD/MM/YYYY',true).isValid() ||
        !phone.match(/^[0-9]+$/ig)
    ) {
        return false;
    }

    if (!["male", "famenine"].includes(gender)) {
        return false;
    }

    return true;

}

module.exports = middleware;