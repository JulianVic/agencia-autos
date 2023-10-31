import mongoose from 'mongoose'

const conectarDB = async() => {
    try {

        await mongoose.connect('mongodb://127.0.0.1:27/agencia-autos')
        console.log('Agencia-on')
    } catch (error) {
        console.log(error)
    }
}

export { 
    conectarDB
}