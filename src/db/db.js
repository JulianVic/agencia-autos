import mongoose from 'mongoose'
import {config} from 'dotenv'
config()

const url = process.env.DB_URL

const conectarDB = async() => {
    try {

        await mongoose.connect(url)
        console.log('Agencia-on')
    } catch (error) {
        console.log(error)
    }
}

export { 
    conectarDB
}