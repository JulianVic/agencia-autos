import Venta from "../models/Venta.js";
import Cliente from "../models/Cliente.js";
import Vehiculo from "../models/Vehiculo.js";
import Vendedor from "../models/Vendedor.js";

const getVentas = async (req, res) => {
    try{
        const ventas = await Venta.find()
        return res.status(200).json({
            msg: "Ventas obtenidas",
            ventas
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Ocurrío un error al obtener las ventas",
            error
        })
    }
};

const getVenta = async (req, res) => {
    const { id } = req.params
    try{
        const venta = await Venta.findById(id)
        return res.status(200).json({
            msg: "Venta encontrada",
            venta
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Ocurrío un error al obtener la venta",
            error
        })
    }
};

const createVenta = async (req, res) => {   
    const { vehiculoID, vendedorID, clienteID } = req.body
    try{
        const vehiculo = await Vehiculo.findById(vehiculoID);
        if(!vehiculo) return res.status(404).json({
            msg: "No se encontró el vehículo"
        });
        const vendedor = await Vendedor.findById(vendedorID);
        if(!vendedor) return res.status(404).json({
            msg: "No se encontró el vendedor"
        });
        const cliente = await Cliente.findById(clienteID);
        if(!cliente) return res.status(404).json({
            msg: "No se encontró el cliente"
        });
        

        const venta = await Venta.create({
            vehiculo,
            vendedor,
            cliente
        })

        cliente.compras.push(venta._id)
        await cliente.save()
        
        return res.status(200).json({
            msg: "Venta creada",
            venta
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Ocurrío un error al crear la venta",
            error
        })
    }
};

const putPago = async(req, res) => {
    const { id } = req.params

    try{
        const venta = await Venta.findById(id)
        if(!venta) return res.status(404).json({
            msg: "No se encontró la venta"
        })
        const ventaActualizada = await Venta.findByIdAndUpdate(id, { pagado: true });
        return res.status(200).json({
            msg: "Venta actualizada",
            ventaActualizada
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Ocurrío un error al obtener la venta",
            error
        })
    }
}

export default {
    getVentas,
    getVenta,
    createVenta,
    putPago
}