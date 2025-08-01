const express = require('express');
const app = express();
const path = require('path'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("index");
});

app.get('/profile/:username', function(req, res){
    res.send(`Profile of user: ${req.params.username}`);  
});

app.get('/author/:usename/:age', function(req, res){
    res.send(`Author: ${req.params.usename}, Age: ${req.params.age}`);  
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
