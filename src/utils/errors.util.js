export class AppError extends Error {
    constructor(message, statusCode, details) {
        super(message)
        this.statusCode = statusCode
        this.details = details
    }
}

// Principio Abierto/Cerrado: las clases están abiertas a extensión, cerradas a modificación

export class NotFoundError extends AppError {
    constructor(message, details) {
        super(message || 'Recurso no encontrado', 404, details)
    }
}

export class BadRequestError extends AppError {
    constructor(message, details) {
        super(message || 'Solicitud inválida', 400, details)
    }
}

export class InternalServerError extends AppError {
    constructor(message, details) {
        super(message || 'Error interno del servidor', 500, details)
    }
}
