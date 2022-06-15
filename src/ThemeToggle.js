import { useEffect, useState } from "react"
import {
    MoonIcon,
    SunIcon
  } from '@heroicons/react/outline'
export default function ThemeToggle() {

    const [theme, setTheme] = useState("light-theme")

    const toggleTheme = () => {
        theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme")
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (<>
        <div onClick={toggleTheme}>
        
            {theme === "dark-theme" ? <MoonIcon className="h-6 w-6 cursor-pointer" aria-hidden="true" /> : <SunIcon className="h-6 w-6 cursor-pointer" aria-hidden="true" />}
        </div>
    </>)
}