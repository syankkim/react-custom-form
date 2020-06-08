const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/config')
const port = 3030
const cors = require('cors')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
// app.use(cors())

app.get('/', (request, response)=>{
    response.json({info : 'Node.js, Postgres API'})
})

app.get('/users', db.getUsers)

app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})