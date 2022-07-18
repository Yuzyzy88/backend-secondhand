const multer = require('multer')
const { user } = require('../models')
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

class UserController {
    create = async (req, res) => {
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                console.log(err)
            } else if (err) {
                console.log(err);
            }
            try {
                const id = req.body.uid
                const userUid = await user.findOne({ where: { uid: req.body.uid } })
                const userUID = userUid
                if (!userUID) {
                    user.create({
                        uid: req.body.uid,
                        name: req.body.name,
                        city: req.body.city,
                        address: req.body.address,
                        phone: req.body.phone,
                        image: req.body.image
                        // image: req.file ? req.file.originalname : "",
                    })
                    res.status(200).json("success")
                } else if (userUID.uid == id) {
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
            if (req.headers.product) {
                const data = await user.findOne({
                    where: {
                        uid: req.headers.product
                    }
                })
                res.status(200).json(data)
            } else {
                const data = await user.findOne({
                    where: {
                        uid: req.user.uid
                    }
                })
                res.status(200).json(data)
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error
            })
        }
    }

    update = async (req, res) => {
        try {
            let upload = multer({ storage: storage, fileFilter: imageFilter }).single('image')
            upload(req, res, async (err) => {
                await user.findOne({ where: { uid: req.body.uid } }).then(User => {
                    User.update({
                        name: req.body.name,
                        city: req.body.city,
                        address: req.body.address,
                        phone: req.body.phone,
                        image: req.body.image
                        // image: req.file ? req.file.originalname : "",
                    })
                })
                res.status(200).json({
                    success: true,
                    message: " Data successfully update"
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

module.exports = UserController