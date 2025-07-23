const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());

// app.get('/', function(req,res){
//     res.cookie("name", "owais");
//     res.send("done");
// })

// app.get('/read', function(req, res){
//     console.log(req.cookies);
//     res.send("read page");
// })

// app.get('/', function(req,res){
//     bcrypt.genSalt(10, function(err, salt){
//         bcrypt.hash("chacha123", salt, function(err, hash) {
//             // Store hash in your password DB.
//             console.log(hash);
//             res.send("Password hashed successfully");
//         });
//     })
// })

// app.get('/', function(req, res){
//     bcrypt.compare("chacha123", "$2b$10$xgJFeqVab/qChAI/f/6dQOsaAR5xKRAjxAzu7HnpXAlOPk4V6eqFm", function(err, result) {
//     console.log(result); // true if passwords match
// });
// })

app.get('/', function(req, res){
    let token = jwt.sign({email: "owais@example.com"}, "secret");
    res.cookie("token", token);
    console.log(token);
    res.send("JWT token created and cookie set");
})

app.get('/read', function(req, res){
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})

app.listen(3000);