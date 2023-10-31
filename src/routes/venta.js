
import {Router} from "express"
import ventaController from "../controllers/venta.js"

const router = Router()

router.get("/", ventaController.obtenerVenta)

export default router
