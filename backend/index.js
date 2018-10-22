import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
const db = mongoose.connect('mongodb://localhost:27017/cycom', {useNewUrlParser: true})
const app = express()
const port = process.env.PORT || 5656
import exampleRouter from './routes/exampleRoute'
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({origin:true, credentials:true}))
app.use('/api/example', exampleRouter)
