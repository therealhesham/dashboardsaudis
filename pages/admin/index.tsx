// @ts-nocheck 
import React, { useState, useEffect, useContext } from 'react'
import { Doughnut, Line, Pie } from 'react-chartjs-2'
// import "./officeinfo/[slug]"
import CTA from 'example/components/CTA'
import InfoCard from 'example/components/Cards/InfoCard'
import ChartCard from 'example/components/Chart/ChartCard'
import ChartLegend from 'example/components/Chart/ChartLegend'
// import "./officeinfo/"
import _ from "lodash";
import PageTitle from 'example/components/Typography/PageTitle'
import RoundIcon from 'example/components/RoundIcon'
import Layout from 'example/containers/Layout'
import response, { ITableData } from 'utils/demo/tableData'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from 'icons'
// import 
import {
  TableBody,
  TableContainer,
  Table,
  Input,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from '@roketid/windmill-react-ui'

import {
  lineOptions,
  doughnutLegends,
  lineLegends,
} from 'utils/demo/chartsData'

import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import Link from 'next/dist/client/link'
import Style from "styles/Home.module.css"


// import""
import { User } from 'utils/usercontext'
import { useRouter } from 'next/router'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
import dayjs from 'dayjs'
import { Rating } from '@mui/material'
// Rating

// import link from 'next/link'
function Dashboard() {

const rates =["inner - مبتدأ",
"Beginner - مبتدأ",
"Intermediate - جيد",
"Advanced - جيد جداً",
"Expert - ممتاز"]


  Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  
  const [officelist,setofficelist]=useState([])
  function datas() {
    
  }
  
  const doughnutOptions={
  data: {
    datasets: [
      {
        data: [67, 33],
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
        */
       backgroundColor: ['#0694a2', '#1c64f2',"#3cb44b"],
        label: 'Dataset 1',
      },
    ],
    labels: officelist.length>0?[...officelist]:0,
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
  },
  legend: {
    display: false,
  },
}
// console.log(officelist)
       const [admins,setAdmins] = useState(null)
       const [bookedReserved,setBooked] = useState([]);

       const [Transfer,setTransfer] = useState([]);
    
    
    
       const [cvnumber,setCVnumber]=useState("");
  const [page, setPage] = useState(1);
  const [length,setLength]=useState(0);
  const [data, setData] = useState({});
  const [time,setTime]=useState(0);
  // const [time,setTime]=useState(0)

  const [deletedid,setDeletedid]=useState("")
  const [office,setOffice]=useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

const [fullname,setFullname]=useState("");
const [phonenumber,setPhonenumber]=useState("");
const [password,setPassword]=useState("");

  // pagination setup
  const [fulldata,setFulldata]=useState([])
  const resultsPerPage = 10
  // Label
  const totalResults = fulldata.length;
  const user =useContext(User)
// setTimeout(() =
// pagination change control
  const [paginatedData,setPaginatedData]=useState([])
  // console.log(time)
  const [listType,setTypeList] = useState("workers")
  const [cvnumberbook,setcvnumberbook]=useState("");
  const [cvid,setcvid]=useState("");
  const [workername,setworkername]=useState("")


  const bookmodal = (cvn,idd,wn)=>{
setworkername(wn);
setcvnumberbook(cvn)
setcvid(idd)
openModal()

  }


  const router = useRouter()
const [list,setList]=useState([]);
function onPageChange(p: number) {
  console.log(p)
  // console.log(fulldata.slice((p - 1) * resultsPerPage, p * resultsPerPage))
    // json?setData(json?.slice((page - 1) * resultsPerPage, page * resultsPerPage)):console.log("e");

setPaginatedData(fulldata.slice((p - 1) * resultsPerPage, p * resultsPerPage))
    // setPage(p)
  }
  // on page change, load new sliced data
  // here you would make another server request for new data

 function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }




function removeaftersend (){
setPassword("")
setPhonenumber("")
setFullname("")
closeModal()


}

  
const book = async ()=>{

const fetcher =  await fetch("./api/newclientbyadmin",{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify({id:cvid,cvnumber:cvnumberbook,workername:workername,phonenumber,fullname,password})})
  
      const f = await fetcher.json()

if(fetcher.status == 200) {return removeaftersend()}
if(fetcher.status !=200 ) alert ("Error Booking ")
  // names();


}




  
const search = ()=>{

      async function names( )  {
    const fetcher =  await fetch("./api/searchbutton",{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify({cvnumber})})
    const f = await fetcher.json()
// console.log(,f)
  .then(json  => {
//  console.log(json)
//  if ()
  json?setLength(json.length):"";

    // console.log('parsed json', json) // access json.body here
    setFulldata(json)
    json?setPaginatedData(json?.slice((0) * resultsPerPage, page * resultsPerPage)):console.log("e");
// console.log(new Date().getSeconds())
    // setData(json)   

  } 
  // names();

)
}

names()



}
function FindNatioinality(namenation) {
console.log(namenation)



const filtering = list.find(e=> e.id == namenation)
// console.log("filtering",filtering)
// console.log(filtering)
return filtering?.fields["الدولة"];

  
}
// console.log(list[3])
useEffect(() => {
  
  try {

    const token = Cookies.get("token")
  const decoder = jwtDecode(token);
      if(!decoder.admin)return router.replace("/admin/login");
// console.log(decoder.idnumber)
  } catch (error) {
    router.replace("/admin/login")
  }
    try {

      (async function External(){
        const fetcher =  await fetch("./api/externaloffices");
        const f = await fetcher.json()
        setofficelist(f)





})()


      async function names( )  {
    const fetcher =  await fetch("./api/hello");
    const f = await fetcher.json()

  .then(json  => {
//  console.log(json)
//  if ()
  json?setLength(json.length):"";

    // console.log('parsed json', json) // access json.body here
    setFulldata(json)
    json?setPaginatedData(_.reverse(json).slice((0) * resultsPerPage, page * resultsPerPage)):console.log("e");
// console.log(new Date().getSeconds())
    // setData(json)   

  } 
  // names();

)
}

names()



 async function orders( )  {
    const fetcher =  await fetch("./api/orders");
    const f = await fetcher.json()

  .then(json  => {
//  
setBooked(json)
  }

)
}

orders()






 async function transfer( )  {
    const fetcher =  await fetch("./api/homemaidlist");
    const f = await fetcher.json()

  .then(json  => {
//  
// console.log(json)
setTransfer(json)
  }

)
}

transfer()



async function Admins() {
   const fetcher =  await fetch("./api/admins");
    const f = await fetcher.json()
setAdmins(f.length)
  }

Admins()









} catch (error) {
  console.log(error)
}  

}, [deletedid])



const  deleterecord = async (id)=>{

const fetcher = await fetch('../api/deletecv',{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify({id:id})})

      const e= await fetcher.text()
if(fetcher.status == 200) setDeletedid(id)
      console.log(fetcher.status)

}
const openCvmodal=(cvdata)=>{

setData(cvdata)
setcvopen(true)

}
const closeCvModal = ()=>{
setcvopen(false)

}


// {bookmodal(e.fields["م"],e.id,e.fields["Name - الاسم"])
  const openbookModal = (m,ids,name)=>{
  setcvopen(false)
setworkername(name);
setcvnumberbook(m)
setcvid(ids)
openModal()



  // openModal()

}


const [isCvModalOpen,setcvopen]=useState(false)
return (



<Layout >
      {/* {alert(user.username)} */}
      
      {data.fields?
      <Modal  isOpen={isCvModalOpen} onClose={closeCvModal} >
        <ModalHeader>{`Details ${data.fields["م"]}`}</ModalHeader>
        <ModalBody >

{/* <div style={{width:"95%",display:"flex",justifyContent:"center",flexDirection:"column"}}> */}
    {/* <div style={{display:"flex",marginTop:"12px",marginLeft:"auto",justifyContent:"center",marginRight:"auto",width:"60%",backgroundColor:"white"}}   className="card card-compact card-side w-100 bg-base-100 shadow-xl"  > */}
 
  <div className="card-body" style={{ borderRadius:"10px",display:"flex",flexDirection:"row"}} >
   <div className="pic"> 
    <div  style={{width:"80px",height:"70px"}}> 
    <div style={{right:"15px",cursor:"pointer",top:"10px",position:"absolute"}}
    
    >
    
    </div>
   <div>
       {data.fields.Picture?<img     src={data.fields.Picture[0].url}  />:""}
</div>
</div>

</div>

<div>
   <h2 className="card-title" style={{marginTop:"12px"}}>{data.fields["م"]}</h2>

    <h2 className="card-title">{data.fields["Name - الاسم"]}</h2>
    <div className="textcard">
      {/* data.fields[ksd["age - العمر"] }
      {/* <p  >{data.fields['age - العمر']?data.fields['age - العمر']:""}</p> */}
     {data.fields["marital status - الحالة الاجتماعية"]? <h1 className={Style['almarai-bold']}>الحالة الاجتماعية</h1>:null}
      
      <h1 >{data.fields["marital status - الحالة الاجتماعية"]}</h1>
      {/* <p  >{data.fields["External office - المكتب الخارجي"]}</p> */}
{data.fields["Education - التعليم"]?      <h1 className={Style['almarai-bold']} >التعليم</h1>:null}

      <h1 >{data.fields["Education - التعليم"]}</h1>
 {data.fields["Nationality copy"]? <h1 className={Style['almarai-bold']} >الجنسية</h1>:null}

  <h1 >{data.fields["Nationality copy"]}</h1>
     {data.fields["Salary - الراتب"]? <h1 className={Style['almarai-bold']} >الراتب</h1> :null}
      
      <h1 >{data.fields["Salary - الراتب"]} sar</h1> 
     {data.fields["Religion - الديانة"]? <h1 className={Style['almarai-bold']}  >الديانة</h1>:null}
     
      <h1 >{data.fields["Religion - الديانة"]}</h1>
    {data.fields['date of birth - تاريخ الميلاد']?  <h1 className={Style['almarai-bold']}  >العمر</h1>:null}
      
<h1 >{Math.ceil(dayjs(new Date()).diff(data.fields['date of birth - تاريخ الميلاد'])/31556952000)}</h1>
      <strong className='card-title'>المهارات</strong>
      {/* <div className="rating rating-sm"> */}
      
{/* </div> */}

      <strong className='card-title'>اللغات</strong>
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around",justifyItems:"center",flexDirection:"row",width:"50%"}}><div >  <h4>اللغة العربية</h4>
  {rates.map((e,i)=>
data.fields["Arabic -  العربية"] == e?<Rating   aria-label={e} name="half-rating" defaultValue={i+1}  />:console.log(e)
        

        
        )}
        </div><div>
<h4>اللغة الانجليزية</h4>
  {rates.map((e,i)=>
data.fields["English - الانجليزية"] == e?<Rating aria-label={e} name="half-rating" defaultValue={i+1}  />:console.log(e)
        

        )}
</div>

</div>


      </div>
 </div>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around",justifyItems:"center",flexDirection:"row",width:"50%"}}>
      <div>
      <h4>الغسيل</h4>  {rates.map((e,i)=>
data.fields["laundry - الغسيل"] == e?<Rating  name="half-rating" defaultValue={i+1}  />:console.log(e)
        

        )}</div>
        <div>
  <h4>الكوي</h4>  {rates.map((e,i)=>
data.fields["Ironing - كوي"] == e?<Rating  name="half-rating" defaultValue={i+1}  />:console.log(e)
        

        )}</div>
        <div>
 <h4>التنظيف</h4>  {rates.map((e,i)=>
data.fields["cleaning - التنظيف"] == e?<Rating  name="half-rating" defaultValue={i+1}  />:console.log(e)
        

        )}
</div>
<div>
         <h4>الطبخ</h4>  {rates.map((e,i)=>
data.fields["Cooking - الطبخ"] == e?<Rating  name="half-rating" defaultValue={i+1}  />:console.log(e)
        

        )}
     </div>


<div>
         <h4>الخياطة</h4>  {rates.map((e,i)=>
data.fields["sewing - الخياطة"] == e?<Rating  name="half-rating" defaultValue={i+1}  />:console.log(e)
        

        )}



     </div>


        </div>
   
  </div>    
{/* </div> */}


  
  {/* </div> */}
           
        </ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline" onClick={closeCvModal}>
            Close
          </Button>

          <Button className="w-full sm:w-auto" layout="primary" onClick={()=>openbookModal(data.fields["م"],data.id,data.fields["Name - الاسم"])}>
            BOOK
          </Button>

        </ModalFooter>
      </Modal>:""

      }
<Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>{`Book CV Number ${cvnumberbook}`}</ModalHeader>
        <ModalBody>


<Input placeholder='اسم العميل'  value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
<Input placeholder='جوال العميل' value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}/>
<Input placeholder='رقم العميل السري' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          
        </ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline" onClick={closeModal}>
            Close
          </Button>

          <Button className="w-full sm:w-auto" layout="primary" onClick={()=>book()}>
            confirm
          </Button>


        </ModalFooter>
      </Modal>

<h1 style={{fontSize:"23px"}}> Hello {user.name}</h1>
      <PageTitle>Dashboard</PageTitle>


      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          {/* @ts-ignore */}
          <div  style={{cursor:"pointer"}} onClick={e=>setTypeList("workers")}>
        <InfoCard title=" المتاح من العاملين" value={length}  >
                 <RoundIcon
                 
                 icon={PeopleIcon}
                 iconColorClass="text-orange-500 dark:text-orange-100"
                 bgColorClass="bg-orange-100 dark:bg-orange-500"
                 className="mr-4"
                 />
        </InfoCard>
                 </div>
 
          <div  style={{cursor:"pointer"}} onClick={e=>setTypeList("offices")}>
        <InfoCard  title="المكاتب الخارجية" value={officelist.length}  >
          {/* @ts-ignore */}
          <RoundIcon
          
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-yellow-100 dark:bg-green-500"
            className="mr-4"
            />
        </InfoCard>
            </div>
<div onClick={()=>router.push("/admin/dashboardadmins") }>
        <InfoCard title="المشرفين" value={admins} >
          {/* @ts-ignore */}
          <RoundIcon
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"/>
        </InfoCard>
</div>
        <InfoCard title="السير الذاتية المحجوزة" value={0}>
          {/* @ts-ignore */}
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
 
          {/* <div  style={{cursor:"pointer"}} onClick={e=>setTypeList("offices")}> */}
        <InfoCard  title="المحجوز" value={bookedReserved.length}  >
          {/* @ts-ignore */}
          <RoundIcon
          
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-yellow-100 dark:bg-green-500"
            className="mr-4"
            />
        </InfoCard>
            {/* </div> */}



<InfoCard  title="قائمة الوصول" value={Transfer.length}  >
          {/* @ts-ignore */}
          <RoundIcon
          
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-red-100 dark:bg-black-500"
            className="mr-4"
            />
        </InfoCard>
        

 
      </div>

      {/* <div>
<TableContainer>

<Table>
<TableHeader>
<tr>
<TableCell>
Status

</TableCell>
<TableCell>
Details
  
</TableCell>
<TableCell>
Date
  
</TableCell>




</tr>

</TableHeader>
<TableBody>
<TableRow></TableRow>

</TableBody>



</Table>

</TableContainer>





      </div> */}
      <Label >
  {/* <span>search by cv number</span> */}
 
 <div style={{display:"inline-flex"}}> <Input  placeholder='search by cv number' className="mt-1" style={{width:"180px"}} onChange={(e)=>setCVnumber(e.target.value)}/> <Button onClick={()=>search()}> search</Button>
</div>
</Label>
{listType =="workers"?
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              {listType =="workers"?<TableCell>اسم العامل</TableCell>:<TableCell>اسماء المكاتب</TableCell>}
              {/* {listType =="workers"?<TableCell>العمر</TableCell>: null} */}
              {listType =="workers"?<TableCell>الحالة الاجتماعية</TableCell>:null}
              {listType =="workers"?<TableCell>الجنسية</TableCell>:null}
              {listType =="workers"?<TableCell>الديانة</TableCell>:null}
              {listType =="workers"?<TableCell>حالة الحجز</TableCell>:null}

              {listType =="workers"?<TableCell>Book</TableCell>:null}

              {listType =="workers"?<TableCell>Delete</TableCell>:null}

            </tr>
          </TableHeader>
          <TableBody>
            {paginatedData?.map((e, i) => (
              <TableRow key={i}>
                <TableCell>
                
                  <div className="flex items-center text-sm" style={{width:"200px"}}>
                    
                    <div>
                     {e?.fields["Name - الاسم"] ? <p style={{textDecorationLine:"underline",cursor:"pointer"}} onClick={()=>openCvmodal(e)} className="font-semibold" >{e?.fields["Name - الاسم"]}</p>:""}
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                 {e?.fields["marital status - الحالة الاجتماعية"]? <span className="text-sm">{e?.fields["marital status - الحالة الاجتماعية"]}</span>:""}

                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                  <span className="text-sm">{("Nationality copy" in e.fields)?e.fields["Nationality copy"]:""}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
                </TableCell>
                <TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields["External office - المكتب الخارجي"]}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["Religion - الديانة"]?e?.fields["Religion - الديانة"]:""}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>




                <TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields["External office - المكتب الخارجي"]}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["Religion - الديانة"]?e?.fields["حالة الحجز"]:""}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>




                <TableCell>

                <Button onClick={()=>{bookmodal(e.fields["م"],e.id,e.fields["Name - الاسم"]) }} style={{backgroundColor:"wheat",color:"black"}}>Book CV </Button>
                </TableCell>







                <TableCell>
                

                <Button onClick={()=>{deleterecord(e.id)  }} disabled style={{backgroundColor:"red"}}>Delete CV </Button>
                </TableCell>



              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
: 
<TableBody>
<ul >
{officelist.map((e) => (
             
  <Link href={"./admin/officeinfo/"+ e.fields["External office - المكتب الخارجي"]}>
  <li  style={{ cursor:"pointer",height:"150px"}}  > 
                  {e?.fields["External office - المكتب الخارجي"]}   
              </li>
                    </Link>

              ))
}          </ul>
               </TableBody>
                }
    </Layout>
  )
}

export default Dashboard

