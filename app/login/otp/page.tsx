"use client"
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import OtpInput from 'react-otp-input';
import ArrowRightIcon from "@/components/icons/login/arrowRight";
import { useState } from "react";



const Page = () => {

    const [otp, setOtp] = useState<string | undefined>();

    return (
        <Slide duration={300} direction="up" triggerOnce>
            <div className="border border-[#EDEDED] rounded-[8px] p-6 w-[60%] mx-auto bg-white">
                <p className="text-[#3D3D3D] font-medium text-[28px]">کد تایید را وارد کنید</p>
                <div className="my-6 flex items-center justify-center">
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        inputType="number"
                        inputStyle={{
                            border : "1px solid #CBCBCB" ,
                            width: "44px",
                            height : "44px",
                            margin : "0px 10px",
                            padding : "5px",
                            textAlign : "center",
                            borderRadius : "8px"
                        }}
                        renderInput={(props) =>
                            <input
                                {...props}
                                className="outline-none"
                            />}
                    />
                </div>
                <div className="my-6 flex items-center justify-between">
                    <p className="text-[#3D3D3D] font-medium text-[14px]">کد برای شما ارسال شد</p>
                    <p className="font-medium text-[14px]">
                        <span className="text-[#EDEDED] mx-2">ارسال دوباره</span>
                        <span className="text-[#606060]">01:29</span>
                    </p>
                </div>
                <div className="py-[8px] px-[20px] flex items-center justify-center bg-[#0A3C63] rounded-[8px]
                cursor-pointer">
                    <p className="text-center text-[#FFFFFF] font-medium text-[16px]">ادامه</p>
                </div>
                <Link href={"/login"} className="mt-6 flex items-center justify-start gap-2 w-fit">
                    <div className="size-[24px]">
                        <ArrowRightIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-semibold text-[18px]">صفحه قبلی</p>
                </Link>
            </div>
        </Slide>
    )
}; export default Page;