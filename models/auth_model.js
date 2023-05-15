const { DataTypes } = require('sequelize');
const sequelize = require('../dba/dba');

const User = sequelize.define('User', {
  // Model attributes are defined here
  user_uuid: {
    type: DataTypes.STRING(36),
    allowNull: false,
    primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});


module.exports = {User}