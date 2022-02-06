const jwt = require('jsonwebtoken');

class Jwt {
  static async assignToken(data, key) {
    return await jwt.sign(data, key, {
      expiresIn: 60 * 60 * 24 * 30,
    });
  }
}

module.exports = Jwt;