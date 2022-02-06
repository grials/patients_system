const patientsService = require("../../../services/patients.service");

class ApiController {
  constructor() {}

  async addPatient(req, res){
    const response = await patientsService.addPatient(req.body);

    if (response.status >= 200 && response.status < 300) {
      return res.status(200).json({
        ...response.data
      })
    }

    return res.status(500);
  }

  async allPatients(req, res){
    const response = await patientsService.getAllPatients();

    if (response.status >= 200 && response.status < 300) {
      return res.status(200).send({
        ...response.data
      })
    }

    return res.status(500);
  }

  async getPatient(req, res){
    const response = await patientsService.getPatient(req.body);

    if (response.status >= 200 && response.status < 300) {
      return res.status(200).json({
        ...response.data
      })
    }

    return res.status(500);
  }
}

module.exports = ApiController;
