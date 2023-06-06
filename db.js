const Sequelize = require('sequelize');
require('dotenv').config({ path: './config/.env' });


const sequelize = new Sequelize('app_rencontre', 'root', `${process.env.PASSWORDDB}`, {
    host: 'localhost',
    dialect: 'mysql', 
    // Autres options de configuration de Sequelize
  });
  module.exports = sequelize;