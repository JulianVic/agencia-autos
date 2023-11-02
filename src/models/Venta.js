import { Schema, model } from "mongoose";

const ventaSchema = new Schema(
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
    },
    pagado: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);
const Venta = model("Venta", ventaSchema, "venta");

export default Venta;
