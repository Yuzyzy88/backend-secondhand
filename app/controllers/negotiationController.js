const { user, product, negotiation } = require('../models');

class NegotiationController {
  create = (req, res) => {
    try {
      negotiation.create({
        buyer_uid: req.body.buyer_uid,
        seller_uid: req.body.seller_uid,
        product_id: req.body.product_uid,
        price: req.body.price,
        isApproved: 1
      })
      res.status(200).json("Success")
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err
      })
    }
  }

  read = async (req, res) => {
    console.log(req.headers.productid)
    let data;

    try {
      if (req.headers.uid) {
        data = await negotiation.findAll({
          where: {
            seller_uid: req.headers.uid
          }
        })
      } else if (req.headers.productid) {
        data = await negotiation.findAll({
          where: {
            product_id: req.headers.productid
          }
        })
      } else {
        data = await negotiation.findAll();
      }
      res.status(200).json(data)
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err
    })
    }
  }

  update = async (req, res) => {
    console.log(req.body)
    console.log(req.body)
    try {
      const data = await negotiation.findOne({
        where: {
          id: req.body.id
        }
      })

      data.update({
        isApproved: req.body.isApproved
      })

      res.status(200).json({
        success: true,
        message: "Negotiation Updated Successfully"
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err
    })
    }
  }
}

module.exports = NegotiationController;