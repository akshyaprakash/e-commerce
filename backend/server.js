// commonJS
const express = require('express')

const products = require('./data/products')

//initialize variable called app
const app = express()

//All i want do is take that response object call and send something to client
app.get('/', (req, res) => {
  res.send('API is running ....')
})
app.get('/api/products', (req, res) => {
  res.json(products)
})
//single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

// and listen on port 5000
app.listen(5000, console.log('Server running on port 5000'))

// res.json is going to convert it to the json content type.
