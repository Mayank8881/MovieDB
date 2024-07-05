'use client'
import {useState,React} from 'react'
import {useRouter} from 'next/navigation'

export default function SearchBox() {

    const[search,setSearch]=useState('');
    const router=useRouter();
    const handleSubmit=(e)=>{
        e.preventDefault();
        router.push(`/search/${search}`)
    }

  return (
    <form onSubmit={handleSubmit} className='flex justify-end items-center mb-1 gap-4'>
        <input type='text' placeholder='search movie' value={search} onChange={(e)=> setSearch(e.target.value)} className='bg-transparent w-28  text-center placeholder-gray-400'/>
        
        <button className='text-orange-600' disabled={search===''}>search</button>
    </form>
  )
}
