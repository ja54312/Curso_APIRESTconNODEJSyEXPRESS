//importamos la libreria express
const express = require ('express')
//importamos cors libreria para habilitar que cualquier dominio pueda conectarse
const cors = require('cors');
//importamos la funcion router appi
const routerApi = require ('./routes')
//importamos los middlewares
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
//creamos la app
const app =  express()
//puerto donde quieres lanzar tu app primero es la variable de entorno para prod y si no el puerto 3000
const port = process.env.PORT || 3000;

app.use(express.json())
//variable donde ingresamos solo los dominios que permitimos ingresar a nuestra api
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

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
