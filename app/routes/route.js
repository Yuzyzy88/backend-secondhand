const Controller = require('../controllers/controller')

function apply (app) {
  app.route('/')
    .get(Controller.handleIndex)

  return app
}

module.exports = { apply }