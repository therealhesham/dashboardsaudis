 //@ts-nocheck
//@ts-ignore
import Airtable ,{Table} from "airtable";

import { Console } from "console";
import Cookies from "js-cookie";
import type { NextApiRequest, NextApiResponse } from 'next'
// import { Jwt } from "jsonwebtoken";
import jwt from "jsonwebtoken"
var base = new Airtable({apiKey: 'patqpqm8yUGAdhSoj.b42530f3bb52b3073c8a30eb1507a54227cb17fdc0d8ce0368ee61a8acf1c66d'}).base('app1mph1VMncBBJid');

// var base = new Airtable({apiKey: 'patXrez1aIa2i3whF.410e92b1b07ab85712cd0722ad462964185aecd969949bde6e36295f7a2e8fc2'}).base('appUGFHsf0FQduyTw');

type Data = {
  name: string
}
//@ts-nocheck
//@ts-ignore
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  const arr = [];
  try {
  const token = req.cookies.token;
  // console.log(token)
  const verify= jwt.verify(token,'secret');
  //@ts-nocheck
  //@ts-ignore
  if (verify.fullname == undefined) return  res.status(301).json("error")
  
    const result =  await new Promise((resolve,reject)=>{
// console.log(verify)


    base('السير الذاتية').select({
      view: "الاساسي"
      
    }).all().then(e=>
      {
        //@ts-ignore
        // console.log(e)
        for (let index = 0; index < e.length; index++) {
          if(e[index].get("العملاء") == verify.fullname)   arr.push(e[index]);   
          }
          if(arr.length == 0) return res.status(201).json("Not Found") ;
        //@ts-ignore
        
        // res.status(200).json(arr)  
        resolve(arr)
      }
      
      //@ts-ignore
    );
    
  })
  res.status(200).json(result)  
// console.log()
  } catch (error) {
    console.log(error)
    res.status(301).json("error")
  }
  
}

  // export base;