var { User } = require("../models/auth_model");
var jwt = require("../helpers/jwt");
var bcrypt = require("bcrypt");


const login = async (req, res) => {
    try {
        let user = await User.findOne({ where: { user_name: req.body.user_name } });

        if (user == null) {
            return res.status(401).json({
                status: 401,
                data: "Usuario no existe"
            })
        }

        let find = await bcrypt.compare(req.body.user_password, user.user_password);

        if (find == false) {
            return res.status(401).json({
                status: 401,
                data: "Acceso denegado"
            })
        }
        let token = jwt.generateJwt(user.dataValues);

        res.json({
            status: 200,
            data: "Log In!!",
            token: token
        })

    } catch (error) {
        res.json({
            status: 500,
            data: error
        })
    }
}


module.exports = { login };