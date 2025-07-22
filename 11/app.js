const express = require('express');
const app = express();

const userModel = require('./usermodel');


app.get('/', function(req,res){
    res.send('Hello World!');
})

app.get('/create', async (req, res)=>{
   let createduser = await userModel.create({
        name: "harsh",
        username: "harsh123",
        email: "harsh@example.com"
    })
   res.send(createduser);
})

app.get('/update', async (req, res) => {
   let updateduser = await userModel.findOneAndUpdate({username: "harsh123"}, {name: "harsh sir"}, {new: true})
    res.send(updateduser);
})

app.get('/read', async (req, res) => {
    let users = await userModel.findOne();
    res.send(users);
})

app.get('/delete', async (req, res) => {
    let deleteduser = await userModel.findOneAndDelete({username: "harsh123"});
    res.send(deleteduser);
})



app.listen(3000);