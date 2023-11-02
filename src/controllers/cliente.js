import Clientes from "../models/Cliente.js";

const getClientes = async (req, res) => {
  try {
    const clientes = await Clientes.find();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error",
    });
  }
};

const getCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Clientes.findById(id)
    .populate({
      path: 'compras',
      select: '-cliente'
    })

    if (!cliente)
      return res.status(404).json({
        msg: "No se encontró el cliente",
      });


    return res.status(200).json({
      msg: "Cliente encontrado",
      cliente
    });
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error",
      error: error.message,
    });
  }
};

const createCliente = async (req, res) => {
  const { nombre, apellidos } = req.body;
  
  try {
    const cliente = await Clientes.create({
      nombre,
      apellidos,
    });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error",
    });
  }
};

const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellidos } = req.body;
  try {
    const cliente = await Clientes.findByIdAndUpdate(id, {
      nombre,
      apellidos,
    });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error",
    });
  }
};

const deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Clientes.findByIdAndDelete(id);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error",
    });
  }
};

export default {
    getClientes,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente,
};
