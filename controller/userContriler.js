const bodyParser = require('body-parser')
const {User ,Product} = require('../model/userModel');


exports.showUser = async function(req, res){
    console.log('show')
  try {
      const user = await User.find({})
      .populate("product", "name")
      res.send(user)
  } catch (e) {
      res.status(404).send(e)
  }
}

exports.addUser = async function(req,res){
    console.log('add')
    console.log(req.body);
    const user = new User(req.body);
    //const user = new User({"name" : "abc"});
    try{
      await user.save();
      res.status(200).send({user})
    }catch(e){
        res.status(400).send(e);
    }
}

exports.showProduct = async function(req, res){
    console.log('show product')
  try {
      const product = await Product.find({})
      res.send(product)
  } catch (e) {
      res.status(404).send(e)
  }
}

exports.addProduct = async function(req,res){
    console.log('add product')
    console.log(req.body);
    const product = new Product(req.body);
    //const user = new User({"name" : "abc"});
    try{
      await product.save();
      res.status(200).send({product})
    }catch(e){
        res.status(400).send(e);
    }
}


