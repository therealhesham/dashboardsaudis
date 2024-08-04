// @ts-nocheck 
import React, { useState, useEffect } from 'react'
import { Doughnut, Line, Pie } from 'react-chartjs-2'
import dayjs from 'dayjs'
import CTA from 'example/components/CTA'
import InfoCard from 'example/components/Cards/InfoCard'
import ChartCard from 'example/components/Chart/ChartCard'
import ChartLegend from 'example/components/Chart/ChartLegend'
import PageTitle from 'example/components/Typography/PageTitle'
import RoundIcon from 'example/components/RoundIcon'
import Layout from 'example/containers/Layout'
import response, { ITableData } from 'utils/demo/tableData'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from 'icons'
// import"
import {
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

function HomeMaidList() {
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

  // console.log(dayjs())
  const [page, setPage] = useState(1)
  const [length,setLength]=useState(0)
  const [data, setData] = useState([])
  const [time,setTime]=useState(0)
  const [office,setOffice]=useState([])
  // pagination setup
  const [fulldata,setFulldata]=useState([])
  const resultsPerPage = 10
  const totalResults = fulldata.length
const router = useRouter()  
// setTimeout(() =
// pagination change control
  const [paginatedData,setPaginatedData]=useState([])
  // console.log(time)
  const [listType,setTypeList] = useState("workers")


function onPageChange(p: number) {
    // json?setData(json?.slice((page - 1) * resultsPerPage, page * resultsPerPage)):console.log("e");
setPaginatedData(fulldata.slice((p - 1) * resultsPerPage, p * resultsPerPage))
    // setPage(p)
  }
  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    
// jwtDecode
    
    try {
    
  
      async function names( )  {
     await fetch("../api/homemaidlist").then(response => response.json())
  .then(json  => {
    json?setLength(json.length):"";
    // console.log('parsed json', json) // access json.body here
    setFulldata(json)
    json?setPaginatedData(json?.slice((0) * resultsPerPage, page * resultsPerPage)):console.log("e");
 
 console.log(json)
    // setData(json)   
// const arr=[];
  // json?.length>0?json.map(e=>{if(!arr.includes(e.fields.office)) arr.push(e.fields.office)}):console.log(json.length)
  // setofficelist(arr)
} 
  // names();

)
}
names()

} catch (error) {
  console.log(error)
}  

}, [])


return (
<Layout><div>
  <Button style={{margin:"13px",backgroundColor:"#Ecc383"}} onClick={()=> router.back()}>الرجوع للخلف</Button>
      <PageTitle>قائمة الوصول</PageTitle>
  
      <div className="grid gap-6 mb-8 md:grid-cols-2 ">
      </div>

      <TableContainer>
        <Table>
          <TableHeader>

       


            <tr>
              <TableCell>اسم العميل</TableCell>
              <TableCell>Client Name in English</TableCell>
              <TableCell>عقد مساند الداخلي</TableCell>
              <TableCell>رقم الهوية الوطنية</TableCell>
              <TableCell>رقم التواصل</TableCell>
              <TableCell>رقم جواز السفر</TableCell>
              <TableCell>تاريخ الوصول </TableCell>
              <TableCell>المتبقى على دخول المملكة </TableCell>

              <TableCell>مدة العمل</TableCell>
              <TableCell>التكلفة</TableCell>
              <TableCell>رقم هاتف العاملة</TableCell>
              <TableCell>ملاحظات</TableCell>
              <TableCell>حذف</TableCell>
              <TableCell>الغاء</TableCell>






            </tr>
          </TableHeader>
          <TableBody>
            {paginatedData?.map((e, i) => (
              <TableRow key={i}>


                
                <TableCell>
                  <span className="text-md">{e.fields["اسم العميل"]}</span>

                </TableCell>
                 <TableCell>
                  <span className="text-md">{e.fields["اسم العميل انجليزي"]}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e.fields["عقد مساند الداخلي"]}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e.fields["رقم الهويه"]}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e.fields["رقم التواصل"]}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e.fields["الجواز"]}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e.fields["تاريخ الدخول للمملكة"]}</span>

                </TableCell>

                 <TableCell>
{((dayjs(e.fields["تاريخ الدخول للمملكة"]).diff(new Date()))/100000000).toFixed()}


                </TableCell>

                 <TableCell>
                  <span className="text-md">{e.fields["مده العمل"]}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e.fields["التكلفه"]}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e.fields["رقم جوال العامله"]}</span>

                </TableCell>



                 <TableCell>
                  <span className="text-md">{e.fields["ملاحظات"]}</span>

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

                </div>
 </Layout>

  )
}

export default HomeMaidList;