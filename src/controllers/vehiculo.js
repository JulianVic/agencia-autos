import { Vehiculo } from "../models";

const obtenerVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.find();
    return res.status(200).json(vehiculos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Ocurrió un error" });
  }
};

const createVehiculo = async (req, res) => {
  const { modelo, año, color, precio, estado } = req.body;
  try {
    const vehiculo = await Vehiculo.create({
      modelo,
      año,
      color,
      precio,
      estado,
    });
    return res.status(201).json(vehiculo);
  }catch{
    console.log(error);
    return res.status(500).json({ msg: "Ocurrió un error" });
  }
}

const updateVehiculo = async (req, res) => {
  const { id } = req.params;
  const { modelo, año, color, precio, estado } = req.body;
  try {
    const vehiculo = await Vehiculo.findByIdAndUpdate(id, {
      modelo,
      año,
      color,
      precio,
      estado,
    });
    return res.status(201).json(vehiculo);
  }catch{
    console.log(error);
    return res.status(500).json({ msg: "Ocurrió un error" });
  }
}

const deleteVehiculo = async (req, res) => {
  const { id } = req.params;
  try {
    await Vehiculo.findByIdAndDelete(id);
    return res.status(204).json();
  }catch{
    console.log(error);
    return res.status(500).json({ msg: "Ocurrió un error" });
  }
}

export { obtenerVehiculos, createVehiculo, updateVehiculo, deleteVehiculo };