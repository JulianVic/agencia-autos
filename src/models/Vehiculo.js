import { Schema, model } from "mongoose";

const vehiculoSchema = new Schema(
  {
    modelo: String,
    anio: Number,
    color: String,
    precio: Number,
    estado: {
      type: String,
      enum: ["Nuevo", "Usado"],
    },
  },
  { versionKey: false }
);
const Vehiculo = model("Vehiculo", vehiculoSchema, "vehiculo");

export default Vehiculo;
