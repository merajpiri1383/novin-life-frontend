"use client"
import { useRef } from "react";
import Image from "next/image";
import { GetProductCategories } from "@/api/products";
import CategoryImage from "@/public/dev/productImage1.png";
import ArrowLeftIcon from "@/components/icons/profile/arrowLeft";
import ArrowRight2Icon from "@/components/icons/home/arrowRight2";
import { useQuery } from "@tanstack/react-query";


const ProductCategories = () => {

    const scrollableDivRef = useRef<null | HTMLDivElement>(null);
    const { data ,isLoading } = useQuery({
        queryKey: ["product-category"],
        queryFn: GetProductCategories,
    });

    const prevSlideHandler = () => {
        scrollableDivRef.current?.scrollBy({
            behavior: "smooth",
            left: 60,
        })
    }

    const nextSlideHandler = () => {
        scrollableDivRef.current?.scrollBy({
            behavior: "smooth",
            left: -60,
        })
    }

    const categories = [1, 2, 3, 4, 5, 6];
    return (
        <div className="m-6 [direction:rtl]">
            <div className="flex items-center justify-between">
                <p className="text-[#3D3D3D] text-[14px] font-semibold">دسته بندی محصولات</p>
                <div className="flex items-center justify-center gap-2">
                    <div className="size-[16px] cursor-pointer" onClick={() => prevSlideHandler()}>
                        <ArrowRight2Icon color="#0A3C63" />
                    </div>
                    <div className="size-[16px] cursor-pointer" onClick={() => nextSlideHandler()}>
                        <ArrowLeftIcon color="#0A3C63" />
                    </div>
                </div>
            </div>
            <div ref={scrollableDivRef} className="my-4 flex overflow-x-scroll gap-[12px] hide-scrollbar">
                {
                    categories.map((category, index) => {
                        return (
                            <div key={index} className="p-[4px] border border-[#EDEDED] rounded-[8px] w-fit">
                                <div className="h-[32px] w-[60px] relative">
                                    <Image
                                        src={CategoryImage}
                                        alt="category image"
                                        fill={true}
                                        sizes="100%"
                                        className="rounded-[4px]"
                                        style={{ objectFit: "cover", objectPosition: "center" }}
                                    />
                                </div>
                                <p className="font-regular text-[12px] text-[#3D3D3D] mt-2">قاب موبایل</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}; export default ProductCategories;