import express from 'express'

const app = express()

app.use(function(req, res, next){
    console.log("Middleware chala");
    next();
})

app.get("/", function(req, res) {
    res.send("Hello World")
});

app.get("/profile", function(req, res, next){
    return next(new Error("Profile not found"));
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!')
})


app.listen(3000)