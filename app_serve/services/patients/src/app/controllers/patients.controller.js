const PatientsModel = require('../../model/patient.model');

class Patients {
    static allPatients(req, res){
        PatientsModel.start().getAllPatients()
        .then(response =>{
            return res.status(200).json({ data:response });
        })
        .catch(err => console.log(err));        
    }

    static addPatient(req, res){
        PatientsModel.start().addPatient(req.body)
        .then((isAdd) =>{
            if (isAdd) {
                return res.status(200).json({ msg:"Patients register", ...req.body, error:false });
            }else{
                return res.status(200).json({ msg:"Patients not register", ...req.body, error:true });
            }
        })
        .catch(err => {
            console.log(err);
            return res.status(200).json({error: true});
        }); 
    }

    static getPatient(req, res){
        const {name, lastname} = req.body
        PatientsModel.start().getPatient(name, lastname)
        .then(response =>{
            return res.status(200).json({data: response });
        })
        .catch(err => {
            console.log(err);
            return res.status(200).json({ error: true,...req.body });
        }); 
    }
}

module.exports = Patients;