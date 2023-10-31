import { Schema, model } from "mongoose";

const devolucionSchema = new Schema({
    ventas: [{
        type: Schema.Types.ObjectId,
        ref: "Venta"
    }]
});

const Devolucion = model("Devolucion", devolucionSchema, "devolucion");

export default Devolucion;