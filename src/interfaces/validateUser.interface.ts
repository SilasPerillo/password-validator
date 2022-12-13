export interface IVerify {
  verify: boolean
  match?: IUser
  noMatch?: string[] | string
}

export interface ILogin {
  statusCode: number
  message: IVerify
}

export interface IUser {
  id?: number
  user: string
  password: string
}
