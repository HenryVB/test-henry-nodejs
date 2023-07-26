const http = require("http");
const express = require('express');
const fs = require("fs");
const db = require('./database')
const app = express();


app.get('/getInfo/:id', async (req,res) => {
	try{
			console.log("id: "+req.params.id);
			const sqlQuery = 'SELECT id, nombre, edad, genero FROM tbl_usuario WHERE id=?';
			const result = await db.pool.query(sqlQuery,[req.params.id]);
			
			//if(result > 0)
				res.status(200).json(result);
			//else
				//res.status(404).send('Usuario no existe');
	}
	catch(err){
		res.status(500).send(err.message);
	}
})


/*
function readTxtFile(file,cb){
	
	fs.readFile(file, function (err, data) {
		   
		   if (err) {
			  return cb && cb(err);
		   }
		   
		   try{
			   let splitted = data.toString().split("\r\n");
			   const arrayResult = [];
		  
			   for (let i = 1; i< splitted.length; i++) {
					let objUser = {};
					let splitLine = splitted[i].split(',');
					console.log("Test 1: "+splitted[i]);
					
					objUser["id"] =  splitLine[0];
					objUser["name"] =  splitLine[1];
					objUser["age"] =  splitLine[2];
					objUser["gender"] =  splitLine[3];
					
					console.log(objUser);
					arrayResult.push(objUser);
			   }
			   
			   return cb && cb(null, arrayResult);
			   
		   }catch (err) {
			return cb && cb(err);
		   }		   
		});
}
*/
app.post('/uploadFile',async function (req,res){
	
	console.log("inicio uploadfile");
	

	fs.readFile('file.txt', function (err, data) {
		   if (err) {
			  throw err;
		   }		  
		  let splitted = data.toString().split("\r\n");
		  const arrayUsers = [];
		  
		   for (let i = 1; i< splitted.length; i++) {
			let objUser = {};
			let splitLine = splitted[i].split(',');
			console.log("Test 1: "+splitted[i]);
			
			objUser["id"] =  splitLine[0];
			objUser["name"] =  splitLine[1];
			objUser["age"] =  splitLine[2];
			objUser["gender"] =  splitLine[3];
			
			console.log(objUser);
			arrayUsers.push(objUser);
			
		   }
		   		   
		   for(let i = 0; i < arrayUsers.length; i++){
			   
			   let objUser = arrayUsers[i];
			   const sqlQuery = "INSERT INTO tbl_usuario (id, nombre, edad, genero) VALUES (?,?,?,?)";
			   const result = db.pool.query(sqlQuery, [objUser["id"],objUser["name"],objUser["age"],objUser["gender"]]);
		   }
			
		   res.status(201).send('Registros insertados exitosamente');
		});
		
		
})

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})



app.post('/test', async function (req, res) {
   
   console.log("archivo: "+req.archivo);
   console.log("tamaño:"+req.files.length);
   
   //console.log("archivo: "+req.archivo);
   //console.log(req.files.file.name);
   //console.log(req.files.file.path);
   //console.log(req.files.file.type);
   
   //var file = __dirname + "/" + req.files.file.name;
   
   /*
   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ) {
            console.log( err );
            } else {
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
   */
   
})

