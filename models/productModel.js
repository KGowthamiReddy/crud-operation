const mongoose = require('mongoose');
const { type } = require('os');
const connect = mongoose.connect('mongodb://localhost:27017/Product-details');

//check database connected or not
connect.then(() => {
    console.log(`Database connected successfully`);
})
    .catch(() => {
        console.log(`Database can not be created`);
    })


const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },

        quantity: {
            type: Number,
            required: true,
            default: 0,
        },

        price: {
            type: Number,
            required: true,
            default: 0,
        },

        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);


// collection part
const Product = new mongoose.model('products', ProductSchema);

module.exports = Product;