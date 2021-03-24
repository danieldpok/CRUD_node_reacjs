var Sequelize = require('sequelize');

const database = new Sequelize(
    'homestead', // name database
    'homestead', // user database
    'secret', // password database
    {
        host: '127.0.0.1',
        dialect: 'mysql' // mariadb / sqlite / postgres
    }
);

database.sync()

module.exports = database;
