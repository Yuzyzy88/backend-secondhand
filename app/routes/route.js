const { UserController, AuthenticationController, ProductController } = require('../controllers')

function apply(app) {
  const userController = new UserController()
  const authController = new AuthenticationController()
  const productController = new ProductController()

  app.post('/api/register', userController.create)
  app.get('/api/profile', authController.authorize, userController.read)
  app.patch('/api/profile', authController.authorize, userController.update)
  
  app.post('/api/product', productController.create)
  app.get('/api/product', productController.list)
  app.get('/api/product/:uid', productController.listByID)
  app.patch('/api/produc${getUserDatabase().id}t/update/:id', productController.update)
  return app
}

module.exports = { apply }