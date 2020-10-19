import {Router} from 'express'
import {getAll, create, remove} from '../controllers/comments-controller'
const router = Router()

router.get('/comments', getAll)
router.post('/comments', create)
router.delete('/comments/:id', remove)

export default router
