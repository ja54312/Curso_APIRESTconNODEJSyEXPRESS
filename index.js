//importamos la libreria express
const express = require ('express')
//creamos la app
const app =  express()
//puerto donde quieres lanzar tu app
const port = 3000;
//agregar una ruta
app.get('/',(req,res)=>{
  res.send('Hola mi server en express')
})

app.listen(port,()=>{
  console.log('Mi port' + port)
})
