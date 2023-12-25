const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
 
class Server{
    constructor(){
        this.app = express()
        this.PORT = process.env.PORT || 5000
        this.HOST = process.env.HOST || '0.0.0.0'
        this.paths = {
            waterJugRoute:"/",
        }

        
        this.middlewares()

        //my app's routes
        this.routes()

 
    }
    middlewares(){
        // it allows to read data from the formulary
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:true}))
    }

    routes(){
        // settings routes
        this.app.use(this.paths.waterJugRoute, require("../routes/waterJugRoute.js"))

    }
 
    listen(){
        // run the server
        this.app.listen(this.PORT,this.HOST, ()=>{
            console.log("Servidor corriendo en puerto", this.PORT)
        })
      
    }

}


module.exports = Server