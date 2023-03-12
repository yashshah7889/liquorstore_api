const express = require('express');
const items = express.Router();   //if have many routes in specific domain so to specify same path
const Products = require('../models/UserAuth').products;
const cors = require('cors');

items.use(cors());

items.post('/items',(req,res) =>{

    let pname = req.body.pname;
    let brand = req.body.brand;

    if(brand.length>0){
        Products.findAll({
        where: { brand : brand }
        })
        .then((data)=>{   
            if(data.length>0)
            {
                let dataArray = [];
                data.foreach((productData,index)=>{
                    let pd ={};
                    pd.id=index;
                    pd.pname = productData.pname;
                    pd.alcPercent = productData.alcPercent;
                    pd.size = productData.size;
                    pd.category = productData.category;
                    pd.subcategory = productData.subcategory;
                    pd.brand = productData.brand;
                    pd.price = productData.price;
                    pd.pic = productData.pic;
                    dataArray.push(pd);
                });
                res.status(200).json({ 
                    status: "Success",
                    status_msg: "Data found",
                    dataArray: dataArray
                });
                return true;
            }
            else
            {
                res.status(200).json({ 
                    status: "Success",
                    status_msg: "No data found"
                });
                return true;
            }
        })
        .catch((error)=>{
            console.log("error",error);
            res.status(400).json({ 
                status: "Error",
                status_msg: "Oops! something went wrong in getting data"
            });
            return false;
        });
    }
});
module.exports = items;




module.exports = items;