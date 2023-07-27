# test-henry-nodejs
Proyecto en NodeJS para realizar un test

# archivos fuentes
Array.js - Archivo donde se implementa el primer ejercicio (fusión de arreglos) \
server.js - Archivo donde se implementan las APIs requeridas \
database.js - Archivo donde se realiza la conexión a una base de datos MariaDB \
file.txt - Archivo de prueba que se uso para la api de lectura de archivo \

# Scripts base de datos
1-create_database_user.sql - Script para crear el usuario de base de datos de aplicacion que se conecta a la basse de datos MariaDB \
2-create_database.sql - Script para crear la base de datos en Maria DB \
3-create_table.sql - Crea la tabla para guardar los datos del usuario \

# APIs
/uploadFile (POST): API que recibe como input un archivo .txt donde se tiene registros de usuarios para guardar en base de datos. Considerar que no ingresa registros repetidos por ID más si se agrega un registro nuevo con un ID nuevo lo registrará en la base de datos (Ver archivo Postman para pruebas).

/getInfo/{id} (GET): API que permite consultar la información de un usuario por su ID. Para la consulta por el id respectivo se debe variar el {id} por el valor. Ejemplo: /getInfo/10 buscará al usuario con ID 10 (Ver archivo Postman para pruebas). 