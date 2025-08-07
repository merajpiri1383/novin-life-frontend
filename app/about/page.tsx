"use client"
import dynamic from "next/dynamic";
import useDevice from "@/hooks/useDevice";

const AboutDesktop = dynamic(() => import('@/app/about/components/desktop'), { ssr: false });
const AboutMobile = dynamic(() => import("@/app/about/components/mobile"), { ssr: false });


const Page = () => {

    const device = useDevice();

    return (
        <>
            {
                device === "desktop" ?
                    <AboutDesktop /> :
                    <AboutMobile />
            }
        </>
    )
}; export default Page;