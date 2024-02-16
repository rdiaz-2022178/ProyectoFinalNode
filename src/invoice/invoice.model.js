import { Schema, model } from "mongoose"

const invoiceSchema = Schema({
    buy: {
        type: Schema.Types.ObjectId,
        ref: 'buy',
        require: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        require: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    serialNumber: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    time:{
        type: Date,
        require: true
    }
}, {
    versionKey: false
})

export default model('invoice', invoiceSchema)