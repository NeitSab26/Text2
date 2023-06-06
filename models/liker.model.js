const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user.model')

const Liker = sequelize.define('liker', {
    // Model attributes are defined here
    id_post: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    id_uti:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
    }
}, {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
});
module.exports = Liker;