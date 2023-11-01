
import {Router} from "express"
import vendedorController from "../controllers/vendedor.js"

const router = Router()

router.get("/", vendedorController.getVendedores)
router.get("/:id", vendedorController.getVendedor)
router.post("/", vendedorController.createVendedor)
router.put("/:id", vendedorController.updateVendedor)
router.delete("/:id", vendedorController.deleteVendedor)

export default router
