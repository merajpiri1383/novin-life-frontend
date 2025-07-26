import dynamic from "next/dynamic";
import { Slide } from "react-awesome-reveal";
import InfoCircleIcon from "@/components/icons/cart/infoCircle";
const Cost = dynamic(() => import("@/app/cart/components/cost"), { ssr: true });
const Address = dynamic(() => import("@/app/cart/payment/components/address"), { ssr: true });
const SendTime = dynamic(() => import("@/app/cart/payment/components/sendTime"), { ssr: true });
const PaymentMethod = dynamic(() => import("@/app/cart/payment/components/paymentMethod"),{ssr : true});


const Page = () => {
    return (
        <div className="mb-12 mx-[80px] [direction:rtl]">

            <p className="text-[#3D3D3D] font-bold text-[32px]">صورت حساب</p>
            <div className="grid grid-cols-3 gap-[50px] mt-6 items-start">
                <div className="col-span-2">
                    <p className="text-[#3D3D3D] font-regular text-[16px]">آدرس انتخابی شما</p>
                    <div className="my-2 h-[1px] w-full bg-[#EDEDED]"></div>
                    <Address />
                    <SendTime />
                    <PaymentMethod />
                </div>
                <div className="col-span-1">
                    <Slide duration={400} triggerOnce direction="left">
                        <div className="border-[1px] border-[#D6D6D6] rounded-[16px] p-4">
                            <p className="text-[#F21818] font-medium text-[14px] mb-2">کد تخفیف</p>
                            <p className="my-2 text-[#3D3D3D] font-medium text-[14px] text-justify">
                                کد تخفیف کد معرف کارت هدیه خود را در زیر وارد کرده و دکمه
                                ثبت رو بزنید تا در صورت داشتن اعتبار به سفارش شما اعمال شود</p>
                            <div className="flex items-center justify-between gap-[8px]">
                                <input
                                    type="text"
                                    className="outline-none border-[#D6D6D6] border-[1px] rounded-[8px]
                                    py-[8px] px-[16px] w-full"
                                />
                                <div className="border-[#F21818] px-[24px] py-[8px] border-[1px]
                                    rounded-[8px] cursor-pointer">
                                    <p className="text-[#F21818] text-[14px] font-medium">ثبت</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide duration={400} triggerOnce direction="left" className="my-6">
                        <Cost />
                    </Slide>
                    <Slide direction="up" duration={400} triggerOnce>
                        <div className="p-4 border-[#D6D6D6] border-[1px] rounded-[8px]">
                            <div className="size-[24px]">
                                <InfoCircleIcon />
                            </div>
                            <div className="my-3 flex items-center justify-start gap-2">
                                <div className="size-[8px] rounded-full bg-[#3D3D3D]"></div>
                                <p className="font-regular text-[#3D3D3D] text-[14px]">
                                    ارسال رایگان برای سفارش های بالای ۷۰۰.۰۰۰ تومن
                                </p>
                            </div>
                            <div className="my-3 flex items-center justify-start gap-2">
                                <div className="size-[8px] rounded-full bg-[#3D3D3D]"></div>
                                <p className="font-regular text-[#3D3D3D] text-[14px]">
                                    در صورت اتمام موجودی‌، کالاها از سبد خرید حذف میشوند.
                                </p>
                            </div>
                            <div className="my-3 flex items-center justify-start gap-2">
                                <div className="size-[8px] rounded-full bg-[#3D3D3D]"></div>
                                <p className="font-regular text-[#3D3D3D] text-[14px]">
                                    لطفا در طول مراحل خرید فیلتر شکن خود را خاموش کنید.
                                </p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>

        </div>
    )
}; export default Page;