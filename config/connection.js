const Sequelize = require('sequelize');
const { config } = require('dotenv');

config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;
let sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: 'mysql'
});

module.exports = sequelize;


