import { Request, Response } from "express"
import { Machine } from "../entity/Machine"
import { Product } from "../entity/Product"
import { MachineStockProduct } from "../entity/MachineStockProduct"
import { getRepository } from "typeorm";
import axios from "axios"

export const getMachines = async (request: Request, response: Response) => {
  let machines: any = await getRepository(Machine).find({ relations: ['position', 'position.location', 'machineStockProducts'] })
  const data: any = machines.map(o => {
    let machineStockProducts = o.machineStockProducts
    o.restock = machineStockProducts.filter(obj => obj.stocks < o.min).length
    return o
  })
  return response.json(data)
}

export const getMachineById = async (request: Request, response: Response) => {
  let machines = await getRepository(Machine).findOne(request.params, { relations: ['position', 'position.location', 'machineStockProducts', 'machineStockProducts.product'] })
  return response.json(machines)
}

export const buy = async (request: Request, response: Response) => {
    try {
        const machine = await getRepository(Machine).findOne(request.body.machine_id)
        const product = await getRepository(Product).findOne(request.body.product_id)
        const item = await getRepository(MachineStockProduct).findOne({ where: { machine: machine, product: product} })
        let amount = item.stocks - request.body.amount
        let message = {
            "status": 400,
            "message": "เกิดข้อผิดพลาดไม่สามารถทำรายการได้"
        }
        if (amount < 0) {
            message = {
                "status": 400,
                "message": "สินค้าหมด"
            }
        } else {
            item.stocks = amount
            getRepository(MachineStockProduct).save(item)
            if (amount < machine.min) {
                const querystring = require('querystring');
                const config = { headers: { "Authorization": "Bearer h8Z1sSPUL2Jm9awUu9haHCx1Q9fpYQumoVX7G0afLuf" } };
                const body = querystring.stringify({
                    message: "เครื่อง " + machine.code + " สินค้า " + product.name + " น้อยกว่า " + machine.min + " คงเหลือ " + amount
                })
                axios.post("https://notify-api.line.me/api/notify", body, config).catch(errors => {
                    console.log('error ', errors)
                    message = {
                        "status": 500,
                        "message": errors
                    }
                })
            }
            return response.json(item)
        }
        return response.status(400).json(message)
    } catch (e) {
        return response.status(500).json(e)
    }
}

export const addStocks = async (request: Request, response: Response) => {
    try {
        const machine = await getRepository(Machine).findOne(request.body.machine_id)
        const product = await getRepository(Product).findOne(request.body.product_id)
        const item = await getRepository(MachineStockProduct).findOne({ where: { machine: machine, product: product} })
        let amount = item.stocks + request.body.amount
        let message = {
            "status": 400,
            "message": "เกิดข้อผิดพลาดไม่สามารถทำรายการได้"
        }
        if (amount > machine.max) {
            message = {
                "status": 400,
                "message": "สินค้าเกินจำนวนบรรจุสูงสุด"
            }
        } else {
            item.stocks = amount
            getRepository(MachineStockProduct).save(item)
            return response.json(item)
        }
        return response.status(400).json(message)
    } catch (e) {
        return response.status(500).json(e)
    }
}