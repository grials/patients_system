const { model, Schema, Model, models } = require('mongoose');

class Patients {
  schema;
  model;

  constructor() {
    this.schema = new Schema({
      name: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      birthday: {
        type: String,
        required: true,
      },
      gender:{
        type: String,
        required: true,
      },
      pregnancy:{
        type: Boolean,
        default: false
      },
      phone:{
          type: String,
          required: true,
      }
    });
    try {
      if (models.Registers !== undefined) {
        this.model = model('Registers');
      }else{
        this.model = model('Registers', this.schema);
      }      
    } catch (error) {
      console.log("Error lin 45 "+error);
    }
  }

  static start() {
    return new Patients();
  }

  async addPatient(data){
    try {
      const patient = new this.model({
        ...data,
      });
      patient.save();

      return true;
    } catch (error) {
      console.log('Error en lin 62' + __dirname, error);
    }
    return false;
  }

  async getPatient(
    name,
    lastname
  ) {
    try {
      const patient = await this.model.findOne({ name, lastname });
      return patient;
    } catch (error) {
      console.log('error en lin 75' + __dirname, error);
    }
    return {};
  }

  async getAllPatients() {
    try {
      const patients = await (await this.model.find()).reverse();
      return patients;
    } catch (error) {
      console.log('error en lin 85 ' + __dirname, error);
    }
    return false;
  }
}

module.exports = Patients;