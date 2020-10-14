import {Router} from 'express'
import {getAll} from '../controllers/counters-controller'
const router = Router()

router.get('/counters', getAll)

export default router
