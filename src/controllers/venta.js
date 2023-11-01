import Venta from "../models/venta.js";

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
    const { vehiculo, vendedor, cliente } = req.body
    try{
        const venta = await Venta.create({
            vehiculo,
            vendedor,
            cliente
        })
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

export default {
    getVentas,
    getVenta,
    createVenta
}