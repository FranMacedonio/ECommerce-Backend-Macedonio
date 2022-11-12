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
    async deleteCarrito(cartEmail) {
        await this.model.updateOne(
            {email: cartEmail},
            {$set: {items: []}}
        )
    }
}

export default CartDAO