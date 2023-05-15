var { User } = require("../models/auth_model");
var bcrypt = require("bcrypt");
var { v4: uuidv4 } = require('uuid');


const createUser = async (req, res) =>{

    let pass = await bcrypt.hash(req.body.user_password, 10);

    await User.create({user_uuid: uuidv4(), user_name: req.body.user_name, user_password: pass});

    res.status(200).json({
        status: 200,
        data: "Usuario creado"
    })
}


module.exports = { createUser}
