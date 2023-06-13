require('dotenv').config();
var express = require("express");
var routers = require("./routers/routers");
var routersUser = require("./routers/routers_user");
var routersAdmin = require("./routers/routers_admin");
var path = require("path");
const sequelize = require('./dba/dba');


var app = express();

var port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'views')));
app.use('/', routers);
app.use('/admin', routersAdmin);
app.use('/user', routersUser);
app.use('/', (req, res) => {
    res.status(200).json({
        status: 200,
        data: "this is working!"
    })
})
app.listen(port, ()=>{
    console.log(`Servidor encendido en el puerto ${port}`);
})