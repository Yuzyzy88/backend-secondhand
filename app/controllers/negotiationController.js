const { user, product, negotiation } = require('../models');

class NegotiationController {
  create = (req, res) => {
    console.log(req.body);

    try {
      negotiation.create({
        buyer_uid: req.body.buyer_uid,
        seller_uid: req.body.seller_uid,
        product_id: req.body.product_uid,
        price: req.body.price
      })
      res.status(200).json("Success")
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err
      })
    }
  }
}

module.exports = NegotiationController;