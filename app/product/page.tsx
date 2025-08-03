"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Product } from "@/app/components/mostVisit";
import ArrowLeftCircleIcon from "@/components/icons/blog/arrowLeftCircle";
import ArrowRightCircleIcon from "@/components/icons/blog/arrowRightCircle";
const Panel = dynamic(() => import("@/app/product/components/panel"), { ssr: false });


type CategoryType = {
    text: string,
    slug: string,
}

const Page = () => {

    const [currentCategory, setCurrentCategory] = useState<CategoryType>();

    const products = [1, 2, 3, 4, 5, 6];

    const categories: CategoryType[] = [
        {
            text: "پربازدیدترین ",
            slug: "visit",
        }, {
            text: "جدیدترین",
            slug: "new"
        }, {
            text: "پرفروش ترین",
            slug: "sell"
        }, {
            text: "گران ترین",
            slug: "expensive"
        }, {
            text: "ارزان ترین",
            slug: "cheap",
        },
    ]

    useEffect(() => {
        setCurrentCategory(categories[0])
    }, []);

    return (
        <div className="[direction:rtl] mx-[80px] mb-12">
            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-1">
                    <Panel />
                </div>
                <div className="col-span-3">
                    <div className="flex items-center justify-start gap-6">
                        {
                            categories.map((category, index) => {
                                return (
                                    <div key={index} className="cursor-pointer"
                                        onClick={() => setCurrentCategory(category)}>
                                        <p className={`${currentCategory?.slug === category.slug ?
                                            "text-[#2196F3] border-b-[2px] border-[#2196F3]" : "text-[#3D3D3D]"} 
                                            duration-400 p-[8px] pb-[16px] transition`}>{category.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="grid grid-cols-3 gap-4 my-6">
                        {
                            products.map((product, index) => {
                                return (
                                    <Product index={index} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="my-12 flex items-center justify-center gap-4">
                <div className="size-[24px] cursor-pointer active:scale-95 hover:scale-110 transition">
                    <ArrowRightCircleIcon />
                </div>
                <div className="rounded-[24px] flex items-center justify-center gap-4 
                    border border-[#EDEDED] py-2 px-8">
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">1</p>
                    </div>
                    <div className="bg-[#E9F3FB] rounded-full size-[32px]
                        flex items-center justify-center">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">2</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">3</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">4</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                         items-center justify-center hidden md:flex">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">5</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                         items-center justify-center hidden md:flex">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">6</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                         items-center justify-center hidden md:flex">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">7</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                         items-center justify-center hidden md:flex">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">8</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                         items-center justify-center hidden md:flex">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">9</p>
                    </div>
                    <div className="size-[32px]
                        flex items-center justify-center">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">...</p>
                    </div>
                    <div className="border-[1px] border-[#656565] rounded-full size-[32px]
                        flex items-center justify-center">
                        <p className="text-[15px] font-regular text-[#3D3D3D]">50</p>
                    </div>
                </div>
                <div className="size-[24px] cursor-pointer active:scale-95 hover:scale-110 transition">
                    <ArrowLeftCircleIcon />
                </div>
            </div>
        </div>
    )
}; export default Page;