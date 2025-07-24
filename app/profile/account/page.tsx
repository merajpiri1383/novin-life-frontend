"use client"
import dynamic from "next/dynamic";
const IranCity = require("iran-city");
const DropDownInput = dynamic(() => import("@/app/profile/components/dropdownInput"), { ssr: false });
const LeafletMap = dynamic(() => import("@/app/profile/components/leafletMap"),{ssr : false});
import PhoneIcon from "@/components/icons/profile/phone";
import CallIcon from "@/components/icons/profile/call";
import ArrowDownIcon from "@/components/icons/profile/arrowDown";
import { useEffect, useState } from "react";

type CityType = {
    id: number,
    name: string,
    slug: string,
    province_id: number,
}


const Page = () => {

    const AllProvince = IranCity.allProvinces();
    const [currentProvince, setProvince] = useState<string | null>(null);
    const [cities, setCities] = useState<CityType[]>([]);
    const [currentCity, setCity] = useState<string | null>(null);

    useEffect(() => {
        currentProvince && setCities(IranCity.searchByName(currentProvince));
    }, [currentProvince]);

    return (
        <div className="border-[1px] border-[#EDEDED] rounded-[16px] p-[25px]">
            <div className="pb-4 border-b border-[#EDEDED]">
                <p className="text-[#3D3D3D] font-bold text-[24px]">اطلاعات حساب کاربری</p>
            </div>
            <div className="mx-[80px] my-[30px] grid grid-cols-2 gap-[25px]">
                <div className="col-span-1">
                    <p className="text-[#CBCBCB] text-[14px]">نام و نام خانوادگی </p>
                    <input
                        type="text"
                        className="w-full text-[12px] outline-none rounded-[8px] py-[6px] px-[8px]
                            border border-[#CBCBCB] mt-2"
                    />
                </div>
                <div className="col-span-1">
                    <p className="text-[#CBCBCB] text-[14px]">آدرس ایمیل</p>
                    <input
                        type="text"
                        className="w-full text-[12px] outline-none rounded-[8px] py-[6px] px-[8px]
                            border border-[#CBCBCB] mt-2"
                    />
                </div>
                <div className="col-span-1">
                    <p className="text-[#CBCBCB] text-[14px]">شماره موبایل</p>
                    <div className="flex items-center justify-between gap-[8px] border border-[#CBCBCB] mt-2
                        py-[6px] px-[8px] rounded-[8px]">
                        <div className="size-[16px]">
                            <PhoneIcon />
                        </div>
                        <input
                            type="text"
                            className="w-full outline-none text-[12px]"
                        />
                    </div>
                </div>
                <div className="col-span-1">
                    <p className="text-[#CBCBCB] text-[14px]">شماره تلفن (همراه با کد شهر) </p>
                    <div className="flex items-center justify-between gap-[8px] border border-[#CBCBCB] mt-2
                        py-[6px] px-[8px] rounded-[8px]">
                        <div className="size-[16px]">
                            <CallIcon />
                        </div>
                        <input
                            type="text"
                            className="w-full outline-none text-[12px]"
                        />
                    </div>
                </div>
                <div className="col-span-1">
                    <p className="text-[#CBCBCB] text-[14px]">استان</p>
                    <DropDownInput
                        className="text-[#3D3D3D] font-regular text-[12px]
                        flex items-center justify-between gap-[8px] border border-[#CBCBCB] mt-2
                        rounded-[8px] py-[6px] px-[8px] relative"
                        placeholder="انتخاب کنید"
                        icon={<div className="size-[16px]"><ArrowDownIcon /></div>}
                        value={currentProvince}
                        setValue={setProvince}
                        items={AllProvince.map((item: any) => item.name)}
                        classNameDropDown="border border-[#CBCBCB] mt-2
                        rounded-[8px] py-[6px] px-[8px]"
                    />
                </div>
                <div className="col-span-1">
                    <p className="text-[#CBCBCB] text-[14px]">شهر</p>
                    <DropDownInput
                        className="text-[#3D3D3D] font-regular text-[12px]
                        flex items-center justify-between gap-[8px] border border-[#CBCBCB] mt-2
                        rounded-[8px] py-[6px] px-[8px] relative"
                        placeholder="انتخاب کنید"
                        icon={<div className="size-[16px]"><ArrowDownIcon /></div>}
                        value={currentCity}
                        setValue={setCity}
                        items={cities?.map((item: CityType) => item.name)}
                        classNameDropDown="border border-[#CBCBCB] mt-2
                        rounded-[8px] py-[6px] px-[8px]"
                    />
                </div>
                <div className="col-span-1">
                    <p className="text-[#CBCBCB] text-[14px]">آدرس  کامل  پستی (انتخاب روی نقشه)</p>
                    <input
                        type="text"
                        className="w-full text-[12px] outline-none rounded-[8px] py-[6px] px-[8px]
                            border border-[#CBCBCB] mt-2"
                    />
                </div>
                <div className="col-span-1">
                    <p className="text-[#CBCBCB] text-[14px]">کد پستی</p>
                    <input
                        type="text"
                        className="w-full text-[12px] outline-none rounded-[8px] py-[6px] px-[8px]
                            border border-[#CBCBCB] mt-2"
                    />
                </div>
                <div className="col-span-2 ">
                    <LeafletMap height="216px" />
                </div>
                <div className="col-span-2 flex items-center justify-end cursor-pointer">
                    <div className="bg-[#0A3C63] px-[64px] py-[8px] rounded-[8px]">
                        <p className="text-center w-full text-[#FFFFFF] font-medium
                        text-[14px]">تغییر</p>
                    </div>
                </div>
            </div>
        </div>
    )
}; export default Page;