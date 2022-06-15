import { useEffect, useState } from "react"
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
            Toggle
        </div>
    </>)
}