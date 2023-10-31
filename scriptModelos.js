import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const ruta = "venta" //nombre de la ruta
const rutaMayuscula = ruta.charAt(0).toUpperCase() + ruta.slice(1).toLowerCase()

const contenidoRuta = `
import {Router} from "express"
import ${ruta}Controller from "../controllers/${ruta}.js"

const router = Router()

router.get("/", ${ruta}Controller.obtener${ruta})

export default router
`

const contenidoController = `
const obtener${rutaMayuscula} = async(req, res) => {

    return res.json({msg: "Obteniendo ${ruta}"})
}
export default { obtener${rutaMayuscula} }
`
const src = path.join(__dirname, "src")
const controllers = path.join(src, "controllers")
const routes = path.join(src, "routes")

const rutaContoller = path.join(controllers, `${ruta}.js`)
const rutaRoutes = path.join(routes, `${ruta}.js`)

const crearModelo = () => {
    fs.writeFileSync(rutaContoller, contenidoController)
    fs.writeFileSync(rutaRoutes, contenidoRuta)

    console.log("Archivos creados satisfactoreamente")
}

crearModelo()