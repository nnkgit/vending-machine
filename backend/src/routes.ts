import { Router } from "express"

import { initExampleData, getApp } from "./controller/AppController"

import { getMachines, getMachineById, buy, addStocks
} from "./controller/MachineController"

const routes = Router()

routes.get("/", getApp)

routes.get("/init-example-data", initExampleData)

routes.get("/machines", getMachines)
routes.get("/machine/:id", getMachineById)

routes.post("/buy", buy)
routes.post("/addstocks", addStocks)

export default routes
