import MongoContainer from '../mongoContainer.js'
import UserModel from '../../models/User.model.js'
import bcrypt from 'bcryptjs'

class UserDAO extends MongoContainer {
    constructor() {
        super(UserModel)
    }

    async encryptPassword(password) {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    }

    async comparePassword(password) {
        return await bcrypt.compare(password, this.password)
    }
}

export default UserDAO