
import {Router} from "express"
import vehiculoController from "../controllers/vehiculo.js"

const router = Router()

router.get("/", vehiculoController.obtenerVehiculos)
router.post("/", vehiculoController.createVehiculo)
router.put("/:id", vehiculoController.updateVehiculo)
router.delete("/:id", vehiculoController.deleteVehiculo)

export default router
