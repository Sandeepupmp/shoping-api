import express from "express"
import notFound from "./middleware/not-found.mjs"
import errorHandlerMiddleware from "./middleware/error-handler.mjs"
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from "./router/product.mjs"
import 'express-async-errors'

// DON ENV CONFIG

dotenv.config()

// APP DIFINED

const app = express()
const port = process.env.PORT || 3030
app.use(express.json())

// ROUTING PAGES 

app.use('/api/v1/products', router)

// HOME PAGE TESTING

app.get('/',(request, responce)=>{
    responce.send({name:'sugar'})
})


// ERROR HANDLING

app.use(notFound)
app.use(errorHandlerMiddleware)

// CONNECTION 

const start = async ()=>{
 try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(port, console.log(`express working fine ${port}`))
    
 } catch (error) {
    console.log("error", error)
 }
}
start()