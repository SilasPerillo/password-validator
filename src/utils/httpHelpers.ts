export const ok = (data: string[]) => {
  return {
    statusCode: 200,
    message: {
      verify: true,
      noMatch: data
    }
  }
}

export const badRequest = (message: string[]) => ({
  statusCode: 404,
  message: {
    verify: false,
    noMatch: message
  }
})
