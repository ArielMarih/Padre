var {Router} = require("express");
var userController = require("../controllers/user_controller");
var authController = require("../controllers/auth_controller")
var validation = require('../middleware/validator')

let routers = Router();

routers.post('/register', validation.createUserValidator ,userController.createUser);
routers.post('/login', validation.login, authController.login);

module.exports = routers;
