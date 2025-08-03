"use client"
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { historyType } from "@/app/profile/history/page";
const Order = dynamic(() => import("@/app/profile/history/components/order"), { ssr: false });
const ProfileHistoryLinks = dynamic(() => import("@/app/profile/history/components/links"), { ssr: false });


interface Props {
    currentCategory : historyType,
    setCategory : React.Dispatch<React.SetStateAction<historyType>>,
}


const ProfileHistoryDesktop : FC<Props> = ({ currentCategory , setCategory }) => {

    return (
        <div className="border-[1px] border-[#EDEDED] rounded-[16px] p-[25px]">
            <div className="pb-4">
                <p className="text-[#3D3D3D] font-bold text-[24px]">تاریخچه سفارشات</p>
                <ProfileHistoryLinks
                    currentCategory={currentCategory}
                    setCategory={setCategory}
                />

            </div>

            <Order />
            <Order />
            <Order />
            <Order />
        </div>
    )
}; export default ProfileHistoryDesktop;