const { UserController, AuthenticationController } = require('../controllers')

function apply(app) {

  const userController = new UserController()
  const authController = new AuthenticationController()

  app.post('/api/register', userController.create)
  app.get('/api/profile', authController.authorize, userController.read)
  app.put('/api/profile', authController.authorize, userController.update)
  
  app.get('/api/product', authController.authorize)
  app.post('/api/product', authController.authorize, authController.emptyProfileCheck)
  return app
}

module.exports = { apply }