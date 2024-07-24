// @ts-nocheck 
import React, { useState, useEffect } from 'react'
import { Doughnut, Line, Pie } from 'react-chartjs-2'
import CTA from 'example/components/CTA'
import InfoCard from 'example/components/Cards/InfoCard'
import ChartCard from 'example/components/Chart/ChartCard'
import ChartLegend from 'example/components/Chart/ChartLegend'
import PageTitle from 'example/components/Typography/PageTitle'
import RoundIcon from 'example/components/RoundIcon'
import Layout from 'example/containers/Layout'
// import '../'
import response, { ITableData } from 'utils/demo/tableData'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from 'icons'
// import"
import {
Select,
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Button,
} from '@roketid/windmill-react-ui'
// jwtDecode

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
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

function Employees() {
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

  

  const [page, setPage] = useState(1)
  const [length,setLength]=useState(0)
  const [data, setData] = useState([])
  const [time,setTime]=useState(0)
  const [office,setOffice]=useState([])
  const [bookingstatus,setStatusBooking]=useState("")
  
  const [fulldata,setFulldata]=useState([])
  const resultsPerPage = 10
  const totalResults = fulldata.length
const router = useRouter()  
  const [paginatedData,setPaginatedData]=useState([])
  
  const [listType,setTypeList] = useState("workers")

function onPageChange(p: number) {
  
setPaginatedData(fulldata.slice((p - 1) * resultsPerPage, p * resultsPerPage))
    // setPage(p)
  }
  // on page change, load new sliced data
  // here you would make another server request for new data

  useEffect(() => {
  try {

    const token = Cookies.get("token")
  const decoder = jwtDecode(token);
      if(!decoder.admin)return router.replace("/client");
  
// console.log(decoder.idnumber)
  } catch (error) {
    router.replace("/client")
  }



    
    
    try {
    
  
      async function names( )  {
     await fetch("../api/orders").then(response => response.json())
  .then(json  => {
    json?setLength(json.length):"";
    setFulldata(json)
    json?setPaginatedData(json?.slice((page - 1) * resultsPerPage, page * resultsPerPage)):console.log("e");
} 

)
}
names()

} catch (error) {
  console.log(error)
}  

}, [])


const [state,changeState]=useState("");

const confirmchange=async (id)=>{

  const fetcher = await fetch('../api/change',{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify({id,status:bookingstatus})})

      const e= await fetcher.json()
      if(fetcher.status == 200) return changeState("");
      // console.log(fetcher.status)
// closeModal()

    }

return (
    <Layout>

      <PageTitle>الطلبات</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 ">
      </div>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>اسم العميل</TableCell>
              <TableCell>رقم جوال العميل</TableCell>
              
              {/* <TableCell>Fiscal</TableCell> */}
              <TableCell>رقم السيرة الذاتية</TableCell>

              <TableCell>اسم العاملة</TableCell>
              <TableCell>حالة الحجز</TableCell>
              <TableCell>تغيير الحالة</TableCell>
           
            </tr>
          </TableHeader>
          <TableBody>
            {fulldata?.map((e, i) => (
              <TableRow key={i}>
                
                <TableCell>
                  <span className="text-md">{e?.fields["اسم العميل"]}</span>

                </TableCell>
                <TableCell>
                  <span className="text-md">{e?.fields["رقم جوال العميل"]}</span>


                  {/* <span className="text-md">{e?.fields.Status}</span> */}

                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                </TableCell>


                <TableCell>
                  <span className="text-md">{e?.fields["رقم السيفي"]}</span>


                  {/* <span className="text-md">{e?.fields.Status}</span> */}

                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                </TableCell>



                <TableCell>
                  <span className="text-md">{e?.fields["اسم العاملة"]}</span>

      </TableCell>




                <TableCell>
  {state  == e.id?                    <Select onChange={e=>setStatusBooking(e.target.value)}>
  <option disabled>اختر</option>

  <option value="">الغاء الحجز</option>
  
  <option value="محتمل">محتمل</option>
  <option value="مؤكد" >مؤكد</option>
  <option value="تم الاستقدام">تم الاستقدام</option>



    </Select>
:
                  <span className="text-md">{e?.fields["حالة الحجز"]}</span>



  }

                  {/* <span className="text-md">{e?.fields.Status}</span> */}

                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                </TableCell>


                <TableCell>
{state == e.id
?
<Button style={{backgroundColor:"dodgerblue"}} onClick={s=>confirmchange(e.id)}>تأكيد</Button>

:
<Button style={{backgroundColor:"#fb8b23"}} onClick={s=>changeState(e.id)}>تغيير الحالة</Button>

}
        </TableCell>



                <TableCell>
{state == e.id
?


<Button style={{backgroundColor:"red"}} onClick={s=>changeState("")}>الغاء</Button>
:null}

        </TableCell>




              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TableFooter>
        
        </TableFooter>
      </TableContainer>

                
    </Layout>
  )
}

export default Employees