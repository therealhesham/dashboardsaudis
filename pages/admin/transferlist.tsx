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
  Modal,
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
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
function Transfer() {
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
//@ts-ignore
//@ts-nocheck
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
     await fetch("../api/transfer").then(response => response.json())
  .then(json  => {
    json?setLength(json.length):"";
    // console.log('parsed json', json) // access json.body here
    setFulldata(json)
    json?setPaginatedData(json?.slice((0) * resultsPerPage, page * resultsPerPage)):console.log("e");
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
    <Layout>




      <PageTitle>معاملات نقل الكفالة</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 ">
      </div>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>صاحب العمل</TableCell>
              <TableCell>رقم الجوال</TableCell>
              <TableCell>رقم الهوية الوطنية</TableCell>
              <TableCell>رقم جواز السفر</TableCell>
              <TableCell>اسم العامل</TableCell>
              <TableCell>الجنسية</TableCell>
              <TableCell>تاريخ دخول المملكة</TableCell>
              {/* <TableCell>Day Date</TableCell> */}
              <TableCell>مدة العمل</TableCell>
              <TableCell>اسم العامل </TableCell>
              <TableCell>رقم جوال العامل</TableCell>
              <TableCell>رقم الهوية للعامل</TableCell>
              <TableCell>مدينة العميل الجديدة</TableCell>
              <TableCell>بداية التجربة</TableCell>
              <TableCell> رقم الاقامة</TableCell>
              <TableCell> اسم المسوقة</TableCell>


            </tr>
          </TableHeader>
          <TableBody>
            {paginatedData?.map((e, i) => (
              <TableRow key={i}>
                
                <TableCell>
                  <span className="text-md">{e?.fields["اسم صاحب العمل / المستقدم"]}</span>

                </TableCell>
                <TableCell>
                  <span className="text-md">{e?.fields["رقم الجوال"]}</span>

                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                </TableCell>
                
                <TableCell>
                  <span className="text-md">
                  <span className="text-md">{e?.fields["رقم الهوية"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
                </TableCell>
                <TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["رقم جواز العاملة"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>


<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["أســـــم  الــعــــامــــل"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>

                
<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["الجنسية"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>
<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["تاريخ الدخول للمملكة"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>



<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["المدة"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>


<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e.fields["اسم صاحب العمل / الجديد"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>



<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["رقم الجوال الكفيل الجديد"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>



<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["رقم الهوية الكفيل الجديد"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>



<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e.fields["مدينة الكفيل الجديد"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>
<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["بداية التجربة"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>





<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["رقم الإقامة للعامله"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>




<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["اسم المسوقة"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>







<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.paid}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>
<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.restofpaid}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>
<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.experimentresult}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>
<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.accomaditionnumber}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>
<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.marketeername}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
                </TableCell>
<TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.notes}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
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

                
    </Layout>
  )
}

export default Transfer;