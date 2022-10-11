//importamos la libreria express
const express = require ('express')
//importamos la funcion router appi
const routerApi = require ('./routes')
//importamos los middlewares
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
//creamos la app
const app =  express()
//puerto donde quieres lanzar tu app
const port = 3000;

app.use(express.json())

//agregar una ruta
app.get('/',(req,res)=>{
  res.send('Hola mi server en express')
})

app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola soy una nueva ruta')
})
//le pasamos la app a router appi
routerApi(app);
//Los middlewares de error van despues de la app de router
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})
