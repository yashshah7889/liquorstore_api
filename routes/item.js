const express = require('express');
const items = express.Router();   //if have many routes in specific domain so to specify same path
const Products = require('../models/UserAuth').products;
const cors = require('cors');

items.use(cors());

items.post('/items',(req,res) =>{

    let pname = req.body.pname;
    let brand = req.body.brand;

    if
    Products.findAll({
        where: { brand : brand }
    }).then(async(product)=>{

    }

    )

});





module.exports = items;