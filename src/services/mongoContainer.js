class MongoContainer {
    constructor(model) {
        this.model = model
    }

    async save(obj) {
        const object = new this.model(obj)
        await object.save()
        return object
    }

    async getObj(id) {
        if(!id) {
            const objects = await this.model.find()
            return objects
        }
        const object = await this.model.find({_id: id})
        return object
    }

    async findEmail(email) {
        const objeto = await this.model.findOne({email: email})
        return objeto
    }

    async editObj(obj, id) {
        const newData = await this.model.updateOne({_id: id}, {$set: obj})
        return newData
    }

    async deleteObj(id) {
        const deleted = await this.model.deleteOne({_id: id})
        return deleted
    }

    async addToCart(cartID, obj) {
        await this.model.findByIdAndUpdate(
            {_id: cartID},
            {$push: {items: obj}}
        )
    }

    async addCant(itemName, cant) {
        await this.model.updateOne(
            {'items.name': itemName},
            {$set: {
                'items.$.cant': cant
            }}
        )
    }
}

export default MongoContainer