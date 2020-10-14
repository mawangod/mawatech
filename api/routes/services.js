import {Router} from 'express'
import {getAll} from '../controllers/services-controller'
const router = Router()

router.get('/services', getAll)

export default router
