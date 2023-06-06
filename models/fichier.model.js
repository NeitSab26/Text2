const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user.model')

const Fichier = sequelize.define('fichier', {
    // Model attributes are defined here
    id_fich: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        // allowNull defaults to true
    },
    libelle_fich: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
}, {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
});
module.exports = Fichier;