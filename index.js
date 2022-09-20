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

app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola soy una nueva ruta')
})

app.get('/productos',(req,res)=>{
  res.json({
    name: 'Producto 1',
    price:1000
  })
})

app.listen(port,()=>{
  console.log('Mi port' + port)
})
