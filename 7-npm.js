/* Npm => Node Package Manager */

// Para instalar un paquete de manera local podemos usar el siguiente comando
// npm i <packageName> 

// Si queremos que el paquete sea solo para uso en ambiente de desarrollo le agregaremos un -D
// npm i <packageName> -D

// Al subir el proyecto a git, no subiremos la carpeta node_modules ya que es muy pesada
// Luego de descargar el proyecto en otro equipo o servido, tendremos que ejemutar el siguiente comando, el que 
// nos permitirá istalar todas las dependecias declaradas en el archivo package.json
// npm install

// Dentro del paquete package.json podemos declarar comandos a ejecutar automaticamente. Esto lo debemos hacer dentro
// de la etiqueta script. Ejemplo
// "scripts": {
//     "start": "node app.js",
//     "dev": "nodemon app.js"
// },

// Finalmente, para desintallar un packege, debemos ejecutar el comando
// npm uninstall <packageName>


// También podemos instalar package de manera global para poder acceder a los paquetes desde cualquier proyecto del equipo
// sudo npm install -g nodemon