import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
    const [mode, setMode] = useState("light");

    useEffect(() => {
        document.documentElement.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
    }, []);
    
    return [mode, setMode]
}

export default useThemeSwitcher