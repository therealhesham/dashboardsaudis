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
      "أسـم العــامــل":homemaid,
      "الجنسية": nationality,
      "تاريخ الدخول للملكة":kingdomentrydate,
    "المدة":workduration,
      "اسم صاحب العمل / الجديد":newclientname,
      "رقم الجوال الكفيل الجديد":newclientmobilenumber,
      "رقم الهوية الكفيل الجديد":newclientnationalidnumber,
      "مدينة الكفيل الجديد":newclientcity,
      "بداية التجربة":experimentstart,
      "نهاية التجربة":experimentend,
      // "المدينة":city
      "تاريخ تقديم الطلب":applicationdate,
      "تاريخ الوصول":arrivaldate,
      "مبلغ الاتفاق":dealcost,
      "المدفوع":paid,
      "المتبقى":restofpaid,
      "نتيجة التجربة":experimentresult,
      "رقم الاقامة للعاملة":accomaditionnumber,
      "اسم المسوقة":marketeername,
      "ملاحظات":notes


      

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



