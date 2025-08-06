"use client"
import dynamic from "next/dynamic";
import useDevice from "@/hooks/useDevice";

const ProfileAddressDesktop = dynamic(() => import("@/app/profile/address/components/desktop"), { ssr: false });
const ProfileAddressMobile = dynamic(() => import("@/app/profile/address/components/mobile"), { ssr: false });


const Page = () => {

    const device = useDevice();

    return (
        <>
            {
                device === "desktop" ?
                    <ProfileAddressDesktop /> :
                    <ProfileAddressMobile />
            }
        </>
    )
}; export default Page;