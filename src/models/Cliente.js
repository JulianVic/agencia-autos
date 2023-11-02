import { Schema, model } from "mongoose";

const clienteSchema = new Schema(
  {
    nombre: String,
    apellidos: String,
    compras: [
      {
        type: Schema.Types.ObjectId,
        ref: "Venta",
      },
    ],
  },
  { versionKey: false }
);

const Cliente = model("Cliente", clienteSchema, "cliente");

export default Cliente;
