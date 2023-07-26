const mariadb = require('mariadb');

const pool = 
  mariadb.createPool({
    host: 'localhost', 
    port: 3306,
    user: 'app_user', 
    password: 'Soaint123#',
    database: 'soaint',
	connectionLimit: 5
  });

// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool
});

/*
pool.getConnection((err,connection) => {
	if(err){
		
		if(err.code === 'PROTOCOL_CONNECTION_LOST')
			console.error('Database connection lost');
		
		if(err.code === 'ER_CON_COUNT_ERROR')
			console.error('Database has too many connections');
		
		if(err.code === 'ECONNREFUSED')
			console.error('Database connection refused');
	}
	
	if(connection) connection.release();
});
*/
//module.exports= pool;
/*
module.exports={
    getConnection: function(){
      return new Promise(function(resolve,reject){
        pool.getConnection().then(function(connection){
          resolve(connection);
        }).catch(function(error){
          reject(error);
        });
      });
    }
  }*/