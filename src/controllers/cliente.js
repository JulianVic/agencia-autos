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
  try {
    const cliente = await Clientes.findById(req.params.id);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error",
    });
  }
};

const createCliente = async (req, res) => {
  const { nombre, apellido } = req.body;
  try {
    const cliente = await Clientes.create({
      nombre,
      apellido,
    });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error",
    });
  }
};

const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido } = req.body;
  try {
    const cliente = await Clientes.findByIdAndUpdate(id, {
      nombre,
      apellido,
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
