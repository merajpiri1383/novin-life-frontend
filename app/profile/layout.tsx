import dynamic from "next/dynamic";
import React, { FC } from "react";

const Panel = dynamic(() => import("@/app/profile/components/panel"), { ssr: true });

const Layout : FC<{children : React.ReactNode}> = ({ children }) => {
    return (
        <div className="px-[80px] py-[30px] [direction:rtl]">
            <p className="text-[#3D3D3D] font-bold text-[32px]">پروفایل</p>
            <div className="grid grid-cols-3 my-3 items-start gap-[25px]">
                <div className="col-span-1">
                    <Panel />
                </div>
                <div className="col-span-2">
                    {children}
                </div>
            </div>
        </div>
    )
};export default Layout;