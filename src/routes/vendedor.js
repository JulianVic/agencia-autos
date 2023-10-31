
import {Router} from "express"
import vendedorController from "../controllers/vendedor.js"

const router = Router()

router.get("/", vendedorController.obtenerVendedor)

export default router
