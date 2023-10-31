const fs = require('fs')
const path = require('path')

const ruta = 'clientes'


const contenidoIndex = `
import express from 'express'
import ${ruta}Router from './src/routes/${ruta}.js'
const app = express()
const puerto = process.env.PORT || 4000

app.use(express.json())

app.use('/api/${ruta}', ${ruta}Router)

app.listen(puerto, () => {
    console.log('Servidor corriendo en puerto', puerto)
})

`

const contenidoRouter = `
import { Router } from 'express'
import ${ruta}Controller from '../controllers/${ruta}.js'

const router = Router()

router.get('/', ${ruta}Controller.get${ruta})

export default router
`

const contenidoController = `
const get${ruta} = (req, res) => {
    console.log({msg: 'Hola mundo'})

    return res.json({msg: 'Hola mundo'})
}

export default {
    get${ruta}
}
`

const RutaCarpetaSrc = path.join(__dirname, 'src')
fs.mkdirSync(RutaCarpetaSrc)

const RutaCarpetaControllers = path.join(RutaCarpetaSrc, 'controllers')
fs.mkdirSync(RutaCarpetaControllers)

const RutaCarpetaRoutes = path.join(RutaCarpetaSrc, 'routes')
fs.mkdirSync(RutaCarpetaRoutes)

const rutaRouter = path.join(RutaCarpetaRoutes, `${ruta}.js`)

const rutaIndex = path.join(__dirname, 'index.js')

const rutaController = path.join(RutaCarpetaControllers, `${ruta}.js`)

function crearProyecto() {
    fs.writeFileSync(rutaIndex, contenidoIndex)
    fs.writeFileSync(rutaRouter, contenidoRouter)
    fs.writeFileSync(rutaController, contenidoController)

    console.log('Archivos creados')
}

crearProyecto()