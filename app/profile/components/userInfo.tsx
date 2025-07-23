import Image from "next/image";
import ProfileImage from "@/public/dev/profile.png";
import AddCircleIcon from "@/components/icons/profile/addCircle";
import LockIcon from "@/components/icons/profile/lock";
import ActivityIcon from "@/components/icons/profile/activity";
import LocationMinus from "@/components/icons/profile/locationMinus";
import UserIcon from "@/components/icons/header/user";
import LogoutIcon from "@/components/icons/profile/logout";


const UserInfo = () => {
    return (
        <div className="px-[32px] py-[24px] border-[1px] border-[#EDEDED] rounded-[16px]">
            <div className="border-[#EDEDED] border-b-[1px] pb-3">
                <div className="relative rounded-full size-[144px] mx-auto">
                    <Image
                        src={ProfileImage}
                        alt="profile image"
                        fill={true}
                        sizes="100%"
                        className="rounded-full"
                    />
                </div>
                <p className="my-3 font-regular text-[20px] text-center">جواد چه</p>
                <p className="text-center text-[#656565] text-[20px]">xxxxxxx@Yahoo.com</p>
            </div>

            <div className="my-3">
                <div className="flex items-center justify-between py-[12px]">
                    <div className="flex items-center justify-center gap-[8px]">
                        <p className="text-[#3D3D3D] font-regular text-[20px]">اعتبار خرید</p>
                        <div className="size-[20px]">
                            <AddCircleIcon />
                        </div>
                    </div>
                    <p className="text-[#3D3D3D] font-regular text-[20px]">۱۰۰,۰۰۰ تومان</p>
                </div>
                <div className="flex items-center justify-between py-[12px]">
                    <p className="text-[#3D3D3D] font-regular text-[20px]">تعداد سفارش ها</p>
                    <p className="text-[#3D3D3D] font-regular text-[20px]">۷۰ </p>
                </div>
            </div>

            <div className="my-3">
                <div className="flex items-center justify-start pb-3 gap-[8px] 
                    border-b-[1px] border-[#0B79D1] my-4">
                    <div className="size-[24px]">
                        <LockIcon />
                    </div>
                    <p className="text-[#0B79D1] font-regular text-[20px]">داشبورد</p>
                </div>
                <div className="flex items-center justify-start pb-3 gap-[8px] 
                    border-b-[1px] border-[#EDEDED] my-4">
                    <div className="size-[24px]">
                        <ActivityIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-regular text-[20px]">تاریخچه سفارشات</p>
                </div>
                <div className="flex items-center justify-start pb-3 gap-[8px] 
                    border-b-[1px] border-[#EDEDED] my-4">
                    <div className="size-[24px]">
                        <LocationMinus />
                    </div>
                    <p className="text-[#3D3D3D] font-regular text-[20px]">آدرس ها</p>
                </div>
                <div className="flex items-center justify-start pb-3 gap-[8px] 
                    border-b-[1px] border-[#EDEDED] my-4">
                    <div className="size-[24px]">
                        <UserIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-regular text-[20px]">اطلاعات حساب کاربری</p>
                </div>
                <div className="flex items-center justify-start  gap-[8px] mt-4">
                    <div className="size-[24px]">
                        <LogoutIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-regular text-[20px]">خروج</p>
                </div>
            </div>
        </div>
    )
}; export default UserInfo;