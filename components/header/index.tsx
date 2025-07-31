"use client"
import { FC } from "react";
import dynamic from "next/dynamic";
import useDevice from "@/hooks/useDevice";


const HeaderMobile = dynamic(() => import("@/components/header/mobile"), { ssr: true });
const HeaderDesktop = dynamic(() => import("@/components/header/desktop"), { ssr: true });



const Header: FC = () => {

    const device = useDevice();

    return (
        <div className="[direction:rtl] px-[25px] md:px-[80px] pb-[20px] pt-[20px] md:pt-[40px]">
            {
                device === "desktop" ?
                    <HeaderDesktop /> :
                    <HeaderMobile />
            }
        </div>
    )
}; export default Header;