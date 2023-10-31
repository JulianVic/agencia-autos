
import { Router } from 'express'
import clientesController from '../controllers/clientes.js'

const router = Router()

router.get('/', clientesController.getClientes)
router.get('/:id', clientesController.getCliente)
router.post('/', clientesController.createCliente)
router.put('/:id', clientesController.updateCliente)
router.delete('/:id', clientesController.deleteCliente)

export default router