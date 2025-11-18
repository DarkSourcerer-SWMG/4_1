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

//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});