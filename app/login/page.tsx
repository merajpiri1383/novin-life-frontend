"use client"
import { useMutation } from "@tanstack/react-query";
import { Slide } from "react-awesome-reveal";
import { SendOtp } from "@/api/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "@/components/loader";
import { useRouter } from "next/navigation";
import useUserStore from "@/lib/store/user";


const Page = () => {

    const [input, setInput] = useState<null | string>(null);
    const [inputType, setInputType] = useState<"email" | "text">("text");
    const router = useRouter();
    const { setUser } = useUserStore();

    const mutation = useMutation({
        mutationFn: SendOtp,
        onError: (error) => {
            console.log(error.message)
        }
    })

    const isPhoneNumber = (value: string): boolean => {
        const phoneRegex = /^09\d{9}$/;
        return phoneRegex.test(value);
    };

    const isEmail = (value: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    useEffect(() => {
        toast.success(mutation.data?.message);
        if (mutation.isSuccess && input) {
            setUser({ mobile: input })
            router.push("/login/otp");
        }
        mutation.reset();
    }, [mutation?.data]);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input && isEmail(input)) {
            setInputType("email");
        } else if (input && isPhoneNumber(input) && input.length === 11) {
            setInputType("text");
        } else {
            toast.warn("لطفا شماره موبایل / ایمیل معتبر وارد کنید   ");
            return;
        }

        mutation.mutate({
            input: input,
        })
    }


    return (
        <Slide direction="up" duration={300} triggerOnce className="p-6 md:p-0">
            {
                mutation.isPending ?
                    <Loader />
                    :
                    <form className="border border-[#EDEDED] rounded-[8px] p-6 
                    w-full md:w-[60%] mx-auto bg-white" onSubmit={submitHandler}>
                        <p className="text-[#3D3D3D] font-medium text-[28px]">ورود | ثبت‌نام</p>
                        <div className="my-6">
                            <p className="text-[#3D3D3D] font-medium text-[14px]">
                                لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
                            <input
                                type={inputType}
                                required
                                onChange={(e) => setInput(e.target.value)}
                                className="border-[#ADADAD] border-[1px] rounded-[8px] w-full my-1
                        text-[#ADADAD] p-2 text-[14px] outline-none"
                                placeholder="*********09 یا Example@gmail.com"
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-[8px] px-[20px] flex items-center justify-center bg-[#0A3C63] rounded-[8px]
                    cursor-pointer w-full" >
                            <p className="text-center text-[#FFFFFF] font-medium text-[16px]">ادامه</p>
                        </button>
                    </form>
            }
        </Slide>
    )
}; export default Page;