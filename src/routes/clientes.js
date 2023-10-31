
import { Router } from 'express'
import clientesController from '../controllers/clientes.js'

const router = Router()

router.get('/', clientesController.getclientes)

export default router
