import express from 'express'
import verifyRouter from './routers/Verify.router'

const app = express()

app.use(express.json())
app.use('/verify', verifyRouter)

export default app
