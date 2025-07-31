import MobileProduct from "@/app/components/mobileProduct";
import { FC } from "react";


interface Props {
    title ?: string,
    counts ?: number[],
}

const MobileProducts : FC<Props> = ({ counts = [] , title = "" }) => {

    return (
        <div className="m-6 [direction:rtl]">
            <div className="flex items-center justify-between">
                <p className="text-[#3D3D3D] font-semibold text-[14px]">{title}</p>
                <p className="text-[#2196F3] font-regular text-[10px]">مشاهده بیشتر</p>
            </div>
            <div className="my-4 grid grid-cols-2 gap-[15px]">
                {
                    counts.map((item,index) => {
                        return (
                            <MobileProduct key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
};export default MobileProducts;