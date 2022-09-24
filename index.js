//importamos la libreria express
const express = require ('express')
//importamos la libreria faker que trae informacion aleatoria
const faker = require ('faker')
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

app.get('/products',(req,res)=>{
  const products = [];
  const {size} = req.query
  const limit = size || 10
  for(let index = 0;index < limit;index++){
    products.push({
      name:faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products)
})
//las llamadas normales tienen que ir antes de las dinamicas para no chocar
app.get('/products/filter',(req,res)=>{
  res.send('Yo soy un filter')
})

app.get('/products/:id',(req,res)=>{
  const {id} = req.params
  res.json(
    {
      id,
      name: 'Producto 2',
      price:2000
    }
  )
})

app.get('/categories/:categoryId/products/:ProductId',(req,res)=>{
  const {categoryId,ProductId} = req.params
  res.json({
    categoryId,
    ProductId
  })
})
//parametros query http://localhost:3000/users?limit=10&offset=200
app.get('/users',(req,res)=>{
  const {limit,offset} = req.query
  if(limit && offset) {
    res.json({
      limit,
      offset
    })
  }else{
    res.send('no hay parametros')
  }
})



app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})
