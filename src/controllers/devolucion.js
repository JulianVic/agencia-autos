import Devoluciones from '../models/devoluciones';

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
    const { vehiculo, vendedor, cliente } = req.body
    try{
        const devolucion = await Devoluciones.create({
            vehiculo,
            vendedor,
            cliente
        })
        return res.status(200).json({
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

export {
    getDevoluciones,
    getDevolucion,
    createDevolucion
}