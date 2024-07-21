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
const {    client,
mobilenumber,
    nationalidnumber,
passportnumber,
homemaid,
nationality,
kingdomentrydate,
daydate,
workduration,
newclientname,
newclientmobilenumber,
newclientnationalidnumber,
newclientcity,
experimentstart,
experimentend,
dealcost,
paid,
restofpaid,
experimentresult,
accomaditionnumber,

marketeername,
notes
}=req.body;
const result =  await new Promise((resolve,reject)=>{
const create = base('مـــعــــــــامــــــــلات نـــــقـــــــل الــــــــكـــفـــــــالـــــــــــــة').create([
  {
    "fields": {
      "الدولة": req.body.country,
      "اسم صاحب العمل / المستقدم":client,
      "رقم الجوال":mobilenumber,
      "رقم الهوية":nationalidnumber,
      "رقم جواز العاملة":passportnumber,
      "أسـم العــامــل":homemaid
    }
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
  const {    client,
mobilenumber,
    nationalidnumber,
passportnumber,
homemaid,
nationality,
kingdomentrydate,
daydate,
workduration,
newclientname,
newclientmobilenumber,
newclientnationalidnumber,
newclientcity,
experimentstart,
experimentend,
dealcost,
paid,
restofpaid,
experimentresult,
accomaditionnumber,

marketeername,
notes
}=req.body;
  // await prisma..
  console.log(req.body)
  const transfer=await prisma.transfer.create({data:{ client,
mobilenumber,
    nationalidnumber,
passportnumber,
homemaid,
nationality,
kingdomentrydate,
daydate,
workduration,
newclientname,  
newclientmobilenumber,
newclientnationalidnumber,
newclientcity,
experimentstart,
experimentend,
dealcost,
paid,
restofpaid,
experimentresult,
accomaditionnumber,

marketeername,
notes}})

  res.status(200).send(transfer)

} catch (error) {
  console.log(error)
  res.status(301).send("error")

// res.send("error")  
}

}


