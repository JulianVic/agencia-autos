import mongoose, {Schema} from 'mongoose'

const clienteSchema = new Schema({
    nombre: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    compra: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ventas',
    }
    
})

const Cliente = mongoose.model('Cliente', clienteSchema, 'cliente')

export default Cliente