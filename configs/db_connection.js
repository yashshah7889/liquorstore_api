var mysql = require('mysql2');
const dbCredentials = require('./DbCredentials.json');
const db = {};

var Sequelize = require('sequelize');
var sequelize = new Sequelize( dbCredentials.database,dbCredentials.user,dbCredentials.password,{
    host: dbCredentials.host,
    dialect: 'mysql',
    operationalAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;