const express = require('express')
const app = express()
const port = 80


app.use(express.static('my-app/build'))


app.listen(port, () => console.log('Ready'))