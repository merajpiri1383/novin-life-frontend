import Image from "next/image";
import Logo from "@/public/logo.svg";
import SearchIcon from "@/icons/header/search";

const HeaderMobile = () => {
    return (
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3 border-[1px] border-[#EDEDED] rounded-[8px]
                flex items-center justify-between px-3">
                    <input
                        type="text"
                        className="w-full outline-none text-[10px] text-[#0A3C63]
                        placeholder-[#0A3C63]"
                        placeholder="جستجو در"
                    />
                    <div className="size-[16px]">
                        <SearchIcon />
                    </div>
                </div>
            <div className="col-span-2 flex items-center justify-end gap-2">
                <p className="font-black text-[16px] text-[#0A3C63]">نوین لایف</p>
                <div className="size-[37px] relative">
                    <Image
                        src={Logo}
                        alt="logo"
                        fill={true}
                        sizes="100%"
                        style={{objectFit : "cover",objectPosition : "center"}}
                    />
                </div>
            </div>
        </div>
    )
};export default HeaderMobile;