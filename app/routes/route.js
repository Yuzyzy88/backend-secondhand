const { UserController, AuthenticationController, ProductController, NegotiationController } = require('../controllers')

function apply(app) {
  const userController = new UserController()
  const authController = new AuthenticationController()
  const productController = new ProductController()
  const negotiationController = new NegotiationController()
  
  app.post('/api/register', userController.create)
  app.get('/api/profile', authController.authorize, userController.read)
  app.patch('/api/profile', authController.authorize, userController.update)
  
  app.post('/api/product', authController.authorize, productController.create)
  app.get('/api/product', productController.list)
  app.get('/api/product/byProfile/:uid', productController.listByUID)
  app.post('/api/product/search', productController.search)
  app.get('/api/product/:id', productController.getById)
  app.patch('/api/product/:id', authController.authorize, productController.update)
  app.delete('/api/product/:id', productController.delete)
  
  app.post('/api/negotiation', negotiationController.create)
  app.get('/api/negotiation', negotiationController.read)

  return app
}

module.exports = { apply }