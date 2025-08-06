"use client"
import dynamic from "next/dynamic";
import useDevice from "@/hooks/useDevice";

const Desktop = dynamic(() => import("@/app/cart/payment/components/desktop"), { ssr: false });
const Mobile = dynamic(() => import("@/app/cart/payment/components/mobile"), { ssr: false });


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