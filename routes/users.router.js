//importamos la libreria express
const express = require('express');
//importamos el router desde express
const router = express.Router();

//parametros query http://localhost:3000/users?limit=10&offset=200
router.get('/',(req,res)=>{
  const {limit,offset} = req.query
  if(limit && offset) {
    res.json({
      limit,
      offset
    })
  }else{
    res.send('no hay parametros')
  }
});

module.exports = router;
