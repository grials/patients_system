const { model, Schema, Model, models } = require('mongoose');
const Bcrypt = require('../helpers/Bcrypt.service');

class User {
  schema;
  model;

  constructor() {
    this.schema = new Schema({
      username: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
      }
    });
    try {
      if (models.Users) {
        this.model = model('Users');
      }else{
        this.model = model('Users', this.schema);
        this.addUser("admin", "admin");
      }      
    } catch (error) {
      console.log("Error lin 27 "+error);
    }
  }

  static start() {
    return new User();
  }

  async addUser(username, password){
    try {
      let passwordEncryp = await Bcrypt.encryptPassword(password);
      const user = new this.model({
        username,
        password: passwordEncryp
      });
      await user.save();

      return true;
    } catch (error) {
      console.log('Error en lin 46' + __dirname, error);
    }
    return false;
  }

  async getUser(username) {
    try {
      const user = await this.model.findOne({ username });
      return user;
    } catch (error) {
      console.log('error en lin 56' + __dirname, error);
    }
    return {};
  }
}

module.exports = User;