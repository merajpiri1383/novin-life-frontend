"use client"
import Image from "next/image";
import { useState } from "react";
import TickCircleIcon from "@/components/icons/profile/tickCircle2";
import ProductImage1 from "@/public/dev/productImage1.png";
import BillIcon from "@/components/icons/profile/bill";

type historyType = "current" | "delivered" | "return" | "canceled";


const Order = () => {
    return (
        <div className="my-4 border-[#EDEDED] border-[1px] rounded-[8px]">
            <div className="flex items-center justify-start gap-[8px] m-[20px]">
                <div className="size-[24px]">
                    <TickCircleIcon />
                </div>
                <p className="font-medium text-[16px] text-[#3D3D3D]">تحویل شده</p>
            </div>
            <div className="m-[20px] flex items-center justify-start gap-[16px]">
                <p className="text-[#898989] font-regular text-[16px]">۳ شهریور ۱۴۰۲</p>
                <div className="flex items-center justify-center gap-[8px]">
                    <p className="font-regular text-[16px] text-[#898989]">کد سفارش </p>
                    <p className="font-regular text-[16px] text-[#3D3D3D]">۳۵۴۵۳۴۵۲۱</p>
                </div>
                <div className="flex items-center justify-center gap-[8px]">
                    <p className="font-regular text-[16px] text-[#898989]">مبلغ</p>
                    <p className="font-regular text-[16px] text-[#3D3D3D]"> ۵۴۵,۰۰۰ تومان</p>
                </div>
                <div className="flex items-center justify-center gap-[8px]">
                    <p className="font-regular text-[16px] text-[#898989]">تخفیف</p>
                    <p className="font-regular text-[16px] text-[#3D3D3D]"> ۵۴۵,۰۰۰ تومان</p>
                </div>
            </div>
            <div className="my-[20px] border-t border-b border-[#EDEDED] p-[20px] 
                grid grid-cols-7 gap-[32px]">
                    <div className="col-span-1 size-[88px] relative">
                        <Image 
                            src={ProductImage1}
                            alt="product image1"
                            fill={true}
                            sizes="100%"
                            style={{objectFit : "cover",objectPosition : "center"}}
                            className="rounded-[8px]"
                        />
                    </div>
                    <div className="col-span-1 size-[88px] relative">
                        <Image 
                            src={ProductImage1}
                            alt="product image1"
                            fill={true}
                            sizes="100%"
                            style={{objectFit : "cover",objectPosition : "center"}}
                            className="rounded-[8px]"
                        />
                    </div>
                    <div className="col-span-1 size-[88px] relative">
                        <Image 
                            src={ProductImage1}
                            alt="product image1"
                            fill={true}
                            sizes="100%"
                            style={{objectFit : "cover",objectPosition : "center"}}
                            className="rounded-[8px]"
                        />
                    </div>
                    <div className="col-span-1 size-[88px] relative">
                        <Image 
                            src={ProductImage1}
                            alt="product image1"
                            fill={true}
                            sizes="100%"
                            style={{objectFit : "cover",objectPosition : "center"}}
                            className="rounded-[8px]"
                        />
                    </div>
                    <div className="col-span-1 size-[88px] relative">
                        <Image 
                            src={ProductImage1}
                            alt="product image1"
                            fill={true}
                            sizes="100%"
                            style={{objectFit : "cover",objectPosition : "center"}}
                            className="rounded-[8px]"
                        />
                    </div>
                    <div className="col-span-1 size-[88px] relative">
                        <Image 
                            src={ProductImage1}
                            alt="product image1"
                            fill={true}
                            sizes="100%"
                            style={{objectFit : "cover",objectPosition : "center"}}
                            className="rounded-[8px]"
                        />
                    </div>
                    
                </div>
            <div className="m-[20px] flex items-center justify-end gap-[16px]">
                <div className="size-[24px]">
                    <BillIcon />
                </div>
                <p className="text-[#0B79D1] font-medium text-[14px]">مشاهده سفارش</p>
            </div>
        </div>
    )
}


const Page = () => {

    const [currentCategory,setCategory] = useState<historyType>("current");

    return (
        <div className="border-[1px] border-[#EDEDED] rounded-[16px] p-[25px]">
            <div className="pb-4">
                <p className="text-[#3D3D3D] font-bold text-[24px]">تاریخچه سفارشات</p>

                <div className="flex items-center justify-start gap-[24px] border-b border-[#EDEDED]">
                    <div className={`${currentCategory === "current" && "border-b-[2px] border-[#0B79D1]"} 
                        py-4 cursor-pointer transition duration-400`}
                        onClick={() => setCategory("current")}>
                        <p className={`${currentCategory === "current" ? "text-[#0B79D1] " : "text-[#3D3D3D]"}
                            font-regular text-[16px] transition duration-400`}>جاری ۰</p>
                    </div>
                    <div className={`${currentCategory === "delivered" && "border-b-[2px] border-[#0B79D1]"} 
                        py-4 cursor-pointer transition duration-400`}
                        onClick={() => setCategory("delivered")}>
                        <p className={`${currentCategory === "delivered" ? "text-[#0B79D1] " : "text-[#3D3D3D]"}
                            font-regular text-[16px] transition duration-400`}>تحویل شده ۲۶</p>
                    </div>
                    <div className={`${currentCategory === "return" && "border-b-[2px] border-[#0B79D1]"} 
                        py-4 cursor-pointer transition duration-400`}
                        onClick={() => setCategory("return")}>
                        <p className={`${currentCategory === "return" ? "text-[#0B79D1] " : "text-[#3D3D3D]"}
                            font-regular text-[16px] transition duration-400`}>مرجوع شده ۴</p>
                    </div>
                    <div className={`${currentCategory === "canceled" && "border-b-[2px] border-[#0B79D1]"} 
                        py-4 cursor-pointer transition duration-400`}
                        onClick={() => setCategory("canceled")}>
                        <p className={`${currentCategory === "canceled" ? "text-[#0B79D1] " : "text-[#3D3D3D]"}
                            font-regular text-[16px] transition duration-400`}>لغو شده ۴</p>
                    </div>
                </div>
            </div>

            <Order />
            <Order />
            <Order />
            <Order />
        </div>
    )
}; export default Page;