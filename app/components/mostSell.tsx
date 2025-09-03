import { FC } from "react";
import DesktopProduct from "@/app/components/desktopProduct";
import MedalStarIcon from "@/components/icons/home/medalStar";
import { ProductMainType } from "@/app/types";


const MostSell: FC<{ data: ProductMainType[] }> = ({ data }) => {

    return (
        <div className="m-[80px] [direction:rtl]">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-[8px]">
                    <div className="size-[40px]">
                        <MedalStarIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-bold text-[24px]">پر فروش ترین ها</p>
                </div>
                <div className="w-[70%] bg-[#E9E9E9] h-[1px]"></div>
                <p className="text-[#2196F3] text-[16px]">مشاهده بیشتر</p>
            </div>
            <div className="my-6 grid grid-cols-4 gap-[25px]">
                {
                    data?.map((product, index) => {
                        return (
                            <DesktopProduct
                                {...product}
                                key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}; export default MostSell;