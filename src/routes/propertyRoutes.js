import express from 'express'
import { PropertyController } from '../controllers/propertyController.js'

const router = express.Router()

router.get('/', PropertyController.getAll)
router.get('/:id', PropertyController.getById)
router.post('/', PropertyController.create)
router.put('/:id', PropertyController.update)
router.delete('/:id', PropertyController.remove)

export default router
