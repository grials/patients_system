const bcrypt = require('bcrypt');
class Bcrypt {
  static async encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);

    return bcrypt.hash(password, salt);
  }

  static async compare(inPassword, shemaPassword) {
    return await bcrypt.compare(inPassword, shemaPassword);
  }
}

module.exports = Bcrypt;