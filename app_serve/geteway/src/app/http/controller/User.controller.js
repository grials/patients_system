class UserController {
  constructor() {}

  sayHello(res, req) {
    return res.status(200).json({ msg: "Hello world!" });
  }
}

module.exports = UserController;
