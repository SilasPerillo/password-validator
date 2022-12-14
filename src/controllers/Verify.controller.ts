import { Request, Response } from 'express'
import VerifyService from '../service/Verify.service'

export default class VerifyController {
  public verifyService = new VerifyService()

  validadeLogin = async (req: Request, res: Response): Promise<Response> => {
    const { body } = req

    const { statusCode, message } = await this.verifyService.validadeLogin(body)

    console.log(statusCode, message)

    return res.status(statusCode).json(message)
  }
}
