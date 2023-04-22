const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE_URL, // Use the DATABASE_URL provided by Railway
  {
    dialect: 'mysql',
    protocol: 'mysql',
    logging: true, // Set to true to log SQL queries
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Disable SSL verification for now
      }
    }
  }
);

module.exports = sequelize;


