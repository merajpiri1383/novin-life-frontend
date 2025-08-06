

"use client"
import ArrowDownIcon from "@/components/icons/profile/arrowDown";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const LeafletMap = dynamic(() => import("@/app/profile/components/leafletMap"), { ssr: false });
const DropDownInput = dynamic(() => import("@/app/profile/components/dropdownInput"), { ssr: false });

type ProvinceType = {
    id: number;
    name: string;
    slug: string;
}

type CityType = {
    id: number,
    name: string,
    slug: string,
    province_id: number,
}

const AddAddress = () => {

    const [AllProvince, setAllProvince] = useState<ProvinceType[]>([]);
    const [currentProvince, setProvince] = useState<string | null>(null);
    const [cities, setCities] = useState<CityType[]>([]);
    const [currentCity, setCity] = useState<string | null>(null);
    const iranCityRef = useRef<null | typeof import("iran-city")>(null);


    useEffect(() => {
        import("iran-city").then(
            (module) => {
                iranCityRef.current = module;
                setAllProvince(module.allProvinces());
            }
        )
    }, []);

    useEffect(() => {
        if (currentProvince && iranCityRef.current) {
            setCities(iranCityRef.current.searchByName(currentProvince));
        }
    }, [currentProvince]);

    return (
        <div className="border-t py-[8px] px-[16px] border-[#EDEDED]">
            <div>
                <p className="font-semibold text-[20px] text-[#3D3D3D]">ویرایش آدرس </p>
                <p className="text-[#898989] font-regular text-[16px]  mt-2">
                    موقعیت مکانی آدرس مورد نظر خود را روی نقشه انتخاب کنید.</p>
            </div>
            <div className="my-4 grid grid-cols-2 gap-[25px]">

                <div className="col-span-2 ">
                    <LeafletMap height="216px" show_search={true} />
                </div>
                <div className="col-span-2 flex items-center justify-end cursor-pointer">
                    <div className="bg-[#0A3C63] px-[64px] py-[8px] rounded-[8px]">
                        <p className="text-center w-full text-[#FFFFFF] font-medium
                        text-[14px]">ثبت</p>
                    </div>
                </div>
            </div>
            <div className="my-6 bg-[#D6D6D6] w-full h-[1px]"></div>
            <p className="text-[#3D3D3D] font-bold text-[20px]">جزئیات آدرس</p>
            <div className="my-3">
                <p className="text-[#CBCBCB] text-[14px] font-regular">نشانی پستی</p>
                <textarea
                    className="w-full resize-none h-[80px] px-[8px] py-[8px] my-2
                    border-[#CBCBCB] rounded-[8px] text-[#AFAFAF] text-[12px] border outline-none"
                    placeholder="تهران، خیابان ولیعصر، منطقه ۱۲، بلوار کاوه، کوچه ابوذر، پلاک ۱۵"
                ></textarea>
            </div>
            <p className="text-[#898989] font-regular text-[16px]">
                آدرس بالا بر اساس موقعیت انتخابی شما وارد شده است.</p>
            <div className="grid grid-cols-2 pl-20 gap-[25px] my-6">
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
                        items={AllProvince.map((item: ProvinceType) => item.name)}
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
                    <p className="text-[#CBCBCB] text-[14px]">پلاک*</p>
                    <input
                        type="text"
                        className="w-full text-[12px] outline-none rounded-[8px] py-[6px] px-[8px]
                            border border-[#CBCBCB] mt-2"
                    />
                </div>
                <div className="col-span-1">
                    <p className="text-[#CBCBCB] text-[14px]">واحد*</p>
                    <input
                        type="text"
                        className="w-full text-[12px] outline-none rounded-[8px] py-[6px] px-[8px]
                            border border-[#CBCBCB] mt-2"
                    />
                </div>
                <div className="col-span-1">
                    <p className="text-[#CBCBCB] text-[14px]">کد پستی*</p>
                    <input
                        type="text"
                        className="w-full text-[12px] outline-none rounded-[8px] py-[6px] px-[8px]
                            border border-[#CBCBCB] mt-2"
                    />
                </div>
                <div className="col-span-1 flex items-end">
                    <p className="text-[#3D3D3D] font-regular text-[12px]">
                        سفارشات به این آدرس ارسال می‌شوند</p>
                </div>
                <div className="col-span-2">
                    <p className="text-[#3D3D3D] text-[18px] font-bold">مشخصات تحویل گیرنده</p>
                </div>
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
            </div>
            <div className="flex items-center justify-end">
                <div className="bg-[#0A3C63] rounded-[8px] py-[8px] px-[64px]">
                    <p className="font-medium text-[14px] text-[#FFFFFF]">تایید آدرس</p>
                </div>
            </div>
        </div>
    )
}; export default AddAddress;