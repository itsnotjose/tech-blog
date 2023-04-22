const Sequelize = require('sequelize');
const { config } = require('dotenv');

config();

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: true
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.MYSQL_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      logging: true
    }
  );
}

module.exports = sequelize;

