require('dotenv').config();

const Sequelize = require('sequelize');

module.exports = sequelize;

module.exports = {
    development: {
      username: 'root',
      password: 'Welcome3',
      database: 'ecommerce_db',
      host: 'localhost',
      dialect: 'mysql'
      dialectOptions: {
        decimalNumbers: true,
      }}}
