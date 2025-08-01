import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Slide } from "react-awesome-reveal";

const Panel = dynamic(() => import("@/app/profile/components/panel"), { ssr: true });

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="px-6 md:px-[80px] py-[30px] [direction:rtl] overflow-hidden">
            <p className="text-[#3D3D3D] font-bold text-[32px] hidden md:block">پروفایل</p>
            <div className="grid grid-cols-3 my-3 items-start gap-[25px]">
                <div className="md:col-span-1 col-span-3">
                    <Slide duration={400} direction="right" triggerOnce>
                        <Panel />
                    </Slide>
                </div>
                <div className="md:col-span-2 col-span-3">
                    {children}
                </div>
            </div>
        </div>
    )
}; export default Layout;