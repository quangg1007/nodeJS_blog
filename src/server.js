require('dotenv').config()
const express = require('express')
// const path = require('path')

const app = express()
const port = process.env.PORT || 8801; 
// const hostname = process.env.HOST_NAME;

const configViewEngine = require('./config/viewEngine.js')
const webRoutes = require('./routes/web.js')

// Config template engine
configViewEngine(app);

// declare routes
app.use('/',webRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})