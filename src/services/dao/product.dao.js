import MongoContainer from '../mongoContainer.js'
import ProductModel from '../../models/Product.model.js'

class ProductDAO extends MongoContainer {
    constructor() {
        super(ProductModel)
    }
}

export default ProductDAO