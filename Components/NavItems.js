"use-client"
import React from 'react'
import Navbar from './Navbar'
export default function NavItems() {
  return (
    <div className='flex bg-orange-200 dark:bg-gray-600 gap-10 justify-center h-16 items-center text-2xl mt-3'>
        <Navbar title='Trending' param='fetchTrending'/>
        <Navbar title='Top Rated' param='fetchTopRated' />
    </div>
  )
}
