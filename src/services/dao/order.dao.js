import MongoContainer from '../mongoContainer.js'
import OrderModel from '../../models/Orders.model.js'

class OrderDAO extends MongoContainer {
    constructor() {
        super(OrderModel)
    }
    async getOrders(email) {
        const ordenes = await this.model.find({email: email})
        return ordenes
    }
}

export default OrderDAO