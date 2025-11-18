'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const radius = parseFloat(req.params.r);
  
  if (isNaN(radius) || radius < 0) {
    return res.status(400).json({ error: 'Invalid radius. Must be a non-negative number.' });
  }
  
  const area = Math.PI * radius * radius;
  const result = {
    radius: radius,
    area: area
  };
  
  res.json(result);
});

app.get('/math/rectangle/:width/:height',(req,res)=>{
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);

  if(isNaN(width)||isNaN(height)||width<=0||height<=0){
    return res.status(400).json({error:'Invalid dimensions'});
  }
  const area = width*height;
  const perimeter = 2*(width+height);
  res.json({
    area:area,
    perimeter:perimeter
  });
});


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});