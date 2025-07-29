import { FC } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Logo from "@/public/logo.svg";
import UserIcon from "@/icons/header/user";
import BagIcon from "@/icons/header/bag";
import SearchIcon from "@/icons/header/search";
import Link from "next/link";
const Menu = dynamic(() => import("@/components/header/menu"),{ssr : true});


const Header: FC = () => {
    return (
        <div className="[direction:rtl] px-[80px] pb-[20px] pt-[40px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                    <div className="size-[104px] relative">
                        <Image
                            src={Logo}
                            alt="logo"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                    <p className="text-[#0A3C63] font-black text-[28px]">نوین لایف</p>
                </div>
                <div className="rounded-[16px] min-w-[300px] w-[638px] max-w-[638px] p-[10px] h-[48px]
                    bg-[#F9F9F9] border-[1px] border-[#D5E9F8] flex items-center justify-start gap-[16px]">
                    <div className="size-[24px]">
                        <SearchIcon />
                    </div>
                    <input 
                        type="text" 
                        className="placeholder-[#E9F3FB] text-[#0A3C63] text-[12px] font-bold w-full
                        outline-none"
                        placeholder="جستجو"
                    />
                </div>
                <div className="flex items-center justify-center gap-[16px]">
                    <div className="flex items-center justify-center gap-[16px] bg-[#FFFFFF] 
                    shadow-[0px_0px_20px_1px_rgba(0,0,0,.1)] p-3 rounded-[12px]">
                        <Link 
                            href={"/login"}
                            className="text-[#3D3D3D] font-bold text-[16px]">ثبت‌نام | ورود</Link>
                        <div className="size-[24px] relative">
                            <UserIcon />
                        </div>
                    </div>
                    <div className="size-[48px] bg-[#0A3C63] rounded-[12px] flex items-center justify-center">
                        <div className="size-[24px]">
                            <BagIcon />
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    )
}; export default Header;