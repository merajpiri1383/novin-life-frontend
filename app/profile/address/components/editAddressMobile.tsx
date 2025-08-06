"use client"
import { FC, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Zoom } from "react-awesome-reveal";
import CloseSquareIcon from "@/components/icons/cart/closeSquare";
import ArrowDownSquareIcon from "@/components/icons/profile/arrowDownSquare";

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

interface EditAddressProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
}

const EditAddressMobile: FC<EditAddressProps> = ({ setShow }) => {

    const [AllProvince, setAllProvince] = useState([]);
    const [currentProvince, setProvince] = useState<string | null>(null);
    const [cities, setCities] = useState<CityType[]>([]);
    const [currentCity, setCity] = useState<string | null>(null);
    const iranCityRef = useRef<null | typeof import("iran-city")>(null);


    useEffect(() => {
        if (iranCityRef.current && currentProvince) {
            setCities(iranCityRef.current.searchByName(currentProvince));
        }
    }, [currentProvince])

    useEffect(() => {
        if (!iranCityRef.current) {
            import("iran-city").then(
                (module) => {
                    iranCityRef.current = module;
                    setAllProvince(module.allProvinces())
                }
            )
        }
    }, []);

    return (
        <div className="bg-[#000000]/38 fixed top-0 left-0 right-0 bottom-0 z-[3]">
            <Zoom duration={300} className="w-full h-screen flex items-center justify-center">
                <div className="bg-white p-4 rounded-[16px] w-full mx-6">
                    <div className="flex items-center justify-end">
                        <div className="size-[20px] cursor-pointer" onClick={() => setShow(false)}>
                            <CloseSquareIcon />
                        </div>
                    </div>
                    <div className="my-4 grid grid-cols-4 items-center">
                        <p className="col-span-1 text-right text-[#3D3D3D] font-regular text-[14px]"> کد پستی</p>
                        <input
                            type="text"
                            className="col-span-3 w-full outline-none border-b border-[#EDEDED]
                            text-[#3D3D3D] font-regular text-[14px] p-1"
                        />
                    </div>
                    <div className="my-4 grid grid-cols-4 items-center">
                        <p className="col-span-1 text-right text-[#3D3D3D] font-regular text-[14px]"> استان </p>
                        <DropDownInput
                            items={AllProvince.map((item: ProvinceType) => item.name)}
                            value={currentProvince}
                            setValue={setProvince}
                            placeholder="استان"
                            className="w-full col-span-3 p-1 rounded-[8px]
                            border border-[#EDEDED] text-[#3D3D3D] font-regular text-[14px] flex
                            items-center justify-between"
                            icon={<div className="size-[20px]"><ArrowDownSquareIcon /></div>}
                            classNameDropDown="h-40 overflow-hidden"
                        />
                    </div>

                    <div className="my-4 grid grid-cols-4 items-center">
                        <p className="col-span-1 text-right text-[#3D3D3D] font-regular text-[14px]"> شهرستان </p>
                        <DropDownInput
                            items={cities?.map((item: CityType) => item.name)}
                            value={currentCity}
                            setValue={setCity}
                            placeholder="شهرستان"
                            className="w-full col-span-3 p-1 rounded-[8px]
                            border border-[#EDEDED] text-[#3D3D3D] font-regular text-[14px] flex
                            items-center justify-between"
                            icon={<div className="size-[20px]"><ArrowDownSquareIcon /></div>}
                            classNameDropDown="h-40 overflow-hidden"
                        />
                    </div>

                    <div className="my-4 grid grid-cols-4 items-center">
                        <p className="col-span-1 text-right text-[#3D3D3D] font-regular text-[14px]">
                            آدرس
                        </p>
                        <input
                            type="text"
                            className="col-span-3 w-full outline-none border-b border-[#EDEDED]
                            text-[#3D3D3D] font-regular text-[14px] p-1"
                        />
                    </div>
                </div>
            </Zoom>
        </div>
    )
}; export default EditAddressMobile;