
import express from 'express'
import clientesRouter from './src/routes/clientes.js'
import { conectarDB } from './src/db/db.js'
import vehiculosRouter from './src/routes/vehiculo.js'
import ventasRouter from './src/routes/venta.js'
import vendedorRoutes from './src/routes/vendedor.js'

const app = express()
const puerto = process.env.PORT || 4000

conectarDB()

app.use(express.json())

app.use('/api/clientes', clientesRouter)
app.use('/api/vehiculos', vehiculosRouter)
app.use('/api/ventas', ventasRouter)
app.use('/api/vendedor', vendedorRoutes)

app.listen(puerto, () => {
    console.log('Servidor corriendo en puerto', puerto)
})

