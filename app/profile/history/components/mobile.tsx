"use client"
import dynamic from "next/dynamic";
import { historyType } from "@/app/profile/history/page";
import { FC } from "react";
import ArrowRightIcon from "@/components/icons/login/arrowRight";
import Link from "next/link";

const ProfileHistoryLinks = dynamic(() => import("@/app/profile/history/components/links"),{ssr : false});
const Order = dynamic(() => import("@/app/profile/history/components/order"),{ssr : false});

interface Props {
    currentCategory: historyType,
    setCategory: React.Dispatch<React.SetStateAction<historyType>>,
}


const ProfileHistoryMobile: FC<Props> = ({ currentCategory, setCategory }) => {

    return (
        <>
            <div className="flex items-center justify-start gap-2 border-b-[2px] border-[#EDEDED] pb-4 mb-6">
                <Link href={"/profile"} className="size-[20px]">
                    <ArrowRightIcon color="#0A3C63" />
                </Link>
                <p className="text-[#3D3D3D] text-[12px] font-semibold">تاریخچه سفارشات </p>
            </div>
            <ProfileHistoryLinks
                currentCategory={currentCategory}
                setCategory={setCategory}
            />

            <Order />
        </>
    )
}; export default ProfileHistoryMobile;