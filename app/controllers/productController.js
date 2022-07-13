const multer = require('multer')
const { user } = require('../models')
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
                product.create({
                    id: req.body.id,
                    uid: req.body.uid,
                    name: req.body.name,
                    price: req.body.price,
                    category: req.body.category,
                    description: req.body.description,
                    isAvailable: true,
                    images: req.body.images,
                })
                res.status(200).json("success")
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: error
                })
            }
        })
    }

    list = async (req, res) => {
        try {
            if (req.headers.productid) {
                console.log('ehh bener?')
            }
            
            const data = await product.findAll()
            return res.status(200).json({
                success: true,
                error: false,
                data: data,
                message: " Data successfully populated"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                test: "slkdjfs",
                message: error
            })
        }
    }

    getById = async (req, res) => {
        try {
            const data = await product.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error
            })
        }
    }
    listByUID = async (req, res) => {
        console.log(req.params);
        try {
            const data = await product.findAll({
                where: {
                    uid: req.params.uid
                }
            })
            res.status(200).json(data)
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err
            })
        }
    }
    
    update = async (req, res) => {
        try {
            const _product = await product.findOne({ where: { id: req.params.id } })
            
            await _product.update({
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                description: req.body.description,
                images: req.body.images,
            })

            res.status(200).json({
                success: true,
                message: " Product successfully update"
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