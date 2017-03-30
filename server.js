var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', (req, res) =>{
  res.send('hola mundo')
})

app.listen(3000, (err)=>{
  if(err){
    console.log('hubo un error en la conexion');
  }
  else {
    console.log('conexion establecida, escuchando en el puerto 3000')
  }

})
