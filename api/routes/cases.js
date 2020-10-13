const {Router} = require('express')
const casesController = require('../controllers/cases-controller')
const router = Router()

router.get('/cases', casesController.getAll)

module.exports = router
