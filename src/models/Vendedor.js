import { Schema, model } from "mongoose";

const vendedorSchema = new Schema({
    nombre: String,
    apellidos: String,
},
    {versionKey: false}
);

const Vendedor = model("Vendedor", vendedorSchema, "vendedor");

export default Vendedor;