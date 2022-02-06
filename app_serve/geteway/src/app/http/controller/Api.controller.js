class ApiController {
  constructor() {}

  sayHello(req, res) {
    return res.status(200).json({
      message: 'wolcome to api',
    });
  }

  getJson(req, res) {
    return res.status(200).json({
      msg: 'Done!!!!!....',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    });
  }
}

module.exports = ApiController;
