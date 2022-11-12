import MongoContainer from '../mongoContainer.js'
import CartModel from '../../models/Cart.model.js'

class CartDAO extends MongoContainer {
    constructor() {
        super(CartModel)
    }
}

export default CartDAO