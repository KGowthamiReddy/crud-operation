const express = require('express');
const app = express();
//const mongoose = require('mongoose');
const product = require('./models/productModel');
const productRoute = require('./routes/productRoute')
const port = 3000;


// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));


// routes
app.use('api/products', productRoute);


app.get('/', (req, res) => {
    res.send('welcome to crud api');
});


app.listen(port, () => {
    console.log(`server started to run at ${port}`);
});