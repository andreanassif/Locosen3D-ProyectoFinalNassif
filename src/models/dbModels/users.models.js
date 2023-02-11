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
    email: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
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