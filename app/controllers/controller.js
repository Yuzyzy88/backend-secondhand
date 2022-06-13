module.exports = {
  handleIndex: (req, res) => {
    res.status(200).json({
      status: 'OK',
      message: 'IT WORKS!'
    })
  }
}