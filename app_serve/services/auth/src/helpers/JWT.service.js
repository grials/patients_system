const jwt = require('jsonwebtoken');
const config = require('../config')
class JWT {
  static async assignToken(username) {
    let {database} = config;
    return await jwt.sign({username}, database.key, {
      expiresIn: 60 * 60 * 24 * 30,
    });
  }

  static async verifiedToken(token){
    let {database} = config;
    return await jwt.verify(token, database.key);
  }
}

module.exports = JWT;