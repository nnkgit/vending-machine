import { Request, Response } from "express"
import { Role } from "../entity/Role"
import { User } from "../entity/User"
import { Location } from "../entity/Location"
import { Position } from "../entity/Position"
import { Machine } from "../entity/Machine"
import { Product } from "../entity/Product"
import { MachineStockProduct } from "../entity/MachineStockProduct"
import { getRepository } from "typeorm";

export const createUsers = async (request: Request, response: Response) => {
  const roleAdmin = new Role()
  roleAdmin.name = "admin"
  roleAdmin.slug = "admin"
  roleAdmin.status = "y"
  await getRepository(Role).save(roleAdmin);

  const roleUser = new Role()
  roleUser.name = "user"
  roleUser.slug = "user"
  roleUser.status = "y"
  await getRepository(Role).save(roleUser);

  const admin = await getRepository(Role).findOne({ where : { slug: 'admin' } })
  const user1 = new User()
  user1.full_name = "Naris Norkaew"
  user1.username = "nnkthai"
  user1.password = "n123456"
  user1.email = "nnkthai@gmail.com"
  user1.status = 'y'
  user1.role = admin
  await getRepository(User).save(user1)
  const user2 = new User()
  user2.full_name = "Pimporn Audsurin"
  user2.username = "pimorn"
  user2.password = "n123456"
  user2.email = "ult_amp@hotmail.com"
  user2.status = 'y'
  user2.role = admin
  await getRepository(User).save(user2);
  const users = await getRepository(User).find({ relations: ["role"] })
  return response.json(users)
}

export const createLocations = async (request: Request, response: Response) => {
  const location1 = new Location()
  location1.name = "บริษัท SCG"
  location1.status = "y"
  await getRepository(Location).save(location1)

  const scg = await getRepository(Location).findOne({ where : { name: 'บริษัท SCG' } })
  const position1 = new Position()
  position1.name = "อาคารสำนักงานใหญ่ 1"
  position1.status = "y"
  position1.location = scg
  await getRepository(Position).save(position1)

  const position2 = new Position()
  position2.name = "อาคารสำนักงานใหญ่ 2"
  position2.status = "y"
  position2.location = scg
  await getRepository(Position).save(position2)

  const location2 = new Location()
  location2.name = "คอนโดลุมพินี"
  location2.status = "y"
  await getRepository(Location).save(location2)

  const lumpini = await getRepository(Location).findOne({ where : { name: 'คอนโดลุมพินี' } })
  const position3 = new Position()
  position3.name = "ชั้น 1"
  position3.status = "y"
  position3.location = lumpini
  await getRepository(Position).save(position3)

  const position4 = new Position()
  position4.name = "ชั้น 7"
  position4.status = "y"
  position4.location = lumpini
  await getRepository(Position).save(position4)

  const location3 = new Location()
  location3.name = "คอนโดสาทร-ราชพฤกษ์"
  location3.status = "y"
  await getRepository(Location).save(location3)

  const sathorn = await getRepository(Location).findOne({ where : { name: 'คอนโดสาทร-ราชพฤกษ์' } })
  const position5 = new Position()
  position5.name = "ชั้น 10"
  position5.status = "y"
  position5.location = sathorn
  await getRepository(Position).save(position5)

  const position6 = new Position()
  position6.name = "ชั้น 30"
  position6.status = "y"
  position6.location = sathorn
  await getRepository(Position).save(position6)

  const locations = await getRepository(Location).find({ relations: ["positions"] })
  return response.json(locations)
}

export const createMachines = async (request: Request, response: Response) => {
  const machine1 = new Machine()
  machine1.code = "AAAA1"
  machine1.min = 10;
  machine1.max = 20;
  machine1.status = "y"
  await getRepository(Machine).save(machine1)
  
  const machine2 = new Machine()
  machine2.code = "BBBB1"
  machine2.min = 10;
  machine2.max = 20;
  machine2.status = "y"
  await getRepository(Machine).save(machine2)

  const machine3 = new Machine()
  machine3.code = "CCCC1"
  machine3.min = 10;
  machine3.max = 20;
  machine3.status = "y"
  await getRepository(Machine).save(machine3)

  const machine4 = new Machine()
  machine4.code = "DDDD1"
  machine4.min = 10;
  machine4.max = 20;
  machine4.status = "y"
  await getRepository(Machine).save(machine4)

  const machine5 = new Machine()
  machine5.code = "EEEE1"
  machine5.min = 10;
  machine5.max = 20;
  machine5.status = "y"
  await getRepository(Machine).save(machine5)

  const machine6 = new Machine()
  machine6.code = "FFFF1"
  machine6.min = 10;
  machine6.max = 20;
  machine6.status = "y"
  await getRepository(Machine).save(machine6)

  const machines = await getRepository(Machine).find()
  return response.json(machines)
}

export const setMachineLocationPosition = async (request: Request, response: Response) => {
  // นำเครื่องไปติดตั้ง
  const machine1 = await getRepository(Machine).findOne({ where : { code: 'AAAA1' } })
  const machine2 = await getRepository(Machine).findOne({ where : { code: 'BBBB1' } })

  const localtion1 = await getRepository(Location).findOne({ where : { name: 'บริษัท SCG' } })
  const position1 = await getRepository(Position).findOne({ where : { location: localtion1, name: 'อาคารสำนักงานใหญ่ 1' } })
  const position2 = await getRepository(Position).findOne({ where : { location: localtion1, name: 'อาคารสำนักงานใหญ่ 2' } })
  machine1.position = position1
  await getRepository(Machine).save(machine1)
  machine2.position = position2
  await getRepository(Machine).save(machine2)

  const machine3 = await getRepository(Machine).findOne({ where : { code: 'CCCC1' } })
  const machine4 = await getRepository(Machine).findOne({ where : { code: 'DDDD1' } })

  const localtion2 = await getRepository(Location).findOne({ where : { name: 'คอนโดลุมพินี' } })
  const position3 = await getRepository(Position).findOne({ where : { location: localtion2, name: 'ชั้น 1' } })
  const position4 = await getRepository(Position).findOne({ where : { location: localtion2, name: 'ชั้น 7' } })
  machine3.position = position3
  await getRepository(Machine).save(machine3)
  machine4.position = position4
  await getRepository(Machine).save(machine4)

  const machine5 = await getRepository(Machine).findOne({ where : { code: 'EEEE1' } })
  const machine6 = await getRepository(Machine).findOne({ where : { code: 'FFFF1' } })

  const localtion3 = await getRepository(Location).findOne({ where : { name: 'คอนโดสาทร-ราชพฤกษ์' } })
  const position5 = await getRepository(Position).findOne({ where : { location: localtion3, name: 'ชั้น 10' } })
  const position6 = await getRepository(Position).findOne({ where : { location: localtion3, name: 'ชั้น 30' } })
  machine5.position = position5
  await getRepository(Machine).save(machine5)
  machine6.position = position6
  await getRepository(Machine).save(machine6)

  const machines = await getRepository(Machine).find({ relations: ['position', 'position.location'] })
  return response.json(machines)
}

export const createProducts = async (request: Request, response: Response) => {

  const product1 = new Product()
  product1.name = "ยาคูลท์"
  product1.price = 8;
  product1.status = "y"
  await getRepository(Product).save(product1)

  const product2 = new Product()
  product2.name = "โค๊ก"
  product2.price = 15;
  product2.status = "y"
  await getRepository(Product).save(product2)

  const product3 = new Product()
  product3.name = "แลคตาซอย"
  product3.price = 10;
  product3.status = "y"
  await getRepository(Product).save(product3)

  const product4 = new Product()
  product4.name = "เอ็มร้อยหาสิบ"
  product4.price = 10;
  product4.status = "y"
  await getRepository(Product).save(product4)

  const product5 = new Product()
  product5.name = "สปอนเซอร์"
  product5.price = 12;
  product5.status = "y"
  await getRepository(Product).save(product5)

  const data = await getRepository(Product).find()
  return response.json(data)
}

export const setStocks = async (request: Request, response: Response) => {
  const machines = await getRepository(Machine).find()
  for (const machine of machines) {
    console.log('machine :: ' + machine.code)
    const products = await getRepository(Product).find()
    for (const product of products) {
      console.log('product :: ' + product.name)
      const machineStockProduct = new MachineStockProduct()
      machineStockProduct.stocks = machine.max
      machineStockProduct.machine = machine
      machineStockProduct.product = product
      await getRepository(MachineStockProduct).save(machineStockProduct)
    }

  }
  return response.json(machines)
}

export const getTest = async (request: Request, response: Response) => {
  const data = await getRepository(Machine).find({ relations: ['position', 'machineStockProducts'] })
  return response.json(data)
}