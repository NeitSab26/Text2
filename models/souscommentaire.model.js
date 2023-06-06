const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user.model')

const SousCommentaire = sequelize.define('souscommentaire', {
    // Model attributes are defined here
    id_scom: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        // allowNull defaults to true
    },
    contenu_scom: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    id_com: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
   
}, {
    // Other model options go here
    freezeTableName: true,
    timestamps: true,
});
module.exports = SousCommentaire;