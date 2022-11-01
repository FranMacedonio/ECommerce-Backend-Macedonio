const { Schema, model } =require('mongoose')

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('products', ProductSchema)