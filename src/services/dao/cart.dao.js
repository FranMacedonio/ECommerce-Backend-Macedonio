import MongoContainer from '../mongoContainer.js'
import CartModel from '../../models/Cart.model.js'

class CartDAO extends MongoContainer {
    constructor() {
        super(CartModel)
    }

    async deleteItem(cartEmail, itemID) {
        await this.model.findOneAndUpdate(
            {email: cartEmail},
            {$pull: {items: {_id: itemID}}}
        )
    }
}

export default CartDAO