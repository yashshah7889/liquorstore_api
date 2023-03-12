const express = require('express');
const items = express.Router();   //if have many routes in specific domain so to specify same path
const Products = require('../models/UserAuth').products;
const cors = require('cors');

items.use(cors());

items.post('/items',(req,res) =>{

    

});





module.exports = items;