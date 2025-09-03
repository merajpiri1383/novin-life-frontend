import { FC } from "react";
import MobileProduct from "@/app/components/mobileProduct";
import { ProductMainType } from "@/app/types";



interface Props {
    title?: string,
    products?: ProductMainType[],
    className?: string,
}

const MobileProducts: FC<Props> = ({ products = [], title = "", className }) => {

    return (
        <div className={`m-6 [direction:rtl] ${className}`}>
            <div className="flex items-center justify-between">
                <p className="text-[#3D3D3D] font-semibold text-[14px]">{title}</p>
                <p className="text-[#2196F3] font-regular text-[10px]">مشاهده بیشتر</p>
            </div>
            <div className="my-4 grid grid-cols-2 gap-[15px]">
                {
                    products.map((product, index) => {
                        return (
                            <MobileProduct
                                {...product}
                                key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}; export default MobileProducts;