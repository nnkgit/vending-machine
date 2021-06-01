import * as express from "express"
import * as bodyParser from "body-parser"
import { createConnection } from 'typeorm';
import "reflect-metadata"
import routes from "./routes"
const app = express()
const cors = require('cors')

createConnection()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE')
    res.set('Access-Control-Allow-Headers', 'Content-Type,Accept')
    next()
})
app.use(routes)

app.listen(4000)
