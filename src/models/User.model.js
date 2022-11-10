import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String }
}, {
    timestamps: true,
    versionKey: false
})

export default model('users', UserSchema)