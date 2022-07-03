const { UserController, AuthenticationController, ProductController } = require('../controllers')

function apply(app) {

  const userController = new UserController()
  const authController = new AuthenticationController()
  const productController = new ProductController()

  app.post('/api/register', userController.create)
  app.get('/api/profile', authController.authorize, userController.read)
  app.put('/api/profile', authController.authorize, userController.update)
  app.post('/api/product', productController.create)
  app.get('/api/product', productController.read)
  // app.put('/api/product', productController.update)
  return app
}

module.exports = { apply }