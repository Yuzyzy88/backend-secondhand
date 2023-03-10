const { product } = require('../models')
const { Op } = require("sequelize")
class ProductController {
    create = async (req, res) => {
      
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
                message: "Product successfully updated"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error
            })
        }
    }

    updateStatus = async (req, res) => {
        console.log(req.body)
        try {
            const data = await product.findOne({ where: {id : req.body.id }})
            await data.update({
                isAvailable: req.body.isAvailable
            })
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err
            })
        }
    }

    search = async (req, res) => {
        try {
            if(req.body.search !== undefined){
                const _products = await product.findAll( {
                    where: {
                        name: {
                          [Op.like]: `%${req.body.search}%`
                        }
                      },
                      paranoid: false    
                })
                res.json(_products)
            }
            else {
                res.json([])
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error
            })
        }
    }
    
    delete = async (req, res) => {
        try {
            const _product = await product.destroy({where:{id:req.params.id}})
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
}

module.exports = ProductController