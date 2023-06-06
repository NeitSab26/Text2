const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user.model')

const Message = sequelize.define('message', {
    // Model attributes are defined here
    id_mess: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        // allowNull defaults to true
    },
    contenu_mess: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_envoie_uti: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_res_uti: {
        type:DataTypes.INTEGER,
        allowNull: false

    }
}, {
    // Other model options go here
    freezeTableName: true,
    timestamps: true,
});
module.exports = Message;