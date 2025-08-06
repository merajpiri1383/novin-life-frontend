"use client"
import dynamic from "next/dynamic";
import SortIcon from "@/components/icons/product/sort";
import SettingsIcon from "@/components/icons/product/settings";
import ArrowRight2Icon from "@/components/icons/home/arrowRight2";
import ArrowLeftIcon from "@/components/icons/profile/arrowLeft";
import { useEffect, useState } from "react";

const ProductMobile = dynamic(() => import("@/app/components/mobileProduct"), { ssr: false });
const ProductMobileSort = dynamic(() => import("@/app/product/components/productMobileSort"), { ssr: false });
const ProductMobileFilter = dynamic(() => import("@/app/product/components/productMobileFilter"),{ssr : false});



const ProductsMobile = () => {

    const products = [1, 2, 3, 4, 5, 6];
    const [showSort, setShowSort] = useState<boolean>(false);
    const [showFilter,setShowFilter] = useState<boolean>(false);

    const filterShowHandler = (e : React.MouseEvent) : void => {
        e.stopPropagation();
        setShowFilter(!showFilter);
    }

    const sortshowHandler = (e: React.MouseEvent): void => {
        e.stopPropagation();
        setShowSort(!showSort);
    }

    const hidePopup = () => {
        setShowSort(false);
    }

    useEffect(() => {
        window.addEventListener("click", hidePopup);

        return () => window.removeEventListener("click", hidePopup);
    }, []);

    return (
        <div className="mx-6 mb-6 [direction:rtl]">

            <div className="flex items-center justify-start gap-6 my-4">
                <div
                    onClick={(e) => filterShowHandler(e)} 
                    className="flex items-center justify-center gap-2 cursor-pointer">
                    <div className="size-[16px]">
                        <SettingsIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-medium text-[12px]">فیلتر</p>
                </div>
                <div className="flex items-center justify-center gap-2 relative cursor-pointer" 
                    onClick={sortshowHandler}>
                    <div className="size-[16px]">
                        <SortIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-medium text-[12px]">پر بازدیدترین ها</p>
                </div>
            </div>
            {
                showSort && <ProductMobileSort setShow={setShowSort} />
            }
            {
                showFilter && <ProductMobileFilter setShow={setShowFilter} />
            }
            <div className="border-t border-[#EDEDED] pt-6 grid grid-cols-2 gap-4">
                {
                    products.map((product, index) => {
                        return (
                            <ProductMobile key={index} />
                        )
                    })
                }
            </div>
            <div className="my-6 grid grid-cols-3 items-center ">
                <div className="col-span-1 flex items-center justify-center bg-[#0A3C63]
                    px-[12px] py-[8px] gap-3 rounded-[8px] cursor-pointer">
                    <div className="size-[16px]">
                        <ArrowRight2Icon color="#FFFFFF" />
                    </div>
                    <p className="text-[#FFFFFF] font-medium text-[12px]">قبلی</p>
                </div>
                <div className="col-span-1 text-center">
                    <p className="text-[#3D3D3D] font-medium text-[12px]">صفحه 2 از 10</p>
                </div>
                <div className="col-span-1 flex items-center justify-center bg-[#0A3C63]
                    px-[12px] py-[8px] gap-3 rounded-[8px] cursor-pointer">
                    <p className="text-[#FFFFFF] font-medium text-[12px]">بعدی</p>
                    <div className="size-[16px]">
                        <ArrowLeftIcon color="#FFFFFF" />
                    </div>
                </div>
            </div>
        </div>
    )
}; export default ProductsMobile;