//importamos la libreria express
const express = require('express');
//importamos el router desde express
const router = express.Router();

router.get('/:categoryId/products/:ProductId',(req,res)=>{
  const {categoryId,ProductId} = req.params
  res.json({
    categoryId,
    ProductId
  })
})

module.exports = router;
