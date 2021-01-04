var http = require('http')
var express = require('express')
var morgan = require('morgan')
var body_parser = require('body-parser')
// Require Routes
//var userRoute = require('./routes/userRoutes.js')
//Host details
var hostname = 'localhost'
var port = 80


//express

var app = express()
app.use(morgan('dev'))
app.use(body_parser.json())
//app.use('/',userRoute)
// app.get('/',(req,res)=>{
//     res.end("Get Applied using /")
// })

// app.post('/',(req,res)=>{
//     res.end("post method")
// })

// app.all('/a',(req,res)=>{
//     res.send("All response")
// })


app.post('/',(req,res)=>{
        res.json(req.body.name)
    // res.json("post response with parameter",req.params.name)
})
var server = http.createServer(app)

server.listen(port,hostname,(msg)=>{
    console.log("Serrver started at http://"+hostname+" : " + port)
})