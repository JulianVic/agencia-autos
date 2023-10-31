import mongoose, {Schema} from "mongoose";

const vehiculoSchema = new Schema({
    modelo: {
        type: String
    },
    anio: {
        type: Number
    },
    color: {
        type: String,
    },
    precio: {
        type: Number
    },
    estado: {
        type: String,
        enum: ['Nuevo', 'Usado'],
    }
});

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema, 'vehiculo');    

export default Vehiculo;M