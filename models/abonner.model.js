const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user.model')

const Abonner = sequelize.define('abonner', {
    // Model attributes are defined here
    id_uti: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        // allowNull defaults to true
    },
    id_uti_UTILISATEUR: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,

    },
}, {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
});
module.exports = Abonner;