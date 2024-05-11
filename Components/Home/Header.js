import Image from 'next/image'
import React from 'react'
import logo from '@/public/Img/logo.jpg'
import { PiSignInBold } from "react-icons/pi";
import { MdCreateNewFolder } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import Link from 'next/link';
import DarkMode from '../DarkMode';
function Header() {
  return (
    <>
    <div className='flex justify-between p-2 border-b-[4px]'>
        <div className='flex justify-between items-center gap-4'>
            <Image className='h-20 w-20 rounded-full 'src={logo}/>
        <div className='flex gap-5 ms-12 items-center'>
            <Link href='/'><span className='hidden sm:block hover:text-orange-600'>HOME</span><FaHome className='sm:hidden'/></Link>
            <Link href='../About'><span className='hidden sm:block hover:text-orange-600'>ABOUT</span><FcAbout  className='sm:hidden'/></Link>
        </div>
            
        </div>
        <div className='flex justify-around gap-4 items-center'>
            {/* <button className='border-black border-[2px] rounded-full p-2 bg-black text-white'><span className='hidden sm:block'>CREATE POST</span><MdCreateNewFolder className='sm:hidden'/></button> */}
            <DarkMode/>
            <button className='rounded-xl p-2  hover:bg-orange-600 '><span className='hidden sm:block'>SIGN IN</span><PiSignInBold className='sm:hidden'/></button>
            <Image className='h-10 w-10 rounded-full 'src={logo}/>
        </div>
    </div>
    </>

  )
}

export default Header