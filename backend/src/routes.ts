import { Router, Request, Response } from "express"

import { 
  createUsers,
  createLocations,
  createMachines,
  setMachineLocationPosition,
  getTest,
  createProducts,
  setStocks
} from "./controller/HomeController"

const routes = Router()

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello World test" })
})

routes.get("/create-users", createUsers)

routes.get("/create-locations", createLocations)

routes.get("/create-machines", createMachines)

routes.get("/create-products", createProducts)

routes.get("/set-machine-location-position", setMachineLocationPosition)

routes.get("/set-stocks", setStocks)

routes.get("/test", getTest)



export default routes
