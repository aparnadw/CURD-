const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type : String
    },
    product : {
        type: Schema.Types.ObjectId,
        ref : "Product"
    }
});

const productSchemma = new Schema({
    name: {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
});

const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', productSchemma);

module.exports = {User, Product}
