'use strict';

const express = require('express'),
      app = express ();

let port = process.env.port || 3000

app.set('view engine', 'pug');
app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.render('index');
});

app.listen(port, (err)=>{
  if(err){
    console.log(`Hubo un error en la conexion ${err.message}`);
  }
  else{
    console.log(`Conexion establecida, escuchando en el puerto ${port}`);
  }
});
