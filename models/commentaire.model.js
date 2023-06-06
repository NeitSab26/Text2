const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user.model')

const Commentaire = sequelize.define('commentaire', {
    // Model attributes are defined here
    id_com: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        // allowNull defaults to true
    },
    contenu_com: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_uti: {
        type:DataTypes.INTEGER,
        allowNull: false

    }
}, {
    // Other model options go here
    freezeTableName: true,
    timestamps: true,
});
module.exports = Commentaire;