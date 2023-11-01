import {Schema, model} from 'mongoose'

const clienteSchema = new Schema({
    nombre: String,
    apellidos: String,
    compra: {
        type: Schema.Types.ObjectId,
        ref: 'Ventas',
    }
    
})

const Cliente = model('Cliente', clienteSchema, 'cliente')

export default Cliente