const mariadb = require('mariadb');

const pool = 
  mariadb.createPool({
    host: 'localhost', 
    port: 3306,
    user: 'app_user', 
    password: 'Soaint123#',
    database: 'soaint'
  });


module.exports = Object.freeze({
  pool: pool
});
