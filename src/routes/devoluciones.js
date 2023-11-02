import { Router } from 'express';
import devolucionController from '../controllers/devolucion.js';

const router = Router();

router.get('/', devolucionController.getDevoluciones);
router.get('/:id', devolucionController.getDevolucion);
router.post('/:id', devolucionController.createDevolucion);

export default router;