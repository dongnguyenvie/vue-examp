const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname)+"/dist"))
// app.use('/dist',express.static(__dirname + "/dist"));

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(PORT, function(){
    console.log('start...', PORT)
})