'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { MdDarkMode ,MdLightMode} from "react-icons/md";


export default function DarkMode() {

    const {theme,setTheme,systemTheme}=useTheme();
    const [mounted,setMounted]=useState(false);
    const currentTheme=theme === 'system'?systemTheme:theme;
    useEffect(()=>setMounted(true),[]);
    return (
    <div>
        {mounted && currentTheme === 'dark' ? (<MdLightMode 
            onClick={()=> setTheme('light')}
            className='hover:text-orange-600 text-xl cursor-pointer'
            />
        ):
        (<MdDarkMode 
            onClick={()=> setTheme('dark')}
            className='hover:text-orange-600 text-xl cursor-pointer'
            />
        )
        }
        
    </div>
  )
}




{/* <MdDarkMode /> */}
{/* <MdLightMode /> */}