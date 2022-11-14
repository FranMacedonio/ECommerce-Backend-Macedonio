import MongoContainer from '../mongoContainer.js'
import ProductModel from '../../models/Product.model.js'

class ProductDAO extends MongoContainer {
    constructor() {
        super(ProductModel)
    }

    async findMarca(marca) {
        const objeto = await this.model.find({brand: marca})
        return objeto
    }

    async findCategory(categoria) {
        const objeto = await this.model.find({category: categoria})
        return objeto
    }

    async editar(id, obj) {
        await this.model.findOneAndUpdate({_id: id}, obj)
    }
}

export default ProductDAO