import { FC, useState } from "react";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Skeleton from 'react-loading-skeleton';
import { Slide } from "react-awesome-reveal";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { ProductDetailType } from "@/app/product/types";
import ShareIcon from "@/components/icons/blog/share";
import HeartIcon from "@/components/icons/home/heart";
import ArrowDownIcon from "@/components/icons/about/arrowDown";
import ArrowUpIcon from "@/components/icons/product/arrowUp";
import StarIcon from "@/components/icons/home/star";
import ShoppingCartIcon from "@/components/icons/cart/shoppingCart";
import AddIcon from "@/components/icons/profile/Add";
import MinusIcon from "@/components/icons/product/minus";
import { AddProductToCart } from "@/app/api/product";
import { useRouter } from "next/navigation";




const MobileProductDetail: FC<ProductDetailType> = (props) => {

    const [sizeOpen, setSizeOpen] = useState<boolean>(false);
    const [productCount, setProductCount] = useState<number>(1);
    const sizes: number[] = [37, 38, 39, 40, 41, 42];

    const router = useRouter();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationKey: ["add-cart"],
        mutationFn: AddProductToCart,
        onError: (error: AxiosError) => {
            if (error.response && error.response.status === 401) {
                toast.error("شما باید وارد حساب کاربری خود شوید");
                router.push("/login");
            }
        },
        onSuccess: () => {
            toast.success("محصول با به سبد خرید اضافه شد");
            queryClient.invalidateQueries({ queryKey: ["cart"] })
        }
    });

    const AddCartHandler = () => {
        if (props.id) {
            mutation.mutate({
                product_id: props.id,
                quantity: productCount,
            })
        }
    };

    return (
        <div className="[direction:rtl]">
            <div className="h-[355px] rounded-[8px] relative m-6">
                {
                    props.index_image?.url ?
                        <Image
                            src={props.index_image.url}
                            alt={props.title ? props.title : ""}
                            fill={true}
                            className="rounded-[8px]"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            priority={true}
                        /> :
                        <Skeleton height={"100%"} width={"100%"} borderRadius={"8px"} />
                }
            </div>

            <div className="my-[20px] gap-[20px] grid grid-cols-4 mx-6">
                {
                    props.images?.filter((item, index) => index < 3 ? item : null).map((image) => {
                        return (
                            <div key={image.id} className="col-span-1">
                                <div className="size-[72px] relative">
                                    <Image
                                        src={image.url}
                                        alt={image.url}
                                        fill={true}
                                        sizes="100%"
                                        style={{ objectFit: "cover", objectPosition: "center" }}
                                        priority={false}
                                        className="rounded-[8px] border-[1px] border-[#CBCBCB]"
                                    />
                                </div>
                            </div>
                        )
                    })
                }
                {
                    props.images?.length && props.images.length > 3 ?
                        <div className="border-[0.46px] border-[#0A3C63] rounded-[8px] text-center
                        flex items-center justify-center font-semibold text-[12px] text-[#0A3C63]">
                            {props.images.length - 3}+ تصاویر بیشتر
                        </div> : ""
                }
            </div>

            <div className="m-6 flex items-center justify-between">
                <p className="text-[28px] font-medium text-[#3D3D3D]
                w-[240px] h-[42px] overflow-hidden">{props.title}</p>
                <div className="flex items-center justify-center gap-[17px]">
                    <div className="size-[24px]">
                        <ShareIcon />
                    </div>
                    <div className="size-[24px]">
                        <HeartIcon />
                    </div>
                </div>
            </div>

            <p className="text-[#868686] font-regular text-[14px]">{props.category?.title}</p>

            <div className="bg-[#F5F5F5] my-6 p-6">
                <div className="">
                    <div className="flex items-center justify-between">
                        <p className="text-[#3D3D3D] text-[16px] font-medium">سایز</p>
                        <div className="size-[16px] cursor-pointer active:scale-115 transition duration-200"
                            onClick={() => setSizeOpen(!sizeOpen)}>
                            {
                                sizeOpen ?
                                    <ArrowUpIcon color="#7E1515" /> :
                                    <ArrowDownIcon color="#7E1515" />
                            }
                        </div>
                    </div>
                    {
                        sizeOpen && <Slide duration={200} direction="down">
                            <div className="grid grid-cols-4 gap-[8px] my-6">
                                {
                                    sizes.map((size, index) => {
                                        return (
                                            <div key={index} className="text-[#3D3D3D] text-[12px] font-regular
                                    rounded-[4px] bg-[#EDEDED] p-1 text-center">{size}</div>
                                        )
                                    })
                                }
                            </div>
                        </Slide>
                    }
                </div>
                <div className="my-4">
                    <p className="font-medium text-[16px] text-[#3D3D3D]">رنگ</p>
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
            </div>

            <div className="flex items-center justify-between m-6">
                <div className="flex items-center justify-center bg-[#E9F3FB] rounded-[4px] px-[8px]
                    py-[4px] gap-[8px]">
                    <div className="size-[24px]">
                        <StarIcon />
                    </div>
                    <p className="text-[#3D3D3D] text-[16px] font-medium">{props.rating}</p>
                </div>
                <div className="flex items-center justify-center gap-[8px] text-[#032340] text-[32px]">
                    <p>{props.price?.toLocaleString("en")}</p>
                    <p>تومان</p>
                </div>
            </div>
            <div className="m-6 flex items-center justify-between">

                <div className="p-[8px] px-[16px] flex items-center justify-center
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

                <div className="flex items-center justify-center gap-[16px]">
                    <p className="text-[#D6D6D6] text-[24px] font-medium line-through">1,200,000 </p>
                    <div className="bg-[#F44336] rounded-[4px] text-[#FFFFFF] p-1 px-2">50%</div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-[8px] bg-[#0A3C63]
                py-[16px] px-[32px] rounded-[8px] active:-translate-y-[8px] transition duration-200
                cursor-pointer m-6"
                onClick={() => AddCartHandler()}>
                <div className="size-[24px]">
                    <ShoppingCartIcon color="#FFFFFF" />
                </div>
                <p className="text-[#FFFFFF] font-medium text-[16px]">افزودن به سبد خرید</p>
            </div>
        </div>
    )
}; export default MobileProductDetail;