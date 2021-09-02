const express = require('express')
const app = express()
const port = 8080

app.set('view engine', 'hbs');
// middleware -> ejecucion antes de otra cosa, Servier contenido estatico
app.use(express.static('public'))

app.get('/',(req,res)=>{ //controlador y enviar info al html
    res.render('home', {
        nombre: 'Alejandro Estrada',
        titulo: 'Curso de Node Js'
    })
})
app.get('/elements',(req,res)=>{
    res.sendFile(__dirname + '/public/generic.html')

})
app.get('/generic',(req,res)=>{
    res.sendFile(__dirname + '/public/elements.html')
  
})

/*app.get('/', (req, res) => { Con el middleware de arriba esto de la raiz no se ejecuta
  res.send('Hello World')
})*/

app.get('/hola-mundo', (req, res) =>{
    res.send('Estas en hola mundo')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })