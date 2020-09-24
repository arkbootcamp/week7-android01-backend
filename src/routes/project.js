const { Router } = require('express')
const { getDataProject, getDataProjectByID, createProject } = require('../controllers/project')
const { authorization } = require('../middleware/auth')
const uploadImage = require('../middleware/multer')

const router = Router()

router.get('/', authorization, getDataProject)
router.get('/:id', authorization, getDataProjectByID)
router.post('/', authorization, uploadImage, createProject)

module.exports = router
