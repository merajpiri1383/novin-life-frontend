"use client"
import Image from "next/image";
import ProfileImage from "@/public/dev/profile.png";
import AddCircleIcon from "@/components/icons/profile/addCircle";
import LockIcon from "@/components/icons/profile/lock";
import ActivityIcon from "@/components/icons/profile/activity";
import LocationMinus from "@/components/icons/profile/locationMinus";
import UserIcon from "@/components/icons/header/user";
import LogoutIcon from "@/components/icons/profile/logout";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MessageIcon from "@/components/icons/profile/message";


const Panel = () => {

    const pathname = usePathname();


    return (
        <div className={`md:px-[32px] md:py-[24px] md:border-[1px] border-[#EDEDED] rounded-[16px]
            ${ (pathname === "/profile/account" || pathname === "/profile/history" )
            && "hidden md:block"}`}>
            <div className="border-[#EDEDED] border-b-[1px] pb-3">
                <div className="relative rounded-full size-[108px] md:size-[144px] mx-auto">
                    <Image
                        src={ProfileImage}
                        alt="profile image"
                        fill={true}
                        sizes="100%"
                        className="rounded-full"
                    />
                </div>
                <p className="my-3 font-regular text-[16px] md:text-[20px] text-center">جواد چه</p>
                <p className="text-center text-[#656565] text-[16] md:text-[20px]">xxxxxxx@Yahoo.com</p>
            </div>

            <div className="my-3">
                <div className="flex items-center justify-between py-[12px]">
                    <div className="flex items-center justify-center gap-[8px]">
                        <p className="text-[#3D3D3D] font-regular text-[16px] md:text-[20px]">اعتبار خرید</p>
                        <div className="size-[20px]">
                            <AddCircleIcon />
                        </div>
                    </div>
                    <p className="text-[#3D3D3D] font-regular text-[16px] md:text-[20px]">۱۰۰,۰۰۰ تومان</p>
                </div>
                <div className="flex items-center justify-between py-[12px]">
                    <p className="text-[#3D3D3D] font-regular text-[16px] md:text-[20px]">تعداد سفارش ها</p>
                    <p className="text-[#3D3D3D] font-regular text-[16px] md:text-[20px]">۷۰ </p>
                </div>
            </div>

            <div className="my-3">
                <Link href={"/profile"}
                    className={`flex items-center justify-start pb-3 gap-[8px] my-4
                    border-b-[1px] ${pathname === "/profile" ? "border-[#0B79D1]" : "border-[#EDEDED]"}`}>
                    <div className="size-[20px] md:size-[24px]">
                        <LockIcon color={pathname === "/profile" ? "#0B79D1" : "#3D3D3D"} />
                    </div>
                    <p className={`${pathname === "/profile" ? "text-[#0B79D1]" : "text-[#3D3D3D]"} 
                    font-regular text-[16px] md:text-[20px]`}>داشبورد</p>
                </Link>
                <Link href={"/profile/history"} className="flex items-center justify-start pb-3 gap-[8px] 
                    border-b-[1px] border-[#EDEDED] my-4">
                    <div className="size-[20px] md:size-[24px]">
                        <ActivityIcon color={pathname === "/profile/history" ? "#0B79D1" : "#3D3D3D"} />
                    </div>
                    <p className={`${pathname === "/profile/history" ? "text-[#0B79D1]" : "text-[#3D3D3D]"} 
                    font-regular text-[16px] md:text-[20px]`}>تاریخچه سفارشات</p>
                </Link>
                <Link href={"/profile/address"}
                    className="flex items-center justify-start pb-3 gap-[8px] 
                    border-b-[1px] border-[#EDEDED] my-4">
                    <div className="size-[20px] md:size-[24px]">
                        <LocationMinus color={pathname === "/profile/address" ? "#0B79D1" : "#3D3D3D"} />
                    </div>
                    <p className={`${pathname === "/profile/address" ? "text-[#0B79D1]" : "text-[#3D3D3D]"} 
                    font-regular text-[16px] md:text-[20px]`}>آدرس ها</p>
                </Link>
                <Link href={"/profile/review"}
                    className="flex items-center justify-start pb-3 gap-[8px] 
                    border-b-[1px] border-[#EDEDED] my-4">
                    <div className="size-[20px] md:size-[24px]">
                        <MessageIcon color={pathname === "/profile/review" ? "#0B79D1" : "#3D3D3D"} />
                    </div>
                    <p className={`${pathname === "/profile/review" ? "text-[#0B79D1]" : "text-[#3D3D3D]"} 
                    font-regular text-[16px] md:text-[20px]`}>نظرات من</p>
                </Link>
                <Link href={"/profile/account"}
                    className="flex items-center justify-start pb-3 gap-[8px] 
                    border-b-[1px] border-[#EDEDED] my-4">
                    <div className="size-[20px] md:size-[24px]">
                        <UserIcon color={pathname === "/profile/account" ? "#0B79D1" : "#3D3D3D"} />
                    </div>
                    <p className={`${pathname === "/profile/account" ? "text-[#0B79D1]" : "text-[#3D3D3D]"} 
                    font-regular text-[16px] md:text-[20px]`}>اطلاعات حساب کاربری</p>
                </Link>
                <div className="flex items-center justify-start  gap-[8px] mt-4">
                    <div className="size-[20px] md:size-[24px]">
                        <LogoutIcon />
                    </div> 
                    <p className="text-[#3D3D3D] font-regular text-[16px] md:text-[20px]">خروج</p>
                </div>
            </div>
        </div>
    )
}; export default Panel;