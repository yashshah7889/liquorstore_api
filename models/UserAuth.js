const db = require('../configs/db_connection');
const Sequelize = require('sequelize');

exports.UserAuthentication = db.sequelize.define(
    'product',
    {
        pid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },

        pname: {
            type: Sequelize.STRING,
            allowNull: false
        },

        alcPercent:{
            type: Sequelize.DECIMAL,
            allowNull: false
        },

        size:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        category:{
            type: Sequelize.STRING,
            allowNull: false
        },
        subCategory:{
            type: Sequelize.STRING,
            allowNull: false
        },
        brand:{
            type: Sequelize.STRING,
            allowNull: false
        },
        price:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        pic:{
            type: Sequelize.STRING,
            allowNull: false
        }

    },
    {
        timestamps: false
    }
);