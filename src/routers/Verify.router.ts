import { Router } from 'express'
import VerifyController from '../controllers/Verify.controller'

const router = Router()

const verifyController = new VerifyController()

router.post('/', verifyController.validadeLogin)

export default router
