const express = require('express')

const routes = express.Router()

routes.get('/api', (req, res) => (
  res.send('Hello Server API!')
))

module.exports = routes