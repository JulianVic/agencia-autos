import Devoluciones from '../models/Devoluciones.js';
import Venta from '../models/Venta.js';
import Cliente from '../models/Cliente.js';

const getDevoluciones = async (req, res) => {
    try{
        const devoluciones = await Devoluciones.find()
        return res.status(200).json({
            msg: "Devoluciones obtenidas",
            devoluciones
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Ocurrío un error al obtener las devoluciones",
            error
        })
    }
}

const getDevolucion = async (req, res) => {
    const { id } = req.params
    try{
        const devolucion = await Devoluciones.findById(id)
        return res.status(200).json({
            msg: "Devolucion encontrada",
            devolucion
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Ocurrío un error al obtener la devolucion",
            error
        })
    }
}

const createDevolucion = async (req, res) => {
    const { id } = req.params;
    try{
        const venta = await Venta.findById(id)
        .populate({
            path: 'cliente',
            select: '_id'
        })
        .populate({
            path: 'vendedor',
            select: '_id'
        })
        .populate({
            path: 'vehiculo',
            select: '_id'
        })

        if(!venta) return res.status(404).json({ msg: "No se encontró la venta" })
        
        const devolucion = await Devoluciones.create({
            vehiculo: venta.vehiculo._id,
            vendedor: venta.vendedor._id,
            cliente: venta.cliente._id
        })

        await Venta.findByIdAndDelete(id)
        await Cliente.findByIdAndUpdate(venta.cliente._id, {
            $pull: {
                compras: id
            }
        })


        
        return res.status(201).json({
            msg: "Devolucion creada",
            devolucion
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Ocurrío un error al crear la devolucion",
            error
        })
    }
}

export default {
    getDevoluciones,
    getDevolucion,
    createDevolucion
}