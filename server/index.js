const express = require('express')
const routes = require('./router')
const app =  express()
require('./config/db')

app.use(express.json())
app.use(routes)

app.listen(3333)
