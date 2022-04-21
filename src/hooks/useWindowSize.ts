import { useEffect, useState } from "react";

interface IWindowSize {
    width: number;
    height: number;
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<IWindowSize>();

    useEffect(()=>{
        const handler = ()=>{
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight,
            })
        }
        handler();
        window.addEventListener('resize',handler);
        return ()=>{
            window.removeEventListener('resize',handler)
        }
    },[])
    return windowSize
}

export default useWindowSize