import {Router} from 'express'
import {send} from '../controllers/mail-controller'
const router = Router()

router.post('/mail', send)

export default router
