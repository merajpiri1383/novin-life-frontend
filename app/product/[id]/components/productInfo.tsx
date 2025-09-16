"use client"
import { useState } from "react";
import Image from "next/image";
import UserImage from "@/public/dev/user.png";
import StarIcon from "@/components/icons/home/star";
type ProductSectionType = "feature" | "description" | "review";

const Review = () => {
    return (
        <div className="border-[1px] border-[#CBCBCB] rounded-[8px] p-[15px]">
            <div className="flex items-center justify-between">
                <div className="flex items-start md:justify-center gap-[21px]">
                    <div className="relative size-[80px]">
                        <Image
                            src={UserImage}
                            alt="user image"
                            fill={true}
                            sizes="100%"
                            className="rounded-full md:border-none border-[2px] border-[#6A7581]"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                    <div className="">
                        <p className="text-[#3D3D3D] font-regular text-[16px] mt-6">رسول</p>
                        <p className="text-[#3D3D3D] font-regular text-[18px] mt-6 hidden md:block">
                            بسیار ممنونم از اینکه این کفش خوب رو برامون گذاشتید. خییلییی خفنه</p>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-[2px]">
                    <div className="size-[16px]">
                        <StarIcon color="#CBCBCB" />
                    </div>
                    <div className="size-[16px]">
                        <StarIcon color="#CBCBCB" />
                    </div>
                    <div className="size-[16px]">
                        <StarIcon />
                    </div>
                    <div className="size-[16px]">
                        <StarIcon />
                    </div>
                    <div className="size-[16px]">
                        <StarIcon />
                    </div>
                </div>
            </div>
            <p className="md:hidden text-[#3D3D3D] text-[16px] font-regular mt-6">
                بسیار ممنونم از اینکه این کفش خوب رو برامون گذاشتید. خییلییی خفنه</p>
        </div>
    )
};

const Form = () => {
    return (
        <div className="col-span-9 md:col-span-3">
            <p className="text-[#3D3D3D] font-semibold text-[18px]">نظرت رو برامون بنویس</p>
            <div className="w-full h-[1px] bg-[#D9D9D9] my-4"></div>
            <p className="text-[#868686] font-regular text-[14px]">ایمیل شما نشان داده نمی‌شود.</p>
            <div className="my-2">
                <p className="text-[#3D3D3D] font-regular text-[14px]">نام</p>
                <input
                    type="text"
                    className="outline-none border-[#EDEDED] border-[1px] rounded-[8px] my-1
                    w-full p-2"
                />
            </div>
            <div className="my-2">
                <p className="text-[#3D3D3D] font-regular text-[14px]">ایمیل</p>
                <input
                    type="email"
                    className="outline-none border-[#EDEDED] border-[1px] rounded-[8px] my-1
                    w-full p-2"
                />
            </div>
            <div className="my-2">
                <p className="text-[#3D3D3D] font-regular text-[14px]">نام</p>
                <textarea className="outline-none border-[#EDEDED] border-[1px] rounded-[8px] my-1
                    w-full p-2 resize-none h-[128px]"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-[24px]">
                <div className="col-span-1 flex items-center justify-between">
                    <div className="size-[24px]">
                        <StarIcon color="#EDEDED" />
                    </div>
                    <div className="size-[24px]">
                        <StarIcon color="#EDEDED" />
                    </div>
                    <div className="size-[24px]">
                        <StarIcon />
                    </div>
                    <div className="size-[24px]">
                        <StarIcon />
                    </div>
                    <div className="size-[24px]">
                        <StarIcon />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="px-[32px] py-[8px] border-[2px] border-[#0A3C63] rounded-[8px]">
                        <p className="text-[#0A3C63] font-medium text-[16px] text-center">ثبت نظر  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductInfo = () => {
    const [productSection, setProductSection] = useState<ProductSectionType>("feature");

    return (
        <div className="m-6 md:mx-0 my-6 [direction:rtl]">
            <div className="flex items-center justify-start gap-[16px]">
                <p className={`px-[10px] py-[6px] rounded-[8px] text-[#0A3C63] font-medium 
                    text-[20px] md:text-[24px] cursor-pointer transition duration-400 border-[#D5E9F8]
                    ${productSection === "feature" ? "bg-[#D5E9F8]" : " border-[2px]"}`}
                    onClick={() => setProductSection("feature")}>
                    ویژگی
                </p>
                <p className={`px-[10px] py-[6px] rounded-[8px] text-[#0A3C63] font-medium 
                    text-[20px] md:text-[24px] cursor-pointer transition duration-400 border-[#D5E9F8]
                    ${productSection === "description" ? "bg-[#D5E9F8]" : " border-[2px]"}`}
                    onClick={() => setProductSection("description")}>
                    توضیحات
                </p>
                <p className={`px-[10px] py-[6px] rounded-[8px] text-[#0A3C63] font-medium 
                    text-[20px] md:text-[24px] cursor-pointer transition duration-400 border-[#D5E9F8]
                    ${productSection === "review" ? "bg-[#D5E9F8]" : " border-[2px]"}`}
                    onClick={() => setProductSection("review")}>
                    نظرات
                </p>
            </div>

            {productSection === "feature" && (
                <div className="border-[1px] border-[#EDEDED] rounded-[8px] grid grid-cols-1 gap-[24px]
                    px-[16px] py-[24px] my-6">
                    <div className="flex items-center justify-start gap-[24px] border-b border-[#EDEDED] pb-6">
                        <p className="text-[#3D3D3D] text-[20px] font-regular">جنس</p>
                        <p className="text-[#3D3D3D] text-[20px] font-regular">پلاستیک</p>
                    </div>
                    <div className="flex items-center justify-start gap-[24px] border-b border-[#EDEDED] pb-6">
                        <p className="text-[#3D3D3D] text-[20px] font-regular">طول کابل</p>
                        <p className="text-[#3D3D3D] text-[20px] font-regular">4 متر</p>
                    </div>
                    <div className="flex items-center justify-start gap-[24px] border-b border-[#EDEDED] pb-6">
                        <p className="text-[#3D3D3D] text-[20px] font-regular">ویژگی‌های هدست</p>
                        <div>
                            <p className="text-[#3D3D3D] text-[20px] font-regular">انعطاف پذیر</p>
                            <p className="text-[#3D3D3D] text-[20px] font-regular">شارژ طولانی</p>
                            <p className="text-[#3D3D3D] text-[20px] font-regular">پر بازده</p>
                            <p className="text-[#3D3D3D] text-[20px] font-regular">معتبر</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-[24px]">
                        <p className="text-[#3D3D3D] text-[20px] font-regular">ویژگی آپشنال</p>
                        <p className="text-[#3D3D3D] text-[20px] font-regular">قابل تعویض</p>
                    </div>
                </div>
            )}

            {productSection === "description" && (
                <div className="border-[1px] border-[#EDEDED] rounded-[8px] p-[32px] my-6">
                    <p className="text-[#3D3D3D] font-medium text-[24px]">توضیحات : </p>
                    <p className="text-[#3D3D3D] font-medium text-[20px] text-justify">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                        از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون
                        و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                        ابزارهای کاربردی می باشد.
                    </p>
                </div>
            )}

            {productSection === "review" && (
                <div className="grid grid-cols-9 gap-[25px] my-6">
                    <div className="col-span-9 md:col-span-6 grid grid-cols-1 gap-[8px]">
                        <Review />
                        <Review />
                        <Review />
                        <div className="col-span-1">
                            <p className="text-[#2196F3] font-regular text-[14px] text-left">مشاهده همه</p>
                        </div>
                    </div>
                    <Form />
                </div>
            )}

        </div>
    )
};

export default ProductInfo;