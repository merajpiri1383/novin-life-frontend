import { FC } from "react";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import AirpodImage from "@/public/dev/airpod2.png";
import MapImage from "@/public/dev/map.png";
import MaskanBankImage from '@/public/maskanbank.svg';
import BlueBankImage from "@/public/bluebank.svg";
import ArrowLeft2Icon from "@/components/icons/home/arrowLeft2";


const CartProduct = () => {
    return (
        <Slide duration={300} direction="up" triggerOnce>
            <div className="my-6 flex items-start justify-between gap-3">
                <div>
                    <div className="size-[80px] rounded-[10px] border border-[#CBCBCB] relative">
                        <Image
                            src={AirpodImage}
                            alt="airpod image"
                            fill={true}
                            sizes="100%"
                            className="rounded-[10px]"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-[#404040] font-semibold text-[14px]">Handsfree مدل 12434</p>
                    <div className="grid grid-cols-3 my-3">
                        <div className="col-span-1 flex items-center justify-start gap-3">
                            <div className="size-[16px] bg-[#E3E2E0] rounded-full"></div>
                            <p className="text-[#404040] font-regular text-[10px]">سفید</p>
                        </div>
                        <p className="col-span-1 text-[#032340] font-regular text-[10px]">سایز 42</p>
                        <p className="col-span-1 text-[#032340] font-regular text-[10px]">1 عدد</p>
                    </div>
                    <p className="text-left text-[#032340] font-regular text-[12px]">600,000 تومان</p>
                </div>
            </div>
        </Slide>
    )
}

const CartPaymentMobile: FC = () => {

    const cartProducts = [1, 2, 3];

    return (
        <div className="m-6 [direction:rtl]">
            <div className="border-b border-[#ADADAD] pb-3">
                <p className="text-[#000000] font-semibold text-[14px]">صورت حساب</p>
            </div>
            <div className="border-b border-[#D9D9D9] pb-3 my-6">
                <p className="text-[#404040] font-regular text-[16px]">بررسی نهایی</p>
            </div>
            <p className="my-6 text-[#404040] text-[12px] font-regular">
                لطفا از درست بودن اطلاعات خود اطمینان حاصل فرمایید</p>

            <div>
                {
                    cartProducts.map((cartProduct, index) => {
                        return (
                            <CartProduct key={index} />
                        )
                    })
                }
            </div>

            <div className="my-10">
                <p className="text-[#404040] font-regular text-[16px]">ارسال به</p>
                <div className="p-4 rounded-[8px] border border-[#EDEDED] my-4">
                    <p className="text-[#3D3D3D] font-regular text-[16px] text-justify">
                        بجنورد, میدان شهید, بین شهید و 17 شهریور ,کوچه عزیز مصر ,پلاک 13 </p>

                    <div className="mt-4 flex items-center justify-start gap-4">
                        <div>
                            <div className="w-[165px] h-[128px] relative">
                                <Image
                                    src={MapImage}
                                    alt="map image"
                                    fill={true}
                                    sizes="100%"
                                    className="rounded-[8px]"
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-4">
                            <p className="text-[#3D3D3D] font-regular text-[12px]">
                                خراسان شمالی - بجنورد
                            </p>
                            <p className="text-[#3D3D3D] font-regular text-[12px]">1071311</p>
                            <p className="text-[#3D3D3D] font-regular text-[12px]">09014892023</p>
                            <p className="text-[#3D3D3D] font-regular text-[12px]">مهسا شیرین زبان</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-[#D9D9D9] pb-3 my-6">
                <p className="text-[#404040] font-regular text-[16px]">زمان ارسال انتخابی شما</p>
            </div>
            <div className="border border-[#0A3C63] rounded-[8px] w-fit py-[8px] px-[24px] bg-[#D5F2FF]">
                <p className="text-[#0A3C63] font-medium text-[16px]">15 مهر </p>
            </div>


            <div className="border-b border-[#D9D9D9] pb-3 my-6 mt-12">
                <p className="text-[#404040] font-regular text-[16px]">زمان ارسال انتخابی شما</p>
            </div>
            <div className="my-3 flex items-center justify-between border-b border-[#D9D9D9] pb-3">
                <div className="flex items-center justify-center gap-2">
                    <div className="size-[18px] border border-[#404040] rounded-[6px]"></div>
                    <p className="text-[#404040] font-medium text-[16px]">بانک مسکن</p>
                </div>
                <div className="size-[32px] relative">
                    <Image
                        src={MaskanBankImage}
                        alt="maskan bank"
                        fill={true}
                        sizes="100%"
                        className="rounded-[3px]"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
            </div>
            <div className="my-3 flex items-center justify-between ">
                <div className="flex items-center justify-center gap-2">
                    <div className="size-[18px] border border-[#404040] rounded-[6px]"></div>
                    <p className="text-[#404040] font-medium text-[16px]">بلو بانک</p>
                </div>
                <div className="size-[32px] relative">
                    <Image
                        src={BlueBankImage}
                        alt="maskan bank"
                        fill={true}
                        sizes="100%"
                        className="rounded-[8px]"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
            </div>
            <div className="my-6 flex items-center justify-center bg-[#0A3C63] py-[8px] gap-[8px] rounded-[8px]">
                <div className="size-[24px]">
                    <ArrowLeft2Icon color="#FFFFFF" />
                </div>
                <p className="text-[#FFFFFF] font-medium text-[16px]">انتقال به صفحه پرداخت</p>
            </div>
        </div>
    )
}; export default CartPaymentMobile;