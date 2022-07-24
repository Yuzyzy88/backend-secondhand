const {notification} = require("../models")

class NotificationController {

    create = async (req, res) => {
        try {
            const not = await notification.create({
                fromId: req.user.uid,
                toId: req.body.toId,
                readStatus: false,
                date: new Date(req.body.date),
                productName: req.body.productName,
                productPrice: req.body.productPrice,
                negotiatePrice: req.body.negotiatePrice,
                imgurl: req.body.imgurl
            })
            res.status(200).json(not)
            
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err
            })
        }
    }

    getData = async (req, res) => {
        try{
            const data = await notification.findAll({
                where: {
                    toId: req.user.uid
                }
            })
            res.status(200).json(data)
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error
            })
        }
    }

    getDatabyId = async (req, res) => {
        try{
            const data = await notification.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json(data)
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error
            })
        }
    }

    update = async (req, res) => {
        console.log(req.body)
        console.log(req.body)
        try {
          const data = await notification.findOne({
            where: {
              id: req.params.id
            }
          })
    
          const update = await data.update({
            readStatus: req.body.readStatus
          })
    
          res.status(200).json(update)
        } catch (err) {
          res.status(400).json({
            success: false,
            message: err
        })
        }
      }
}

module.exports = NotificationController 