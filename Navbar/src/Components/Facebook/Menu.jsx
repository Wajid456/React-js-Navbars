import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {HiOutlineUsers} from "react-icons/hi"
import {CgMenuGridO} from "react-icons/cg"
import {BsMessenger} from "react-icons/bs"
import {IoMdNotifications} from "react-icons/io"
import {BiUserCircle} from "react-icons/bi"
import {GoSearch} from "react-icons/go"
import {ImMenu} from "react-icons/im"

const Menu = () => {
  return (
    <div>
    <div className='md:flex hidden justify-between bg-white shadow-lg h-[4rem]'>

      <div className='flex mx-3 my-4 gap-5'>
    <h1 className='text-3xl text-[blue] '>Facebook</h1>
    <AiOutlineHome className='text-4xl font-bold'/>
    <HiOutlineUsers className='text-4xl '/>
    <input type="text" placeholder='Search Facebook' className='border-2 border-gray-300 bg-gray-300  rounded-full px-4 py-3
    '  />
      </div>

      <div className='flex mx-3 my-4 gap-5'>
     <CgMenuGridO className='text-3xl'/>
     <BsMessenger className='text-3xl'/>
     <IoMdNotifications className='text-3xl'/>
     <BiUserCircle className='text-3xl'/>
      </div>

    </div>

    {/* Responsive */}

 <div className='bg-white'>

    {/* first  */}
   <div className='flex justify-between  md:hidden'>
    <div>
   <h1 className='text-3xl text-[blue] m-3 '>Facebook</h1>
    </div>
    <div className='flex mx-3 gap-4 my-3'>
    <GoSearch className='text-3xl'/>
    <ImMenu className='text-3xl '/>
    </div>
   </div>

   {/* Second  */}
   <div className='flex md:hidden justify-between my-2'>
  <AiOutlineHome className='text-4xl font-bold mx-2'/>
  <HiOutlineUsers className='text-4xl '/>
  <BsMessenger className='text-3xl'/>
  <IoMdNotifications className='text-3xl mx-2'/>
   </div>
   <hr className='text-black' />

 </div>

    </div>
  )
}

export default Menu
