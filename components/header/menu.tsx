import { FC } from "react";
import ArrowSquare from "@/icons/header/arrowSquare";


const Menu : FC = () => {
    return (
        <div className="bg-[#E9F3FB] py-[16px] px-[40px] my-6 rounded-[16px] flex items-center 
            justify-start gap-[40px]">
            
            <div className="flex items-center justify-center gap-[4px]">
                <p className="text-[#3D3D3D] text-[16px] font-bold">هولدر</p>
                <div className="size-[18px]">
                    <ArrowSquare />
                </div>
            </div>

            <div className="flex items-center justify-center gap-[4px]">
                <p className="text-[#3D3D3D] text-[16px] font-bold">ورزشی</p>
                <div className="size-[18px]">
                    <ArrowSquare />
                </div>
            </div>

            <div className="flex items-center justify-center gap-[4px]">
                <p className="text-[#3D3D3D] text-[16px] font-bold">کامپیوتر</p>
                <div className="size-[18px]">
                    <ArrowSquare />
                </div>
            </div>

            <div className="flex items-center justify-center gap-[4px]">
                <p className="text-[#3D3D3D] text-[16px] font-bold">پوشیدنی</p>
                <div className="size-[18px]">
                    <ArrowSquare />
                </div>
            </div>
            
            <p className="font-bold text-[16px] text-[#F44336]">تخفیفات ویژه</p>

            <p className="font-bold text-[16px] text-[#2196F3]">پرفروش ترین ها</p>

            <p className="font-bold text-[16px] text-[#2196F3]">جدید ترین محصولات</p>

        </div>
    )
};export default Menu;