"use client"
import dynamic from "next/dynamic";
import useDevice from "@/hooks/useDevice";
const Desktop = dynamic(() => import("@/app/product/components/desktop"), { ssr: false });
const Mobile = dynamic(() => import("@/app/product/components/mobile"), { ssr: false });



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