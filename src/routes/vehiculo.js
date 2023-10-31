
import {Router} from "express"
import vehiculoController from "../controllers/vehiculo.js"

const router = Router()

router.get("/", vehiculoController.obtenerVehiculos)

export default router
