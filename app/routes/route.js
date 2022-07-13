const { UserController, AuthenticationController, ProductController, NegotiationController } = require('../controllers')

function apply(app) {
  const userController = new UserController()
  const authController = new AuthenticationController()
  const productController = new ProductController()
  const negotiationController = new NegotiationController()
  
  app.post('/api/register', userController.create)
  app.get('/api/profile', authController.authorize, userController.read)
  app.patch('/api/profile', authController.authorize, userController.update)

  app.post('/api/product', productController.create)
  app.get('/api/product', productController.list)
  app.get('/api/product/byProfile/:uid', productController.listByUID)
  app.get('/api/product/:id', productController.getById)
  app.patch('/api/product/:id', productController.update)

  app.post('/api/negotiation', negotiationController.create)
  app.get('/api/negotiation', negotiationController.read)

  return app
}

module.exports = { apply }