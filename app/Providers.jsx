'use client'

import { ThemeProvider } from "next-themes"

export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className="text-gray-700 dark:text-gray-200 dark:bg-primary h-screen min-h-screen select-none ">
            {children}
        </div>
    </ThemeProvider>
    
  )
}
