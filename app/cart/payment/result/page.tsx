"use client"

import { useState } from "react";
import Image from "next/image";
import SuccessPaymentImage from "@/public/success-payment.svg";
import FailPaymentImage from "@/public/fail-payment.svg";
import HomeIcon from "@/components/icons/cart/home";
import RepeatCircleIcon from "@/components/icons/cart/repeatCircle";
import ReceipTextIcon from "@/components/icons/cart/receipText";


const Page = () => {

    const [isSuccess, setResult] = useState<boolean>(false);

    console.log(setResult);

    return (
        <div className="mb-[80px] mx-[80px] [direction:rtl]">
            <p className="font-bold text-[32px] text-[#3D3D3D]">نتیجه نهایی سفارش</p>
            <div className={`my-12 rounded-[8px] ${isSuccess ? "bg-[#BBDCBC]/20" : "bg-[#F3B8B4]/20"}
                p-8 grid grid-cols-3 items-center`}>
                <div className="col-span-2 flex items-center justify-center">
                    <div className={isSuccess ? "text-[#204422]" : "text-[#69120B]"}>
                        <p className="text-center font-semibold text-[32px]">
                            {
                                isSuccess ?
                                    "سفارش شما با موفقیت انجام شد 🥳" :
                                    "پرداخت شما انجام نشد!"
                            }
                        </p>
                        <p className="text-center font-medium text-[20px] my-12">
                            {
                                isSuccess ?
                                    `متین عزیز سفارش شما انجام شد       
                                در تاریخ معین شده منتظر سفارش خود باشید!` :
                                    `متین عزیز این پیام به منزله تایید نشدن خرید شماست
                                در صورت کسر هزینه از حسب شما، مبلغ پرداختی تا ۷۲ ساعت
                                آینده به حساب شما برخواهدگشت.`
                            }
                        </p>
                        <p className="text-center font-medium text-[20px]">
                            {
                                isSuccess ?
                                    "کد رهگیری سفارش: 045162516" :
                                    "شماره پیگیری پرداخت: 17482638"
                            }
                        </p>
                        {
                            isSuccess ?
                                <div className="mx-auto w-fit flex items-center justify-center gap-[24px] mt-12">
                                    <div className="bg-[#0A3C63] rounded-[8px] flex items-center justify-center
                                    px-[24px] py-[8px] gap-[8px]">
                                        <div className="size-[24px]">
                                            <HomeIcon color="white" />
                                        </div>
                                        <p className="text-[#FFFFFF] font-medium text-[16px]">صفحه اصلی</p>
                                    </div>

                                    <div className="border-[#0A3C63] rounded-[8px] flex items-center justify-center
                                    px-[24px] py-[8px] gap-[8px] border-[1px]">
                                        <div className="size-[24px]">
                                            <ReceipTextIcon />
                                        </div>
                                        <p className="text-[#0A3C63] font-medium text-[16px]"> پیگیری سفارش</p>
                                    </div>

                                </div>
                                : <div className="mx-auto w-fit flex items-center justify-center gap-[24px] mt-12">
                                    <div className="bg-[#0A3C63] rounded-[8px] flex items-center justify-center
                                    px-[24px] py-[8px] gap-[8px]">
                                        <div className="size-[24px]">
                                            <RepeatCircleIcon color="white" />
                                        </div>
                                        <p className="text-[#FFFFFF] font-medium text-[16px]">تلاش دوباره</p>
                                    </div>

                                    <div className="border-[#0A3C63] rounded-[8px] flex items-center justify-center
                                    px-[24px] py-[8px] gap-[8px] border-[1px]">
                                        <div className="size-[24px]">
                                            <HomeIcon color="#0A3C63" />
                                        </div>
                                        <p className="text-[#0A3C63] font-medium text-[16px]"> صفحه اصلی </p>
                                    </div>

                                </div>
                        }
                    </div>
                </div>
                <div className="col-span-1 flex justify-end">
                    <div className="size-[273px] relative">
                        <Image
                            src={isSuccess ? SuccessPaymentImage : FailPaymentImage}
                            fill={true}
                            alt="result"
                            sizes="100%"
                            style={{ objectFit: "contain", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}; export default Page;