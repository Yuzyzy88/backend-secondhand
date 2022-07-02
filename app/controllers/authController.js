const admin = require("../../config/firebase-config")
const { user } = require('../models')

class AuthenticationController {
  authorize = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      // console.log(token)
      const decodeValue = await admin.auth().verifyIdToken(token);

      if (decodeValue) {
        req.user = decodeValue
        next()
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error
      })
    }
  }

  emptyProfileCheck = async (req, res, next) => {
    try {
      const user = await user.findOne({ where: { uid: req.user.uid } })
      if (user.name && user.name !== '' && user.city && user.city !== '' && user.address && user.address !== '' && user.phone && user.phone !=='') {
        next()
      }
      else {
        res.status(400).json({
          success: false,
          message: "Profile needs to be filled out"
        })
      }

    } catch (error) {
      res.status(404).json({
        success: false,
        message: error
      })
    }
  }
}

module.exports = AuthenticationController