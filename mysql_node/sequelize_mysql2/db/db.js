const sequelize = require('sequelize')
const { Sequelize } = require('sequelize')

const con = new Sequelize('banco_teste', 'root', '151187', {

    host: 'localhost',
    dialect: 'mysql'

})