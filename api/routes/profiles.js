import {Router} from 'express'
import {getAll} from '../controllers/profiles-controller'
const router = Router()

router.get('/profiles', getAll)

export default router
