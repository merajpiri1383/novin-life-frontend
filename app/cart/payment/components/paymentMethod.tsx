"use client"
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import MaskanBankImage from '@/public/maskanbank.svg';
import BlueBankImage from "@/public/bluebank.svg";
import ConvertCardIcon from "@/components/icons/cart/convertCard";
import CardsIcon from "@/components/icons/cart/cards";


const CheckBox = dynamic(() => import("@/app/cart/payment/components/checkBox"), { ssr: false });

const PaymentMethod = () => {

    const [paymentMethod, setPaymentMethod] = useState<"direct" | "home">("direct");
    const [portal, setPortal] = useState<string>("maskan");

    return (
        <div className="my-6">
            <p className="text-[#3D3D3D] text-[16px] font-regular">نحوه پرداخت</p>
            <div className="my-3 bg-[#EDEDED] h-[1px] w-full"></div>
            <div className="flex items-center justify-start gap-4 my-6">
                <div
                    onClick={() => setPaymentMethod("direct")}
                    className={`flex items-center justify-center gap-[8px] p-[8px]
                    border-[1px] border-[#0A3C63] transition duration-400 cursor-pointer
                    rounded-[8px] ${paymentMethod === "direct" ? "bg-[#0A3C63]" : "bg-[#FFFFFF]"}`}>
                    <div className="size-[20px]">
                        {
                            paymentMethod === "direct" ?
                                <CardsIcon color="white" /> :
                                <CardsIcon color="#0A3C63" />
                        }
                    </div>
                    <p className={`font-medium text-[16px] transition duration-400
                    ${paymentMethod === "direct" ? "text-[#FFFFFF]" : "text-[#0A3C63]"}`}>درگاه مستقیم</p>
                </div>
                <div
                    onClick={() => setPaymentMethod("home")}
                    className={`flex items-center justify-center gap-[8px] p-[8px]
                    border-[1px] border-[#0A3C63] transition duration-400 cursor-pointer
                    rounded-[8px] ${paymentMethod === "home" ? "bg-[#0A3C63]" : "bg-[#FFFFFF]"}`}>
                    <div className="size-[20px]">
                        {
                            paymentMethod === "home" ?
                                <ConvertCardIcon color="white" /> :
                                <ConvertCardIcon color="#0A3C63" />
                        }
                    </div>
                    <p className={`font-medium text-[16px] transition duration-400
                    ${paymentMethod === "home" ? "text-[#FFFFFF]" : "text-[#0A3C63]"}`}>
                        درب منزل
                    </p>
                </div>
            </div>
            <div 
                className="my-3 flex items-center justify-start gap-[20px] cursor-pointer">
                <CheckBox 
                    currentState={portal} 
                    name="makan"
                    setState={setPortal}
                />
                <p className="text-[#3D3D3D] font-medium text-[24px]">درگاه بانک مسکن</p>
                <div className="size-[24px] relative">
                    <Image
                        src={MaskanBankImage}
                        alt="maskan bank image"
                        fill={true}
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
            </div>
            <div
                className="my-3 flex items-center justify-start gap-[20px] cursor-pointer">
                <CheckBox 
                    currentState={portal} 
                    name="blue" 
                    setState={setPortal}
                />
                <p className="text-[#3D3D3D] font-medium text-[24px]">درگاه بلو بانک</p>
                <div className="size-[24px] relative">
                    <Image
                        src={BlueBankImage}
                        alt="blue bank image"
                        fill={true}
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
            </div>
        </div>
    )
}; export default PaymentMethod;