const express = require('express');
const login = express.Router();  //new router object to handle requests.
const cors = require('cors');  //cross-origin
 
login.use(cors());

login.post('/login',(req,res) => {
    let emailId = req.body.emailId;
    let password =req.body.password;
    let deviceType = req.body.deviceType;
    let isEmulator = req.body.isEmulator;
    let deviceBrand = req.body.deviceBrand;
    let deviceName = req.body.deviceName;
    let ipAddress = req.body.ipAddress;
    let macAddress = req.body.macAddress;
    let longitude = req.body.longitude;
    let latitude = req.body.latitude;
    let currentCity = req.body.currentCity;
    let currentState = req.body.currentState;
    let currentCountry = req.body.currentCountry;
    let mailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

})