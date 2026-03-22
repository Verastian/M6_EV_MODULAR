import app from './src/app.js'
import { env } from './src/config/env.config.js'
import { Logger } from './src/utils/logger.util.js'

const logger = new Logger('SERVER')

app.listen(env.port, () => {
    logger.info(`Servidor corriendo en http://localhost:${env.port}`)
    logger.info(`Entorno: ${env.env}`)
})