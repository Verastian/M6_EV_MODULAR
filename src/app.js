import express from 'express'
import propertyRoutes from './routes/propertyRoutes.js'
import { errorHandler } from './middlewares/error.middleware.js'

const app = express()

app.use(express.json())

app.use('/properties', propertyRoutes)

app.use(errorHandler)

export default app
