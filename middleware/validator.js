var { check, validationResult } = require('express-validator');

const createUserValidator = [
    check("user_name")
    .notEmpty().withMessage("Ingrese el nombre de usuario")
    .isLength({max: 150}).withMessage("El nombre de usuario excede el largo permitido (150)").escape(),
    check("user_password")
    .notEmpty().withMessage("Ingrese la contraseña").escape(),
    (req, res, next) => {

        let errors = validationResult(req);

        if(errors.isEmpty()){
            next();
        }
        else{
            res.status(400).json({
                status:400,
                data: errors.array()
            })
        }

    }
]

const login = [
    check("user_name")
    .notEmpty().withMessage("Ingrese el nombre de usuario").escape(),
    check("user_password")
    .notEmpty().withMessage("Ingrese la contraseña").escape(),
    (req, res, next) => {

        let errors = validationResult(req);

        if(errors.isEmpty()){
            next();
        }
        else{
            res.status(400).json({
                status:400,
                data: errors.array()
            })
        }

    }
]




module.exports = { createUserValidator, login}
