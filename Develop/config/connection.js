require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(/Develop/config/connection);

module.exports = sequelize; {
    development: {
      username: 'root',
      password; 'Welcome3',
      database; 'ecommerce_db',
      host; 'localhost',
      dialect; 'mysql'
      ,dialectOptions; {
        decimalNumbers: true,
      }
    }}
