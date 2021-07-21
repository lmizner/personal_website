// app.js
var express = require('express')

// Define Express App
var app = express()
var port = process.env.PORT || 8080

// Server Static Assets
app.use(express.static('public'))
app.use(express.static('project1/templates'))
app.use(express.static('project1/statics'))

//Virtual Path Prefix '/static'
app.use('/static', express.static('public'))
app.use('/static', express.static('project1/templates'))
app.use('/static', express.static('project1/statics'))

app.listen(port, () => {
    console.log('Server connected at http://localhost:' + port)
});
