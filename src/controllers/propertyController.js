import PropertyService from '../service/propertyService.js'

export class PropertyController {

    static async getAll(req, res, next) {
        try {
            const properties = await PropertyService.listProperties()
            res.status(200).json({
                message: 'Propiedades obtenidas con éxito',
                statusCode: 200,
                data: properties
            })
        } catch (error) {
            next(error)
        }
    }

    static async getById(req, res, next) {
        try {
            const id = parseInt(req.params.id)
            const property = await PropertyService.getPropertyById(id)
            res.status(200).json({
                message: 'Propiedad obtenida con éxito',
                statusCode: 200,
                data: property
            })
        } catch (error) {
            next(error)
        }
    }

    static async create(req, res, next) {
        try {
            const newProperty = await PropertyService.addProperty(req.body)
            res.status(201).json({
                message: 'Propiedad creada con éxito',
                statusCode: 201,
                data: newProperty
            })
        } catch (error) {
            next(error)
        }
    }

    static async update(req, res, next) {
        try {
            const id = parseInt(req.params.id)
            const updatedProperty = await PropertyService.updateProperty(id, req.body)
            res.status(200).json({
                message: 'Propiedad actualizada con éxito',
                statusCode: 200,
                data: updatedProperty
            })
        } catch (error) {
            next(error)
        }
    }

    static async remove(req, res, next) {
        try {
            const id = parseInt(req.params.id)
            const deletedProperty = await PropertyService.deleteProperty(id)
            res.status(200).json({
                message: 'Propiedad eliminada con éxito',
                statusCode: 200,
                data: deletedProperty
            })
        } catch (error) {
            next(error)
        }
    }
}
