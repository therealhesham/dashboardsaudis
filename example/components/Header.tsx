//@ts-nocheck
import { useContext, useEffect, useState } from 'react'
import SidebarContext from 'context/SidebarContext'
// import im from "";
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from 'icons'  

import { Avatar, Badge, Input, Dropdown,Modal,Select,
  ModalBody,
Button,Table,TableBody,TableCell,TableContainer,TableFooter,TableHeader,TableRow,
  ModalHeader,
  ModalFooter, DropdownItem, WindmillContext, 
  Label,
  Textarea,
  Pagination} from '@roketid/windmill-react-ui'
import { MessageFilled, SendOutlined } from '@ant-design/icons'
function Header() {
  const { mode, toggleMode } = useContext(WindmillContext)
  const { toggleSidebar } = useContext(SidebarContext)
const [names,setNames]=useState([])
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
const [ receiver,setReceiver]=useState("")
const [ fullmessage,setFullmessage]=useState("")
const [ title,setTitle]=useState("")
  const [paginatedData,setPaginatedData]=useState([])
const resultsPerPage = 10
const [fulldata,setFulldata]=useState([])
const totalResults=fulldata.length

function onPageChange(p: number) {
  console.log(p)
  // console.log(fulldata.slice((p - 1) * resultsPerPage, p * resultsPerPage))
    // json?setData(json?.slice((page - 1) * resultsPerPage, page * resultsPerPage)):console.log("e");

setPaginatedData(fulldata.slice((p - 1) * resultsPerPage, p * resultsPerPage))
    // setPage(p)
  }
// Pagination
  useEffect(()=>{

  
    try {
      async function names( )  {
    const fetcher =  await fetch("./api/messages")
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
  
  
      async function getnames( )  {
     await fetch("../api/admins").then(response => response.json())
  .then(json  => {

setNames(json) } 

)
}

getnames()
// names()

} catch (error) {
  console.log(error)
} 


})


const closemodalaftersendmessage =()=>{

setReceiver("")
setTitle("")
setFullmessage("")
  closeModal()

}

const sendmessage=async ()=>{

  const fetcher = await fetch('../api/sendmessage',{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify({receiver,fullmessage,title})})

      const e= await fetcher.json()
      if(fetcher.status == 200) return closemodalaftersendmessage();
      // console.log(fetcher.status)
// closeModal()

    }



  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }
 const [isModalOpen, setIsModalOpen] = useState(false)
 function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }





const [isMessagesOpen, setMessagesopen] = useState(false)
 function openMessageModal() {
    setMessagesopen(true)
  }
  function closeMessageModal() {
    setMessagesopen(false)
  }




  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}



        <Modal  isOpen={isMessagesOpen} onClose={closeMessageModal} >
        <ModalHeader>{`قائمة المهام`}</ModalHeader>
        <ModalBody >

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>العنوان</TableCell>
              <TableCell>الرسالة</TableCell>
              <TableCell>المُرسل</TableCell>
              <TableCell>التاريخ</TableCell>
              <TableCell>مقرؤة / غير مقرؤة</TableCell>


            </tr>
          </TableHeader>
          <TableBody>
            {paginatedData?.map((e, i) => (
              <TableRow key={i}>
                <TableCell>
                
                  <div className="flex items-center text-sm" style={{width:"200px"}}>
                    
                    <div>
                     {e?.title ? <p style={{textDecorationLine:"underline",cursor:"pointer"}}  className="font-semibold" >{e.title}</p>:""}
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                 {e.fullmessage? <span className="text-sm">{e.fullmessage}</span>:""}

                </TableCell>
                <TableCell>
                  <span className="text-sm">{e.sender}</span>

                    
                </TableCell>



       <TableCell>
                  <span className="text-sm">{e.createdat}</span>

                    
                </TableCell>



       <TableCell>
                  <span className="text-sm">{e.read}</span>

                    
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


        </ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline" onClick={closeMessageModal}>
            اغلاق
          </Button>


        </ModalFooter>
      </Modal>    

      
        <Modal  isOpen={isModalOpen} onClose={closeModal} >
        <ModalHeader>{`ارسال رسالة`}</ModalHeader>
        <ModalBody >
<Label>
  العنوان
</Label>
          <Input placeholder='عنوان الرسالة' value={title} onChange={e=>setTitle(e.target.value)}/>

<Label>
  ارسال الى
</Label>

<Select onChange={e=>setReceiver(e.target.value)}>
{names.map(e=>
<option value={e.username}>{e.username}</option>)
}
</Select>


<Label>
  الرسالة
</Label>
          <Textarea style={{height:"150px"}} placeholder='الرسالة' value={fullmessage} onChange={(e)=>setFullmessage(e.target.value)}/>


          {/* <Input placeholder='الرسالة'/> */}


        </ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline" onClick={closeModal}>
            اغلاق
          </Button>

          <Button className="w-full sm:w-auto" style={{backgroundColor:"#Ecc383"}} color="#Ecc383" onClick={closeModal}>
            ارسال
          </Button>

        </ModalFooter>
      </Modal>    
                               
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              {/* <SearchIcon className="w-4 h-4" aria-hidden="true" /> */}
            </div>
            
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          
          
          
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={()=>setIsModalOpen(true)}
              aria-label="Toggle color mode"
            >
            
            <SendOutlined />
            </button>
          </li>
          
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={()=>setIsModalOpen(true)}
              aria-label="Toggle color mode"
            >
            
            <MessageFilled />
            </button>
          </li>
          
          
          
          
          
          
          
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === 'dark' ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>Messages</span>
                <Badge type="danger">13</Badge>
              </DropdownItem>
              {/* <DropdownItem tag="a" href="#" className="justify-between">
                <span>Sales</span>
                <Badge type="danger">2</Badge>
              </DropdownItem>
              <DropdownItem onClick={() => alert('Alerts!')}>
                <span>Alerts</span>
              </DropdownItem> */}
            </Dropdown>
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <Avatar
                className="align-middle"
                
                src=""
                alt=""
                aria-hidden="true"
              />
            </button>
            {/* <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#">
                <OutlinePersonIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Profile</span>
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert('Log out!')}>
                <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Log out</span>
              </DropdownItem>
            </Dropdown> */}
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
