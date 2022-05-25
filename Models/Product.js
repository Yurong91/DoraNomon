const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    Stock: Number,

    
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;