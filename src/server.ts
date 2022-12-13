import app from './app'

const PORT = process.env.APP_PORT ?? 8080

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

export default server
