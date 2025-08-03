"use client"
import useDevice from "@/hooks/useDevice";
import dynamic from "next/dynamic";
import { useState } from "react";

export type historyType = "current" | "delivered" | "return" | "canceled";

const Desktop = dynamic(() => import("@/app/profile/history/components/desktop"), { ssr: false });
const Mobile = dynamic(() => import("@/app/profile/history/components/mobile"), { ssr: false });



const Page = () => {

    const [currentCategory, setCategory] = useState<historyType>("current");
    const device = useDevice();

    return (
        <>
            {
                device === "mobile" ?
                    <Mobile
                        currentCategory={currentCategory}
                        setCategory={setCategory}
                    /> :
                    <Desktop
                        currentCategory={currentCategory}
                        setCategory={setCategory}
                    />
            }
        </>
    )
}; export default Page;