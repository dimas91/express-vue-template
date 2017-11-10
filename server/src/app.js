const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('Hello World! This is an Express template.')
})

var port = process.env.PORT || 8081
app.listen(port)
console.log(`Server started on port ${port}`)