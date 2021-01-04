var express = require('express')

var userRoute = express.Router()


userRoute.route('/')
    .get((req,res)=>{
        res.end("response for get")
    })

    .post((req,res)=>{
        res.end("response for post" ,req.body.name)
    })
    .put((req,res)=>{
        res.end("response for put")
    })
    .delete((req,res)=>{
        res.end("response for delete")
    })


    // userRoute.route('/:userID')
    // .get((req,res)=>{
    //     res.end("response for get/user")
    // })

    // .post((req,res)=>{
    //     res.end("response for post/user")
    // })
    // .put((req,res)=>{
    //     res.end("response for put/user")
    // })
    // .delete((req,res)=>{
    //     res.end("response for delete/user")
    // })



    module.exports = userRoute;