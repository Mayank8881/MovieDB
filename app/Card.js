'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";

export default function Card({result}) {
  return (
    <div className=' rounded-lg   m-2 overflow-hidden hover:scale-105 '>
        <Link href={`/movie/${result.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${
                 result.poster_path
            }`}
            width={500}
            height={300}
            className='sm:rounded-t-lg '
        ></Image>
        <div className='text-orange-600 font-bold'>
                {result.title || result.name}
        </div>
        <p>
            {result.first_air_date || result.release_date}
        </p>
        {/* <div className='flex-col m-3 space-y-2 ' >
            <div className='text-orange-600 font-bold'>
                {result.title || result.name}
            </div>
            <p className='line-clamp-3'>
                {result.overview}
            </p>
            <div className='flex space-x-28'>
                <p>
                    {result.first_air_date || result.release_date}
                </p>
                <div className='flex gap-1 place-items-center'>
                <FcLikePlaceholder />
                    {result.vote_count}
                </div>
            </div>
            
            
            
        </div> */}
        </Link>
    </div>
  )
}
