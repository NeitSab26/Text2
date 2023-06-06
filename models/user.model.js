const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Message = require('./message.model');
const User = sequelize.define('utilisateur', {
    // Model attributes are defined here
    id_uti: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        // allowNull defaults to true
    },
    nom_uti: {
        type: DataTypes.STRING,
    },
    prenom_uti: {
        type: DataTypes.STRING
    },
    pseudo_uti: {
        type: DataTypes.STRING,

    },
    mail_uti: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_naiss_uti: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    mdp_uti: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    avatar_uti: {
        type: DataTypes.STRING,

    },
}, {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
});
module.exports = User;