import Property from '../models/Property.js'
import PropertyModel from '../models/propertyModel.js'
import { NotFoundError, BadRequestError } from '../utils/errors.util.js'

class PropertyService {

    async listProperties() {
        return await PropertyModel.getAll()
    }

    async getPropertyById(id) {
        if (isNaN(id)) throw new BadRequestError('ID de propiedad inválido')
        const properties = await PropertyModel.getAll()
        const property = properties.find(p => p.id === id)
        if (!property) throw new NotFoundError(`Propiedad con ID ${id} no encontrada`)
        return property
    }

    async addProperty(data) {
        if (!data.name || !data.price) throw new BadRequestError('Nombre y precio son requeridos')
        const properties = await PropertyModel.getAll()
        const id = properties.length > 0 ? properties[properties.length - 1].id + 1 : 1
        const newProperty = new Property(id, data.name, data.type, data.price, data.rooms, data.bathrooms, data.location)
        properties.push(newProperty)
        await PropertyModel.saveAll(properties)
        return newProperty
    }

    async updateProperty(id, data) {
        if (isNaN(id)) throw new BadRequestError('ID de propiedad inválido')
        const properties = await PropertyModel.getAll()
        const index = properties.findIndex(p => p.id === id)
        if (index === -1) throw new NotFoundError(`Propiedad con ID ${id} no encontrada`)
        properties[index] = { ...properties[index], ...data }
        await PropertyModel.saveAll(properties)
        return properties[index]
    }

    async deleteProperty(id) {
        if (isNaN(id)) throw new BadRequestError('ID de propiedad inválido')
        let properties = await PropertyModel.getAll()
        const index = properties.findIndex(p => p.id === id)
        if (index === -1) throw new NotFoundError(`Propiedad con ID ${id} no encontrada`)
        const deletedProperty = properties[index]
        properties = properties.filter(p => p.id !== id)
        await PropertyModel.saveAll(properties)
        return deletedProperty
    }
}

export default new PropertyService()
