import { Router } from 'express'
import VerifyController from '../controllers/Verify.controller'

const router = Router()

const verifyController = new VerifyController()

router.post('/', async (req, res) => (await verifyController.validadeLogin(req, res)))

export default router
