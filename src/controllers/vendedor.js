import Vendedor from '../models/Vendedor.js'

const getVendedores = async (req, res) => {
    try{
        const vendedores = await Vendedor.find()
        return res.status(200).json({
            msg: "Vendedores obtenidos",
            vendedores
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Ocurrío un error al obtener los vendedores",
            error
        })
    }

}

const getVendedor = async (req, res) => {
    const { id } = req.params
    try{
        const vendedor = await Vendedor.findById(id).populate("ventas")
        return res.status(200).json({
            msg: "Vendedor encontrado",
            vendedor
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Ocurrío un error al obtener el vendedor",
            error
        })
    }
}

const createVendedor = async (req, res) => {
    const { nombre, apellido } = req
    try{
        const vendedor = await Vendedor.create({
            nombre,
            apellido
        })
        return res.status(200).json({
            msg: "Vendedor creado",
            vendedor
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Ocurrío un error al crear el vendedor",
            error
        })
    }
}

const updateVendedor = async (req, res) => {
    const { id } = req.params
    const { nombre, apellido } = req.body
    try{
        const vendedor = await Vendedor.findByIdAndUpdate(id, {
            nombre,
            apellido
        })
        return res.status(200).json({
            msg: "Vendedor actualizado",
            vendedor
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Ocurrío un error al actualizar el vendedor",
            error
        })
    }
}

const deleteVendedor = async (req, res) => {
    const { id } = req.params
    try{
        const vendedor = await Vendedor.findByIdAndDelete(id)
        return res.status(200).json({
            msg: "Vendedor eliminado",
            vendedor
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Ocurrío un error al eliminar el vendedor",
            error
        })
    }
}

export default {
    getVendedores,
    getVendedor,
    createVendedor,
    updateVendedor,
    deleteVendedor
}