const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads/')
  },
  filename: (req, file, callback) => {
    callback(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
  }
})
const fileFilter = (request, file, callback) => {
  console.log('File Filter:' + file)
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    callback(null, true)
  } else {
    return callback(new Error('Extension file must be JPG or PNG'), false)
  }
}
const limits = { fileSize: 1024 * 1024 * 1 }

let upload = multer({ storage, fileFilter, limits }).single('image')

const uploadFilter = (request, response, next) => {
  upload(request, response, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      response.status(400).send({
        success: false,
        message: err.message
      })
    } else if (err) {
      // An unknown error occurred when uploading.
      response.status(400).send({
        success: false,
        message: err.message
      })
    }
    next()
  })
}

module.exports = uploadFilter
