const { UserController } = require('../controllers')

function apply(app) {

  const userController = new UserController()

  app.post('/api/register', userController.create)
  app.put('/api/update', userController.update)

  return app
}

module.exports = { apply }