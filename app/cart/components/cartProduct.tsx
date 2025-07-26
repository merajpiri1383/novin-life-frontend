import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import AirPodImage from '@/public/dev/airpod.png';
import ColorsSquare from "@/components/icons/cart/colorsSquare";
import ShoppingBagIcon from "@/components/icons/cart/shoppingBag";
import ShoppingCartIcon from "@/components/icons/cart/shoppingCart";
import DirectBoxSendIcon from "@/components/icons/cart/directBoxSend";
import AddSquareIcon from "@/components/icons/cart/addSquare";
import MinusSquareIcon from "@/components/icons/cart/minusSquare";
import TrashIcon from "@/components/icons/cart/trash";


const CartProduct = () => {
    return (
        <Slide direction="up" duration={400} triggerOnce>
            <div className="col-span-1 border-[#EDEDED] border-[1px] rounded-[16px] p-6 bg-[#FDFEFF]">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex items-center justify-start gap-6">
                            <p className="text-[20px] text-[#3D3D3D] font-semibold">
                                اسم محصول همراه با برند و مدل</p>
                            <p className="text-[#2196F3] underline font-regular text-[16px] mt-2">
                                جزئیات محصول</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-6">
                            <div className="flex items-center justify-start gap-2">
                                <div className="size-[20px]">
                                    <ColorsSquare />
                                </div>
                                <p className="text-[#3D3D3D] text-[14px] font-regular">سفید</p>
                                <div className="border-[#9C9C9C] border-[0.5px] size-[12px] rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <div className="size-[20px]">
                                    <ShoppingBagIcon />
                                </div>
                                <p className="text-[#3D3D3D] text-[14px] font-regular">گارانتی اصالت کالا</p>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <div className="size-[20px]">
                                    <ShoppingCartIcon />
                                </div>
                                <p className="text-[#3D3D3D] text-[14px] font-regular
                            ">ارسال از دو روز کاری آینده</p>
                            </div><div className="flex items-center justify-start gap-2">
                                <div className="size-[20px]">
                                    <DirectBoxSendIcon />
                                </div>
                                <p className="text-[#3D3D3D] text-[14px] font-regular">خدمات پس از فروش</p>
                            </div>
                        </div>
                    </div>
                    <div className="size-[221px] relative">
                        <Image
                            src={AirPodImage}
                            alt="airpod"
                            fill={true}
                            className="rounded-[16px]"
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 mt-4 gap-4">
                    <div className="col-span-3 border-[#EDEDED] rounded-[16px] p-4 border-[1px]">
                        <p className="text-[#000000] font-regular text-[14px]">آپشنال</p>
                    </div>
                    <div className="col-span-2 border-[#EDEDED] rounded-[16px] p-4 border-[1px]">
                        <div className="flex items-center justify-between">
                            <p className="bg-[#F21818] rounded-[8px] py-[4px] font-black
                            text-[#FFFFFF] text-[14px] px-[8px]">10%</p>
                            <div className="flex items-center justify-center gap-4">
                                <p className="text-[#EDEDED] line-through font-medium
                                text-[12px]">200.000 تومان</p>
                                <p className="text-[#0A3C63] font-semibold text-[16px]">200.000 تومان</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-end justify-between">
                            <div className="flex items-center justify-center gap-4">
                                <div className="size-[20px]">
                                    <AddSquareIcon />
                                </div>
                                <p className="text-[#3D3D3D] font-medium text-[12px]">0</p>
                                <div className="size-[20px]">
                                    <MinusSquareIcon />
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-[8px] p-[4px]
                                border-[#3D3D3D] border-[1px] rounded-[4px] cursor-pointer">
                                <p className="text-[#3D3D3D] font-medium text-[12px]">حذف این محصول</p>
                                <div className="size-[20px]">
                                    <TrashIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}; export default CartProduct;