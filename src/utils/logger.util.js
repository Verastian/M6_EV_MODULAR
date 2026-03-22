export class Logger {
    constructor(context = 'APP') {
        this.context = context
    }

    #print(method, message) {
        const formatMessage = `[${method.toUpperCase()}] [${new Date().toISOString()}] [${this.context}] ${message}`
        console[method](formatMessage)
    }

    info(message) {
        this.#print('log', message)
    }

    warn(message) {
        this.#print('warn', message)
    }

    error(message) {
        this.#print('error', message)
    }
}
