import mongoose from 'mongoose'
const Schema = mongoose.Schema

const exampleModel = new Schema({
    test: {type: String, required: true},
    number: {type: Number, required: true}
})

export default mongoose.model('example', exampleModel)
