import { Vehiculo } from "../models";
const obtenerVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.find();
    res.status(200).json(vehiculos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ha ocurrido un error" });
  }
};

export default {
    obtenerVehiculos,
};