"use client"
import dynamic from "next/dynamic";
import useDevice from "@/hooks/useDevice";
const Mobile = dynamic(() => import("@/app/profile/account/mobile"), { ssr: false });
const Desktop = dynamic(() => import("@/app/profile/account/desktop"), { ssr: false });


const Page = () => {

    const device = useDevice();

    return (
        <>
            {
                device === "desktop" ?
                    <Desktop /> :
                    <Mobile />
            }
        </>
    )
}; export default Page;