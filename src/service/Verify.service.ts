import { IUser } from '../interfaces/validateUser.interface'
import { ok, badRequest } from '../utils/httpHelpers'
import ValidationBuild from './validators/validation'

export default class VerifyService {
  async validadeLogin (body: IUser) {
    const { password } = body

    const result = ValidationBuild.validation(password)

    if (result.length > 0) return badRequest(result)

    return ok(result)
  }
}
