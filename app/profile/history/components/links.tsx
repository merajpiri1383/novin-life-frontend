import React, { FC } from "react"
import { historyType } from "@/app/profile/history/page";

interface Props {
    currentCategory: historyType,
    setCategory: React.Dispatch<React.SetStateAction<historyType>>
}

const ProfileHistoryLinks: FC<Props> = ({ currentCategory, setCategory }) => {
    return (
        <div className="flex items-center justify-start gap-[24px] border-b border-[#EDEDED]">
            <div className={`${currentCategory === "current" && "border-b-[2px] border-[#0B79D1]"} 
                        py-4 cursor-pointer transition duration-400`}
                onClick={() => setCategory("current")}>
                <p className={`${currentCategory === "current" ? "text-[#0B79D1] " : "text-[#3D3D3D]"}
                            font-regular text-[12px] md:text-[16px] transition duration-400`}>جاری ۰</p>
            </div>
            <div className={`${currentCategory === "delivered" && "border-b-[2px] border-[#0B79D1]"} 
                        py-4 cursor-pointer transition duration-400`}
                onClick={() => setCategory("delivered")}>
                <p className={`${currentCategory === "delivered" ? "text-[#0B79D1] " : "text-[#3D3D3D]"}
                            font-regular text-[12px] md:text-[16px] transition duration-400`}>تحویل شده ۲۶</p>
            </div>
            <div className={`${currentCategory === "return" && "border-b-[2px] border-[#0B79D1]"} 
                        py-4 cursor-pointer transition duration-400`}
                onClick={() => setCategory("return")}>
                <p className={`${currentCategory === "return" ? "text-[#0B79D1] " : "text-[#3D3D3D]"}
                            font-regular text-[12px] md:text-[16px] transition duration-400`}>مرجوع شده ۴</p>
            </div>
            <div className={`${currentCategory === "canceled" && "border-b-[2px] border-[#0B79D1]"} 
                        py-4 cursor-pointer transition duration-400`}
                onClick={() => setCategory("canceled")}>
                <p className={`${currentCategory === "canceled" ? "text-[#0B79D1] " : "text-[#3D3D3D]"}
                            font-regular text-[12px] md:text-[16px] transition duration-400`}>لغو شده ۴</p>
            </div>
        </div>
    )
}; export default ProfileHistoryLinks;