const express = require("express");
const app = express()

app.get("/", function (req, res) {
    res.send("Hello World!!");
});

app.get("/home",function name(req,res) {
    console.log("Welcome to home page");
})




app.listen(3000, function () {
    console.log("Server running on port 3000.....");
});
