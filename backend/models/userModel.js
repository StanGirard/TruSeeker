import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserModel = new Schema({
    pseudo: {type: String, required: true},
    password: {type: String, required: true}
})

export default mongoose.model('userModel', UserModel)
