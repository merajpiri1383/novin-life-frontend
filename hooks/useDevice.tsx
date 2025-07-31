"use client"

import { useEffect, useState } from "react";


type deviceType = "mobile" | "desktop";

const useDevice = () => {

    const [device,setDevice] = useState<deviceType>("mobile");

    const checkWindowSize = () => {
        window.innerWidth > 768 ? setDevice("desktop") : setDevice("mobile");
    }

    useEffect(() => {
        window.addEventListener("resize",checkWindowSize);

        checkWindowSize();

        return () => window.removeEventListener("resize",checkWindowSize);
    },[]);

    return device;
    
};export default  useDevice ;