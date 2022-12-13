import { IUser } from '../interfaces/validateUser.interface'
import { badRequest, ok } from '../utils/httpHelpers'

export default class VerifyService {
  async validadeLogin (body: IUser) {
    const { user, password } = body

    console.log('body', body)

    if (!user || !password) return badRequest('User or password is required')

    return ok('ok')
  }
}
