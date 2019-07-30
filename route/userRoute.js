const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const route = express.Router();
const userControler = require('../controller/userContriler');


const app = express()

route.get('/showuser' , userControler.showUser);
route.get('/showProduct' , userControler.showProduct);


route.post('/adduser' , userControler.addUser);
route.post('/addProduct' , userControler.addProduct);


module.exports = route;