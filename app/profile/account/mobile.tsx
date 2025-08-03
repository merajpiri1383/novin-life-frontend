import ArrowRightIcon from "@/components/icons/login/arrowRight";
import MagicPen from "@/components/icons/profile/magicPen";
import Link from "next/link";

const ProfileAccountMobile = () => {
    return (
        <div className="pb-6">
            <div className="flex items-center justify-start gap-2 border-b-[2px] border-[#EDEDED] pb-4 mb-6">
                <Link href={"/profile"} className="size-[20px]">
                    <ArrowRightIcon color="#0A3C63" />
                </Link>
                <p className="text-[#0A3C63]">حساب کاربری</p>
            </div>

            <div className="my-6 relative flex items-center justify-between p-3 border 
                border-[#0A3C63] rounded-[8px]">
                <input
                    type="text"
                    className="w-full text-[16px] text-regular text-[#3D3D3D] outline-none"
                />
                <div className="size-[24px]">
                    <MagicPen color="#0A3C63" />
                </div>
                <div className="bg-white absolute -top-[25%] px-3">
                    <p className="text-[#3D3D3D] font-regular text-[14px]">نام و نام خانوادگی</p>
                </div>
            </div>
            <div className="my-6 relative flex items-center justify-between p-3 border 
                border-[#0A3C63] rounded-[8px]">
                <input
                    type="text"
                    className="w-full text-[16px] text-regular text-[#3D3D3D] outline-none"
                />
                <div className="size-[24px]">
                    <MagicPen color="#0A3C63" />
                </div>
                <div className="bg-white absolute -top-[25%] px-3">
                    <p className="text-[#3D3D3D] font-regular text-[14px]">کدملی</p>
                </div>
            </div>
            <div className="my-6 relative flex items-center justify-between p-3 border 
                border-[#0A3C63] rounded-[8px]">
                <input
                    type="text"
                    className="w-full text-[16px] text-regular text-[#3D3D3D] outline-none"
                />
                <div className="size-[24px]">
                    <MagicPen color="#0A3C63" />
                </div>
                <div className="bg-white absolute -top-[25%] px-3">
                    <p className="text-[#3D3D3D] font-regular text-[14px]">ایمیل</p>
                </div>
            </div>
            <div className="my-6 relative flex items-center justify-between p-3 border 
                border-[#0A3C63] rounded-[8px]">
                <input
                    type="email"
                    className="w-full text-[16px] text-regular text-[#3D3D3D] outline-none"
                />
                <div className="size-[24px]">
                    <MagicPen color="#0A3C63" />
                </div>
                <div className="bg-white absolute -top-[25%] px-3">
                    <p className="text-[#3D3D3D] font-regular text-[14px]">شماره تماس</p>
                </div>
            </div>
            <div className="my-6 relative flex items-center justify-between p-3 border 
                border-[#0A3C63] rounded-[8px]">
                <input
                    type="text"
                    className="w-full text-[16px] text-regular text-[#3D3D3D] outline-none"
                />
                <div className="size-[24px]">
                    <MagicPen color="#0A3C63" />
                </div>
                <div className="bg-white absolute -top-[25%] px-3">
                    <p className="text-[#3D3D3D] font-regular text-[14px]">جنسیت</p>
                </div>
            </div>

            <div className="bg-[#0A3C63] w-full rounded-[8px] p-3 cursor-pointer">
                <p className="text-[#FFFFFF] text-center text-[16px] font-medium">ثبت</p>
            </div>
        </div>
    )
}; export default ProfileAccountMobile;