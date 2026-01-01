
const db = require('./config/db.js')
const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {
    res.send('Hello from the backend')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

