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

    delete = async (req, res) => {
        try {
            const _product = await notification.destroy({
                where:{
                    id:req.params.id,
                    toId: req.user.uid
                }
            })
            res.status(200).json({
                success: true,
                data: _product,
                message: " Product successfully delete"
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: error
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

}

module.exports = NotificationController 