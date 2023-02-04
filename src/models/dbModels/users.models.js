import mongoose from 'mongoose'

const usersCollection = 'users'

mongoose.set('strictQuery', true)

const userSchema = new mongoose.Schema({
    name:String,
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    correo: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    
},
{
    timestamps:true
});

export const UserModel = mongoose.model(usersCollection,userSchema)