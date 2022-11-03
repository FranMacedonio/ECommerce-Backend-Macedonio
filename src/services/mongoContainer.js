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

    async editObj(obj, id) {
        const newData = await this.model.updateOne({_id: id}, {$set: obj})
        return newData
    }

    async deleteObj(id) {
        const deleted = await this.model.deleteOne({_id: id})
        return deleted
    }
}

export default MongoContainer