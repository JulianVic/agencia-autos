
import {Router} from "express"
import ventaController from "../controllers/venta.js"

const router = Router()

router.get("/", ventaController.getVentas);
router.get("/:id", ventaController.getVenta);
router.post("/", ventaController.createVenta);
router.put("/:id", ventaController.putPago);

export default router
