import { FC } from "react";
import { Slide } from "react-awesome-reveal";
import CloseCircleIcon from "@/components/icons/profile/closeCircle";


type Props = {
    setShow : React.Dispatch<React.SetStateAction<boolean>>,
}

const ProductMobileFilter : FC<Props> = ({ setShow }) => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="fixed top-0 left-0 right-0 bottom-0 z-[2]">
            <Slide direction="up" duration={400} triggerOnce>
                <div className="w-full bg-white h-screen py-6">
                    <div 
                        onClick={() => setShow(false)}
                        className="px-6 pb-6 flex items-center justify-start gap-2 border-b border-[#CBCBCB]
                        cursor-pointer">
                        <div className="size-[20px]">
                            <CloseCircleIcon />
                        </div>
                        <p className="text-[#3D3D3D] font-semibold text-[14px]">مرتب سازی بر اساس </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8">
                        <div className="col-span-1 cursor-pointer px-6">
                            <p className="text-right text-[#3D3D3D] text-[14px] font-regular">پربازدیدترین </p>
                        </div>
                        <div className="col-span-1 cursor-pointer px-6">
                            <p className="text-right text-[#3D3D3D] text-[14px] font-regular">جدیدترین</p>
                        </div>
                        <div className="col-span-1 cursor-pointer px-6">
                            <p className="text-right text-[#3D3D3D] text-[14px] font-regular">پرفروش ترین</p>
                        </div>
                        <div className="col-span-1 cursor-pointer px-6">
                            <p className="text-right text-[#3D3D3D] text-[14px] font-regular">گران ترین</p>
                        </div>
                        <div className="col-span-1 cursor-pointer px-6">
                            <p className="text-right text-[#3D3D3D] text-[14px] font-regular">ارزان ترین</p>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    )
};export default ProductMobileFilter;