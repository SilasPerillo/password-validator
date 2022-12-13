export const ok = (data: string) => {
  return {
    statusCode: 200,
    message: {
      verify: true,
      match: data
    }
  }
}

export const badRequest = (message: string) => ({
  statusCode: 400,
  message: {
    verify: false,
    noMatch: message
  }
})

export const unauthorized = (message: string) => ({
  statusCode: 401,
  message: {
    verify: false,
    noMatch: message
  }
})
