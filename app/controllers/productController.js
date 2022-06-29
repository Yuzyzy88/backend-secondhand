const multer = require('multer')
const { product } = require('../models')
const { imageFilter } = require('../../helpers')

// define the local storage location for our images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '../../../public/images/')
    },
    // by default, multer removes file extensions and now add them back
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage, fileFilter: imageFilter }).single('image');

class ProductController {
    create = async (req, res) => {
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                console.log(err)
            } else if (err) {
                console.log(err);
            }
            try {
                const id = req.body.pid
                const productid = await product.findOne({ where: { uid: req.body.pid } })
                const productID = productid
                // console.log("user", id)
                // console.log("user2", userUID);
                if (!productID) {
                    product.create({
                        pid: req.body.pid,
                        name: req.body.name,
                        price: req.body.price,
                        category: req.body.category,
                        descript: req.body.descript,
                        image: req.file ? req.file.originalname : "",
                    })
                    res.status(200).json("success")
                } else if (productID.uid == id) {
                    res.status(200).json("success")
                }
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: error
                })
            }
        })
    }

    read = async (req, res) => {
        try {
            const data = await product.findOne({
                where: {
                    pid: req.product.pid
                }
            })
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                success: false,
                test: "slkdjfs",
                message: error
            })
        }
    }

    update = async (req, res) => {

        try {
            let upload = multer({ storage: storage, fileFilter: imageFilter }).single('image')
            upload(req, res, async (err) => {
                await product.findOne({ where: { pid: req.body.pid } }).then(User => {
                    User.update({
                        name: req.body.name,
                        price: req.body.price,
                        category: req.body.category,
                        descript: req.body.descript,
                        image: req.file ? req.file.originalname : "",
                    })
                })
                res.status(200).json({
                    success: true,
                    message: " Product successfully update"
                })
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error
            })
        }
    }

}

module.exports = ProductController