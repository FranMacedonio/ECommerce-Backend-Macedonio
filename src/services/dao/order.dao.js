import MongoContainer from '../mongoContainer.js'
import OrderModel from '../../models/Orders.model.js'

class OrderDAO extends MongoContainer {
    constructor() {
        super(OrderModel)
    }
}

export default OrderDAO