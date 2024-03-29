import { Schema, model } from "mongoose"

const buySchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        require: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        require: true
    },
    lot: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        require: true
    }
}, {
    versionKey: false
})

export default model('buy', buySchema)