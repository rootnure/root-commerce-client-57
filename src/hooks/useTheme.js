import { useEffect, useState } from "react"


const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        const fullDocument = document.documentElement;
        console.log(fullDocument.classList.value);

        if (!isDarkMode) {
            fullDocument.classList.remove('light');
            fullDocument.classList.add('dark');
            setIsDarkMode(true);
            localStorage.setItem('__root_isDarkMode__', true);
        } else {
            // console.log('clicked dark');
            fullDocument.classList.remove('dark');
            fullDocument.classList.add('light');
            setIsDarkMode(false);
            localStorage.setItem('__root_isDarkMode__', false);
        }
    }

    useEffect(() => {
        const isDarkModeEnabled = localStorage.getItem("__root_isDarkMode__");
        const activeMode = isDarkModeEnabled ? 'dark' : 'light';
        document.documentElement.classList.add(activeMode);
        setIsDarkMode(isDarkModeEnabled);
    }, []);

    return { toggleTheme, isDarkMode }
}

export default useTheme;