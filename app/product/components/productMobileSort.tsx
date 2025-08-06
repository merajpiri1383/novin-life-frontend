import { Slide } from "react-awesome-reveal";
import ArrowRightIcon from "@/components/icons/login/arrowRight";
import { FC } from "react";
import ArrowDownIcon from "@/components/icons/about/arrowDown";

interface Props {
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
}

const ProductMobileSort: FC<Props> = ({ setShow }) => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="fixed top-0 left-0 right-0 bottom-0 z-[2]">
            <Slide direction="up" duration={400} triggerOnce>
                <div className="w-full h-screen bg-white py-6">
                    <div className="flex items-center justify-between px-6 border-b border-[#CBCBCB] pb-6">
                        <div
                            onClick={() => setShow(false)}
                            className="flex items-center justify-center gap-2 cursor-pointer">
                            <div className="size-[20px]">
                                <ArrowRightIcon />
                            </div>
                            <p className="text-[#242424] font-medium text-[12px]">فیلترها</p>
                        </div>
                        <p className="text-[#0A3C63] font-semibold text-[10px]">حذف فیلترها</p>
                    </div>

                    <div className="my-3 border-b border-[#EDEDED] flex items-center justify-between mx-6 my-8 pb-4">
                        <p className="text-[#3D3D3D] font-regular text-[14px]">برند</p>
                        <div className="size-[16px]">
                            <ArrowDownIcon color="#3D3D3D" />
                        </div>
                    </div>

                    <div className="my-3 border-b border-[#EDEDED] flex items-center justify-between mx-6 my-8 pb-4">
                        <p className="text-[#3D3D3D] font-regular text-[14px]">اندازه</p>
                        <div className="size-[16px]">
                            <ArrowDownIcon color="#3D3D3D" />
                        </div>
                    </div>

                    <div className="my-3 border-b border-[#EDEDED] flex items-center justify-between mx-6 my-8 pb-4">
                        <p className="text-[#3D3D3D] font-regular text-[14px]">رنگ</p>
                        <div className="size-[16px]">
                            <ArrowDownIcon color="#3D3D3D" />
                        </div>
                    </div>

                    <div className="my-3 border-b border-[#EDEDED] flex items-center justify-between mx-6 my-8 pb-4">
                        <p className="text-[#3D3D3D] font-regular text-[14px]">فقط کالاهای موجود</p>
                        <div className="h-[20px] w-[40px] border-[1px] border-[#EDEDED] rounded-full
                                flex items-center justify-end p-[2px]">
                            <div className="size-[16px] bg-[#3D3D3D] rounded-full"></div>
                        </div>
                    </div>

                    <div className="my-3 border-b border-[#EDEDED] flex items-center justify-between mx-6 my-8 pb-4">
                        <p className="text-[#3D3D3D] font-regular text-[14px]">محدوده قیمت</p>
                        <div className="size-[16px]">
                            <ArrowDownIcon color="#3D3D3D" />
                        </div>
                    </div>

                    <div className="bg-[#0A3C63] m-6 rounded-[8px] mt-16 text-center py-3">
                        <p className="text-[#FFFFFF] font-medium text-[14px]">اعمال فیلتر ها</p>
                    </div>
                </div>
            </Slide>
        </div>
    )
}; export default ProductMobileSort;