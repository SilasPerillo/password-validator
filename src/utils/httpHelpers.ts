export const ok = (data: string[]) => {
  return {
    statusCode: 200,
    message: {
      verify: true,
      noMatch: data
    }
  }
}

export const unauthorized = (message: string[]) => ({
  statusCode: 401,
  message: {
    verify: false,
    noMatch: message
  }
})
