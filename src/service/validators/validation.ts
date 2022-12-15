import { ICountLetters } from '../../interfaces/validateUser.interface'

export default class ValidationBuild {
  static validation (password: string) {
    const result: string[] = []
    const countUpperCase = password.match(/[A-Z]/g)?.length as ICountLetters
    const countLowerCase = password.match(/[a-z]/g)?.length as ICountLetters
    const countNumbers = password.match(/[0-9]/g)?.length as ICountLetters
    const countSpecialChars = ValidationBuild.validationSpecialChars(password)

    if (password.length < 8) result.push('minSize')

    if (countUpperCase < 3 || countUpperCase === undefined) result.push('minUppercase')

    if (countLowerCase < 5 || countLowerCase === undefined) result.push('minLowercase')

    if (countNumbers < 3 || countNumbers === undefined) result.push('minDigit')

    if (countSpecialChars < 2 || countSpecialChars === undefined) result.push('minSpecialChars')

    if (ValidationBuild.validationNoRepeted(password)) result.push('noRepeted')

    return result
  }

  private static validationSpecialChars (password: string): number {
    const auxSpecialChars = '!@#$%^&*()-+\\/{}[]'
    return password.split('').filter((char) => auxSpecialChars.includes(char)).length
  }

  private static validationNoRepeted (password: string): boolean {
    for (let i = 0; i < password.length; i++) {
      if (password[i] === password[i + 1]) return true
    }
    return false
  }
}
