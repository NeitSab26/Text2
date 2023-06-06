const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user.model')

const Post = sequelize.define('post', {
    // Model attributes are defined here
    id_post: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        // allowNull defaults to true
    },
    contenu_post: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_uti: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    // Other model options go here
    freezeTableName: true,
    timestamps: true,
});
module.exports = Post;