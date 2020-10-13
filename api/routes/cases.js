import {Router} from 'express'
import {getAll} from '../controllers/cases-controller'
const router = Router()

router.get('/cases', getAll)

export default router
