import { IUser } from '../interfaces/validateUser.interface'
import { ok, unauthorized } from '../utils/httpHelpers'
import ValidationBuild from './validators/validation'

export default class VerifyService {
  async validadeLogin (body: IUser) {
    const { password } = body

    const result = ValidationBuild.validation(password)

    if (result.length > 0) return unauthorized(result)

    return ok('ok')
  }
}
