import {Router} from 'express'
import {getAll} from '../controllers/comments-controller'
const router = Router()

router.get('/comments', getAll)

export default router
