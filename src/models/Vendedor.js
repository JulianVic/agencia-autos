const { Schema, model } = require("mongoose");

const vendedorSchema = new Schema({
    nombre: String,
    apellido: String,
    ventas: [{
        type: Schema.Types.ObjectId,
        ref: "Venta"
    }]
});

const Vendedor = model("Vendedor", vendedorSchema, "vendedor");

export default Vendedor;