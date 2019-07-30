const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {User ,Product} = require('./model/userModel');
const UserRoute = require('./route/userRoute');

const app = express()
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(UserRoute)

mongoose.connect('mongodb://localhost:27017/testMongo', {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(result => {
  app.listen(port, () => {
    console.log('server is up on port', port)
})
}).catch(err => {
    console.log(err);
});

//   app.get('/data', async function(req, res){
//       console.log('show')
//     try {
//         const user = await User.find({})
//         res.send(user)
//     } catch (e) {
//         res.status(404).send(e)
//     }
//   })

//   app.post('/data', async function(req,res){
//       console.log('add')
//       console.log(req.body);
//       const user = new User(req.body);
//       //const user = new User({"name" : "abc"});
//       try{
//         await user.save();
//         res.status(200).send({user})
//       }catch(e){
//           res.status(400).send(e);
//       }
// })