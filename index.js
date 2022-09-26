//importamos la libreria express
const express = require ('express')
//importamos la funcion router appi
const routerApi = require ('./routes')
//creamos la app
const app =  express()
//puerto donde quieres lanzar tu app
const port = 3000;
//agregar una ruta
app.get('/',(req,res)=>{
  res.send('Hola mi server en express')
})

app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola soy una nueva ruta')
})
//le pasamos la app a router appi
routerApi(app);

app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})
