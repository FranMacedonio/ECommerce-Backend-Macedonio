import { Schema, model } from 'mongoose'

const OrdersSchema = new Schema({
    email: { type: String, required: true },
    items: [Object],
    city: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    finalPrice: {type: String, required: true}
}, {
    timestamps: true,
    versionKey: false
})

export default model('orders', OrdersSchema)