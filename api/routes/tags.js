import {Router} from 'express'
import {getAll} from '../controllers/tags-controller'
const router = Router()

router.get('/tags', getAll)

export default router
