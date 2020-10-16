import {Router} from 'express'
import {getAll, create} from '../controllers/comments-controller'
const router = Router()

router.get('/comments', getAll)
router.post('/comments', create)

export default router
