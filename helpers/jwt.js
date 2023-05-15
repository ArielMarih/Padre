var jwt = require("jsonwebtoken");


const generateJwt = (user) =>{
    let token = jwt.sign(user, process.env.secretKey, {expiresIn: '2h'});

    return token
}


module.exports = {generateJwt};