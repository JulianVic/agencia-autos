
import { Router } from 'express'
import clienteController from '../controllers/cliente.js'

const router = Router()

router.get('/', clienteController.getClientes)
router.get('/:id', clienteController.getCliente)
router.post('/', clienteController.createCliente)
router.put('/:id', clienteController.updateCliente)
router.delete('/:id', clienteController.deleteCliente)

export default router