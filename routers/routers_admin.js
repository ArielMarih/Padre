var express = require("express");
var authController = require("../controllers/auth_controller");
var path = require("path")
var router = express.Router();

router.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "views", "login.html"));
})

router.post('/doLogin', authController.login);

module.exports =  router;