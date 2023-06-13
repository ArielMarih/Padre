var express = require("express");
var authController = require("../controllers/auth_controller");
var router = express.Router();

router.post('/doLogin', authController.login);

module.exports =  router;