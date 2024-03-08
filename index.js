
import express from 'express'
import { conectarDB } from './src/db/db.js'
import clientesRouter from './src/routes/clientes.js'
import vehiculosRouter from './src/routes/vehiculo.js'
import ventasRouter from './src/routes/venta.js'
import vendedorRoutes from './src/routes/vendedor.js'
import devolucionesRoutes from './src/routes/devoluciones.js'
import rateLimit from "express-rate-limit";

const app = express()
const puerto = process.env.PORT || 4000

const accountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 6, // limita cada IP a 6 peticiones por el tiempo definido con "windowMs"
    message: "Demasiadas peticiones realizadas, intenta despues de 1 hora"
  });
  
conectarDB()

app.use(express.json())

app.use('/api/clientes', accountLimiter, clientesRouter)
app.use('/api/vehiculos', accountLimiter, vehiculosRouter)
app.use('/api/ventas', accountLimiter, ventasRouter)
app.use('/api/vendedor', accountLimiter, vendedorRoutes)
app.use('/api/devoluciones', accountLimiter, devolucionesRoutes)

app.listen(puerto, () => {
    console.log('Servidor corriendo en puerto', puerto)
})

