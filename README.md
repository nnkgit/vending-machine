# vending-machine
For test drinking vending machine system

เป็นการทำแบบง่ายใน local ครับ

Tech ที่ใช้
docker, docker-compose
nodejs ขณะที่ทำใช้ node v12.18.3
admin (frontend) สำหรับ admin ดู monitor ใช้ Vue.js
api (backend) ใช้ Express.js and typeorm สำหรับ จัดการ database

admin รัน port 8080  http://localhost:8080 (มีทั้งหมด 2 หน้า คือ 1.หน้าสำหรับ admin monitor เครื่องว่ามีเครื่องไหน สินค้าน้อยว่ากำหนดหรือไม่ 2.
หน้าเข้าไปดูรายละเอียดของเครื่อง พร้อม ปุ่ม จำลอง การ ซื้อ และ เพิ่ม stock สินค้าของเครื่อง)

api รัน port 4000 http://localhost:4000

ผมสร้างกลุ่ม ชื่อว่า nnkthai-vending-machine ในนี้เป็นเพื่อนกับ line-notify ไว้ สำหรับแจ้งเตือน เวลาซื้อสินค้าแล้วสินค้าน้อยกว่ากำหนดก็จะแจ้งเตือน สามารถส่ง id line เพื่อ invite ได้ที่อีเมลผม nnkthai@gmail.com เดี่ยวผม invite ให้ครับ เบื้องต้น fix token ไว้ใน code ครับ

หมายเหตุสินค้า น้อยกว่า 10 ความจริง สามารถปรับ ได้ ขึ้นอยู่กันว่า ตั้ง min , max ของเครื่องไว้เท่าไรได้ครับ เบื้องต้น ตั้งไว้เป็น 10 เพื่อให้ตรงกับโจทย์ครับ

Step
git clone project

Step
RUN "npm install typeorm -g"
ติดตั้ง typeorm global เพื่อให้สามารถใช้ cli ได้

step
RUN "npm install -g typescript"
ติดตั้ง typescript global เพื่อให้สามารถใช้ cli ได้

Step
RUN "docker-compose up -d" ใน root project
สั่งรัน docker-compose up -d เพื่อสร้าง db สำหรับโปรเจค

Step
RUN "npm install"
รัน npm install ทั้งใน backend และ admin

step
RUN "npm run migration" ใน admin
ครั้งแรกต้องรัน คำสั่งเพื่อสร้าง table migrations และ table schema ของโปรเจคนี้

step
RUN "npm run dev" ใน backend เพื่อรัน api
เพื่อรัน api backend

step
RUN "npm run serve" ใน admin
เพื่อรัน frontend vue.js

step
ยิง postman หรือ browser ที่ url http://localhost:4000/init-example-data
เพื่อ สร้าง example data เพื่อลองใช้งาน

อธิบาย โปรเจคเป็นวิีดีโอไว้ครับ 3 link ต่อเนื่องกันครับ คลิปละ 5 นาที

https://www.loom.com/share/851b5361b0a440b4b140e9d4ce6a8942?sharedAppSource=personal_library

https://www.loom.com/share/7d7e7f24ad68486096f64254c2069b3c?sharedAppSource=personal_library

https://www.loom.com/share/ec067085494d4303a1a56bb7f68acb37?sharedAppSource=personal_library