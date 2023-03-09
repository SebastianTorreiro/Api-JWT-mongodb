const express = require('express')
const app = express()


//Settings
const port = process.env.PORT || 3000

//Middlewares

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Rutas

app.use(require('./routes'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})