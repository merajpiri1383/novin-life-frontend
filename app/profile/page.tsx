"use client"
import useDevice from "@/hooks/useDevice";
import dynamic from "next/dynamic";
const Desktop = dynamic(() => import("@/app/profile/components/desktop"), { ssr: false });
const Mobile = dynamic(() => import("@/app/profile/components/mobile"),{ ssr : false });

const Page = () => {

    const device = useDevice();

    return (
        <>
            {
                device === "mobile" ? 
                <Mobile /> : 
                <Desktop />
            }
        </>
    )
}; export default Page;