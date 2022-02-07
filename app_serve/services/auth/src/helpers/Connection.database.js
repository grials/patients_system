
const mongoose = require('mongoose');
const {database} = require('../config');
const UserModel = require('../model/user.model');


const connection = function(){
    let url = `mongodb://${database.host}:${database.port}/${database.name_db}`;
    mongoose.connect(url).catch(err => console.log(err));

    mongoose.connection.once('open', () =>{
      if (!UserModel.start().getUser("admin")) {
        UserModel.start().addUser("admin", "admin");
      }
      console.log('Database is connected to', url);
    }
    );
    mongoose.connection.on('error', (err) => console.log(err));

}

module.exports = connection;


