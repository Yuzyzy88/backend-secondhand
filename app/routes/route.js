const { UserController, AuthenticationController, ProductController } = require('../controllers')

function apply(app) {

  const userController = new UserController()
  const authController = new AuthenticationController()
  const productController = new ProductController()

  app.post('/api/register', userController.create)
  app.get('/api/profile', authController.authorize, userController.read)
  app.put('/api/profile', authController.authorize, userController.update)
  app.post('/api/upload', productController.create)
  app.get('/api/update', productController.read)
  app.put('/api/update', productController.update)
  return app
}

module.exports = { apply }