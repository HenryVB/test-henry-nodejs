const http = require("http");
const express = require('express');
const db = require('./database')
const app = express();
const fileupload =  require("express-fileupload");

app.use(fileupload());


app.get('/getInfo/:id', async (req,res) => {
	try{
			
			const sqlQuery = 'SELECT id, nombre, edad, genero FROM tbl_usuario WHERE id=?';
			
			
			const result = await db.pool.query(sqlQuery,[req.params.id]);
			
			
			if(result.length > 0){
				res.status(200).json(result);
			}
			else{
				res.status(404).send('Usuario no existe');
			}
			
	}
	catch(err){
		res.status(500).send(err.message);
	}
})



app.post('/uploadFile',async function (req,res){
	
	
	if(req.files){
	   
	  
			let data = req.files.archivo.data;
			let splitted = data.toString().split("\r\n");
			  const arrayUsers = [];
			  
			   for (let i = 1; i< splitted.length; i++) {
				let objUser = {};
				let splitLine = splitted[i].split(',');
				
				objUser["id"] =  splitLine[0];
				objUser["name"] =  splitLine[1];
				objUser["age"] =  splitLine[2];
				objUser["gender"] =  splitLine[3];
				
				arrayUsers.push(objUser);
			   }
			   
				for(let i = 0; i < arrayUsers.length; i++){
				   
				   let objUser = arrayUsers[i];
				   const sqlQuery = "INSERT INTO tbl_usuario (id, nombre, edad, genero) VALUES (?,?,?,?)";
				   db.pool.query(sqlQuery, [objUser["id"],objUser["name"],objUser["age"],objUser["gender"]])
				   .then(result => console.log("Registro con ID %s guardado con exito",objUser["id"]))
				   .catch(error => console.error("Error al guardar registro con ID %s: \n%s ",objUser["id"],error.message));
			   }
				
			   res.status(201).send('Registros procesados correctamente');
				  
   }
		
})

app.get('/', function (req, res) {
   res.send('Test NodeJS is UP');
})


var server = app.listen(8081, function () {
   var port = server.address().port
   console.log("Server app listening at port %s",port)
})

