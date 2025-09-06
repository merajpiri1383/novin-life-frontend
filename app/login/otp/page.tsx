"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Slide } from "react-awesome-reveal";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cookies from "next-cookies-universal";
import ArrowRightIcon from "@/components/icons/login/arrowRight";
import useUserStore from "@/lib/store/user";
import OtpInput from 'react-otp-input';
import { VerifyOtp } from "@/app/api/auth";




const Page = () => {

    const [otp, setOtp] = useState<string | null>(null);
    const { user , setUser } = useUserStore();
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: VerifyOtp,
    })

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (otp && user?.mobile) {
            mutation.mutate({
                code: parseInt(otp),
                mobile: user?.mobile,
            })
        } else {
            toast.warning("کد وارد شده نامعتبر است")
        }
    };

    useEffect(() => {

        if (!user?.mobile) {
            router.push("/login");
        }

        if (mutation.isSuccess) {
            setUser({
                avatar : mutation.data?.customer?.avatar,
                birthdate : mutation.data?.customer?.birthdate,
                email : mutation.data?.customer?.email,
                family : mutation.data?.customer?.family,
                id : mutation.data?.customer?.id , 
                name : mutation.data?.customer?.name
            });
            (async () => {
                (await Cookies("client")).set("access_token",mutation.data?.access_token);
            })();
            router.push("/");
            toast.success("loged in Successfully")
        }
    }, [user?.mobile, router, mutation.isSuccess, mutation.data, setUser]);

    return (
        <Slide duration={300} direction="up" triggerOnce className="m-6 md:m-0">
            <form
                onSubmit={submitHandler}
                className="border border-[#EDEDED] rounded-[8px] p-6 w-full md:w-[60%] mx-auto bg-white">
                <p className="text-[#3D3D3D] font-medium text-[28px]">کد تایید را وارد کنید</p>
                <div className="my-6 flex items-center justify-center">
                    <OtpInput
                        value={otp ? otp : ""}
                        onChange={setOtp}
                        numInputs={5}
                        inputType="number"
                        inputStyle={{
                            border: "1px solid #CBCBCB",
                            width: "44px",
                            height: "44px",
                            margin: "0px 10px",
                            padding: "5px",
                            textAlign: "center",
                            borderRadius: "8px"
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
                <button
                    type="submit"
                    className="py-[8px] px-[20px] flex items-center justify-center bg-[#0A3C63] rounded-[8px]
                    cursor-pointer w-full">
                    <p className="text-center text-[#FFFFFF] font-medium text-[16px]">ادامه</p>
                </button>
                <Link href={"/login"} className="mt-6 flex items-center justify-start gap-2 w-fit">
                    <div className="size-[24px]">
                        <ArrowRightIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-semibold text-[18px]">صفحه قبلی</p>
                </Link>
            </form>
        </Slide>
    )
}; export default Page;