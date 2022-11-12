import { Schema, model } from 'mongoose'

const CartSchema = new Schema({
    email: { type: String, required: true },
    items: [Object]
}, {
    timestamps: true,
    versionKey: false
})

export default model('carts', CartSchema)