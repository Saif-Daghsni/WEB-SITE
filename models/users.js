import mongoose from 'mongoose';
const usersSchema = new mongoose.Schema({
    name: String ,
    email: String ,
    password : String,
})

const userModel = mongoose.model("users",usersSchema) // This creates a Mongoose model named userModel, based on the usersSchema
// eslint-disable-next-line no-undef
export default userModel;
