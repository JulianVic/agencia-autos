import mongoose, {Schema} from 'mongoose'

const clienteSchema = new Schema({
    nombre: {

    },
    apellidos: {

    },
    
})

const Cliente = mongoose.model('Cliente', clienteSchema, 'cliente')

export default Cliente