import { Schema, model } from "mongoose";

const devolucionSchema = new Schema(
  {
    vehiculo: {
      type: Schema.Types.ObjectId,
      ref: "Vehiculo",
    },
    vendedor: {
      type: Schema.Types.ObjectId,
      ref: "Vendedor",
    },
    cliente: {
      type: Schema.Types.ObjectId,
      ref: "Cliente",
    }
  },
  { versionKey: false }
);
const Devolucion = model("Devolucion", devolucionSchema, "devolucion");

export default Devolucion;
