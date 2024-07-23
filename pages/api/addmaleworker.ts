// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//@ts-nocheck
//@ts-ignore
import { PrismaClient } from "@prisma/client";
import Airtable ,{Table} from "airtable";
import { Console } from "console";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken"
import type { NextApiRequest, NextApiResponse } from 'next'
// var base = new Airtable({apiKey: 'patqpqm8yUGAdhSoj.56e6d82c73f5ec39152c7212d8c8a0710856aeb10ba0e268a2bb06a5cf919b06'}).base('app1mph1VMncBBJid');
var base = new Airtable({apiKey: 'patovGWItwsDoXzng.84565b10c27835cf1ac38c9f9b64e14a42a6ac3b825728e3970dffa94292577c'}).base('app1mph1VMncBBJid');


export default async function handler(req: NextApiRequest,res: NextApiResponse) {
// sendSuggestion()
try {
  const {  clientname,
insurance,
    musanedContract,
visanumber,
idnumber,
mobilenumber,
passportnumber,
workername,
age,
experience,
contractstatus,
city,
orderDate,
dayDate,
duration,
job,
externaloffice,
nationality,
externalmusanedcontract
}=req.body;

const result =  await new Promise((resolve,reject)=>{

  const create = base('بيان إرسالية كافة الجنسيات - عمالة رجالية - معينة').create([
  {
    "fields": {
      // "Name": req.body.country
      "اســــم الـــعــمـــيـــل":clientname,
      "التأمين":insurance,
      "عقد مساند الداخلي":musanedContract,
      "رقم التأشيرة":visanumber,
      "رقم الهوية":idnumber,
      "رقم الجوال":mobilenumber,
      "رقم جواز العاملة":passportnumber,
      "أســـــم الــعــــامــــل":workername,
      "العمر":age,
      "المهنة":experience,
      "حالة العقد":contractstatus,
"المدينة":city,
 "تاريخ تقديم الطلب":orderDate,
      "تاريخ اليوم":dayDate,
      "مدة التقديم":duration,
      "المكتب الخارجي":externaloffice,
"الجنسية":nationality,
      "عقد مساند الخارجي":externalmusanedcontract ,   }
  }
])

   resolve(create)

 

   
  })

// console.log(result)
  res.status(200).json(result)  
} catch (error) {
  console.log(error)
  res.status(302).json({error:"connectivity error"})  

}

}

  // export base;


















  import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {
try {
  const {  clientname,
insurance,
    musanedContract,
visanumber,
idnumber,
mobilenumber,
passportnumber,
workername,
age,
experience,
contractstatus,
city,
orderDate,
dayDate,
duration,
job,
externaloffice,
nationality,
externalmusanedcontract,
visaordernumber,
notes
}=req.body;
  // await prisma..
  console.log(req.body)
  const createfemaleworker=await prisma.maleWorker.create({data:{ clientname,
insurance,
    musanedContract,
visanumber,
idnumber,
job,
mobilenumber,
passportnumber,
workername,
age,
experience,
contractstatus,
city,
orderDate,
// dayDate,
// duration,
externaloffice,
nationality,
externalmusanedcontract,
visaordernumber,
notes}})

  res.status(200).send(createfemaleworker)

} catch (error) {
  console.log(error)
  res.status(301).send("createAdmin")

// res.send("error")  
}

}


