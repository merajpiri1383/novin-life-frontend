import ArrowRightIcon from "@/components/icons/login/arrowRight";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";


const Page = () => {
    return (
        <Slide duration={300} direction="up" triggerOnce>
            <div className="border border-[#EDEDED] rounded-[8px] p-6 w-[60%] mx-auto bg-white">
                <p className="text-[#3D3D3D] font-medium text-[28px]">ثبت‌نام</p>
                <div className="my-6">
                    <p className="text-[#3D3D3D] font-medium text-[14px]">
                        نام و نام خانوادگی *</p>
                    <input
                        type="text"
                        className="border-[#ADADAD] border-[1px] rounded-[8px] w-full my-1
                    text-[#ADADAD] p-2 text-[14px] outline-none"
                        placeholder="نام خود را به فارسی وارد کنید"
                    />
                </div>
                <div className="my-6">
                    <p className="text-[#3D3D3D] font-medium text-[14px]">
                        شماره تلفن همراه *</p>
                    <input
                        type="text"
                        className="border-[#ADADAD] border-[1px] rounded-[8px] w-full my-1
                    text-[#ADADAD] p-2 text-[14px] outline-none"
                        placeholder="شماره تلفن همراه *"
                    />
                </div>
                <div className="my-6">
                    <p className="text-[#3D3D3D] font-medium text-[14px]">
                        ایمیل (اختیاری)</p>
                    <input
                        type="text"
                        className="border-[#ADADAD] border-[1px] rounded-[8px] w-full my-1
                    text-[#ADADAD] p-2 text-[14px] outline-none"
                        placeholder="Example@gmail.com"
                    />
                </div>
                <div className="py-[8px] px-[20px] flex items-center justify-center bg-[#0A3C63] rounded-[8px]
                cursor-pointer">
                    <p className="text-center text-[#FFFFFF] font-medium text-[16px]">ادامه</p>
                </div>
                <div className="mt-6 flex items-center justify-start gap-2">
                    <div className="size-[15px] border border-[#3D3D3D] rounded-[5px]"></div>
                    <div className="flex justify-start gap-2 font-medium text-[14px]">
                        <p className="text-[#0B79D1]"> قوانین و مقررات </p>
                        <p className="text-[#3D3D3D]">را خوانده و قبول دارم.</p>
                    </div>
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