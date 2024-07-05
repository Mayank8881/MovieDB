
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import axios from 'axios';

export default async function page({params}) {
    const movieId=params.id;
    const res= await fetch (
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    )
    const mov = await res.json();
    // const [myData,setMyData]=useState(0);
    // const res=await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    //     setMyData(res.data);

  return (
    
    <div className=' xl:flex 2xl:flex m-10 gap-6'>
        <div className=''>
            <Image
                src={`https://image.tmdb.org/t/p/original/${mov.backdrop_path || mov.poster_path}`}
                width={600}
                height={100}
                className='sm:rounded-t-lg h-96 '
            ></Image>
            
        </div>
        <div className='xl:w-[590px] xl:h-auto sm:w-[500px] sm:h-screen md:w-[600px] md:h-screen'>
            <div className='flex gap-6 items-center'>
                <div className='text-orange-600 font-bold text-lg '>{mov.title || mov.name}</div>
                <div className='flex gap-2 p-2 ' >
                    <div className='bg-blue-600 p-1 rounded-md' >{mov.genres[0].name} </div>
                    <div className='bg-pink-600 p-1 rounded-md'>{mov.genres[1].name}</div>
                    {/* <div className='bg-red-600 p-1 rounded-md'>{mov.genres[2].name}</div> */}
                </div>
            </div>
            <div>{mov.overview}</div>
            {/* <div>{mov.homepage}</div> */}
            
            <div><span className='text-orange-600 '>Budget</span>-{mov.budget}</div>
            <div><span className='text-orange-600 '>popularity</span>-{mov.popularity}</div>
            <div><span className='text-orange-600 '>Duration</span>-{mov.runtime} mins</div>
            <div><span className='text-orange-600 '>Likes</span>-{mov.vote_count}</div>
            <Link href={mov.homepage}legacyBehavior>
                <a target='_blank'>Tap for more...</a>
            </Link>
           
        </div>
    </div>
  )
}
