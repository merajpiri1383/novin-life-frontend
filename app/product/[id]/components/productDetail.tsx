"use client"
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { AddProductToCart } from "@/app/api/product";
import { ProductDetailType } from "@/app/product/types";
import ShoppingCartIcon from "@/components/icons/cart/shoppingCart";
import AddIcon from "@/components/icons/profile/Add";
import MinusIcon from "@/components/icons/product/minus";
import ShareIcon from "@/components/icons/blog/share";
import HeartIcon from "@/components/icons/home/heart";
import StarIcon from "@/components/icons/home/star";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";



const ProductDetail: FC<ProductDetailType> = (props) => {

    const [productCount, setProductCount] = useState<number>(1);
    const router = useRouter();

    const mutation = useMutation({
        mutationKey: ["add-cart"],
        mutationFn: AddProductToCart,
        onError : (error : AxiosError) => {
            if (error.response && error.response.status === 401) {
                toast.error("شما باید وارد حساب کاربری خود شوید");
                router.push("/login");
            }
        },
        onSuccess : () => {
            toast.success("محصول با به سبد خرید اضافه شد")
        }
    });

    const AddCartHandler = () => {
        props?.id && mutation.mutate({
            product_id: props.id,
            quantity: productCount,
        })
    }

    return (
        <div className="grid grid-cols-2 gap-6 select-none">
            <div className="col-span-1">
                <div className="w-full h-[380px] relative">
                    {
                        props?.index_image && <Image
                            src={props?.index_image.url}
                            alt={props?.title ? props.title : ""}
                            fill={true}
                            sizes="100%"
                            className="rounded-[8px]"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    }
                </div>
                <div className="grid grid-cols-6 my-4">
                    {
                        props?.images?.map((image) => {
                            return (
                                <div className="col-span-1" key={image.id}>
                                    <div className="relative size-[80px]">
                                        <Image
                                            src={image.url}
                                            alt="product image2"
                                            fill={true}
                                            sizes="100%"
                                            className="rounded-[8px] border-[#CBCBCB] border-[1px]"
                                            style={{ objectFit: "cover", objectPosition: "center" }}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex items-center justify-between">
                    <p className="text-[#3D3D3D] font-medium text-[28px]"></p>
                    <div className="flex items-center justify-center bg-[#E9F3FB] rounded-[4px]
                        px-[8px] py-[4px] gap-[8px]">
                        <div className="size-[24px]">
                            <StarIcon />
                        </div>
                        <p className="text-[#3D3D3D] text-[16px]">{props?.rating}</p>
                    </div>
                </div>
                <p className="text-[#868686] text-[14px] font-regular my-4">
                    {props?.category?.title}
                </p>
                <p className="text-[#032340] text-[32px] font-regular my-4">{props?.price} تومان</p>
                <div className="flex items-center justify-start gap-[40px] my-2">
                    <p className="text-[#D6D6D6] font-medium text-[24px] line-through">1,200,000 </p>
                    <div className="bg-[#F44336] rounded-[8px] px-[16px] py-[8px]">
                        <p className="text-[#FFFFFF] font-bold text-[16px]">50%</p>
                    </div>
                </div>
                <div className="my-4">
                    <p className="font-medium text-[24px] text-[#3D3D3D]">سایز</p>
                    <div className="grid grid-cols-3 my-2 w-fit gap-[8px]">
                        <div className="bg-[#EDEDED] w-[78px] flex items-center justify-center
                            h-[24px] text-center col-span-1 text-[12px] rounded-[4px]">38</div>
                        <div className="bg-[#EDEDED] w-[78px] flex items-center justify-center
                            h-[24px] text-center col-span-1 text-[12px] rounded-[4px]">39</div>
                        <div className="bg-[#EDEDED] w-[78px] flex items-center justify-center
                            h-[24px] text-center col-span-1 text-[12px] rounded-[4px]">41</div>
                        <div className="bg-[#EDEDED] w-[78px] flex items-center justify-center
                            h-[24px] text-center col-span-1 text-[12px] rounded-[4px]">36</div>
                        <div className="bg-[#EDEDED] w-[78px] flex items-center justify-center
                            h-[24px] text-center col-span-1 text-[12px] rounded-[4px]">37</div>
                    </div>
                </div>
                <div className="my-4">
                    <p className="font-medium text-[24px] text-[#3D3D3D]">رنگ</p>
                    <div className="flex items-center justify-start my-2 gap-[16px]">
                        <div className="flex items-center justify-center p-[4px] gap-[8px]
                            border-[#2196F3] border-[1px] rounded-[4px] bg-[#2196F3]/10">
                            <div className="size-[24px] bg-[#C4A97C] rounded-full"></div>
                            <p className="font-medium text-[12px] text-[#3D3D3D]">خاکی</p>
                        </div>
                        <div className="flex items-center justify-center p-[4px] gap-[8px]
                            ">
                            <div className="size-[24px] bg-[#FFB300] rounded-full"></div>
                            <p className="font-medium text-[12px] text-[#3D3D3D]">زرد</p>
                        </div>
                        <div className="flex items-center justify-center p-[4px] gap-[8px]
                            ">
                            <div className="size-[24px] bg-[#541A47] rounded-full"></div>
                            <p className="font-medium text-[12px] text-[#3D3D3D]">بنفش</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex items-end justify-start gap-[10px]">
                    <div className="flex items-center justify-center gap-[8px] bg-[#0A3C63]
                        py-[10px] px-[32px] rounded-[8px] active:-translate-y-[8px] transition duration-200
                        cursor-pointer"
                        onClick={() => AddCartHandler()}>
                        <div className="size-[24px]">
                            <ShoppingCartIcon color="#FFFFFF" />
                        </div>
                        <p className="text-[#FFFFFF] font-medium text-[16px]">افزودن به سبد خرید</p>
                    </div>
                    <div className="p-[8px] flex items-center justify-center
                        gap-[8px] border-[2px] border-[#0A3C63] rounded-[8px]">
                        <div className="size-[24px] active:scale-115 transition duration-200
                            cursor-pointer"
                            onClick={() => setProductCount(productCount + 1)}>
                            <AddIcon color="#0A3C63" />
                        </div>
                        <p className="text-[#0A3C63] font-medium text-[16px]">
                            {productCount}
                        </p>
                        <div className="size-[24px] active:scale-115 transition duration-200
                            cursor-pointer"
                            onClick={() => setProductCount(productCount > 2 ? productCount - 1 : 1)}>
                            <MinusIcon color="#0A3C63" />
                        </div>
                    </div>
                    <div className="mx-6 flex items-end justify-center gap-[10px]">
                        <div className="size-[24px]">
                            <ShareIcon color="#3D3D3D" />
                        </div>
                        <div className="size-[24px]">
                            <HeartIcon color="#3D3D3D" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}; export default ProductDetail;