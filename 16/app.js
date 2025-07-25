const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get('/', function (req, res){
    res.send("Hey");
})

app.get('/create', async function (req, res) {
   let user = await userModel.create({
         username: "JohnDoe",
         age: 25,
         email: "johnDoe@gmail.com"
   }) ;
    res.send(user);
})

app.get('/post/create', async function (req, res) {
 let post = await postModel.create({
    postdata: "This is a post",
    user: "6883c45c082fad67c2b810a5"
   })
   
   let user = await userModel.findOne({_id: "6883c45c082fad67c2b810a5"});
   user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})

app.listen(3000);