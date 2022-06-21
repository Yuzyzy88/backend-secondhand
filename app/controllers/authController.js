const admin = require("../../config/firebase-config")

class AuthenticationController {
  authorize = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1]
      const decodeValue = await admin.auth().verifyIdToken(token)

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
}

module.exports = AuthenticationController