var express = require("express");
var path = require("path")
var router = express.Router();

router.get('/', (req, res)=>{
    res.redirect("/home");
})

router.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "views", "home.html"));
})

module.exports =  router;