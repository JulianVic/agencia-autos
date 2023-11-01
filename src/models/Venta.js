import { Schema, model } from "mongoose";

const ventaSchema = new Schema({
    vehiculo: {
        type: Schema.Types.ObjectId,
        ref: "Vehiculo"
    },
    vendedor: {
        type: Schema.Types.ObjectId,
        ref: "Vendedor"
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: "Cliente"
    }
});

const Venta = model("Venta", ventaSchema, "venta");

export default Venta;