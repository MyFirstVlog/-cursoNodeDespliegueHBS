const http = require('http')

http.createServer((req,res)=>{

    //res.writeHead(200,{'Content-Type': 'application/json'}) // el formato de la respuesta de la persona
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv' )
    //res.writeHead(200,{'Content-Type': 'application/csv'})
    const persona = {
        id:1,
        nombre:'alejadnro',
        apellido:'estrada'
    }
    //res.write(JSON.stringify(persona))
    res.write('hola Mundo')
    
    res.end() // es necesario cerrar la respuesta para que el server funcione correctamente
}).listen(8080)

console.log('escuchando en el puerto 8080')