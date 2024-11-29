// /src/hooks/useWindowSize.js
import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowsSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect (() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowsSize;
}

export default useWindowSize;