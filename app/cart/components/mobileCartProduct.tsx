import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import CloseSquareIcon from "@/components/icons/cart/closeSquare";
import SizeIcon from "@/components/icons/cart/size";
import ColorFilterIcon from "@/components/icons/cart/colorFilter";
import AddIcon from "@/components/icons/profile/Add";
import MinimizeIcon from "@/components/icons/cart/minimize";

import { CartProductType } from "@/app/cart/types";
import { FC, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { RemoveItemCartProduct, UpdateCartProductCount } from "@/app/api/cart";
import { AxiosError } from "axios";
import { toast } from "react-toastify";




const MobileCartProduct: FC<CartProductType> = (props) => {

    const [quantity, setQuantiy] = useState<number>(props.quantity ? props.quantity : 0);
    const queryClient = useQueryClient();
    const router = useRouter();

    const updateMutation = useMutation({
        mutationFn: UpdateCartProductCount,
        onError: (error: AxiosError) => {
            if (error.response && error.response.status === 401) {
                toast.error("وارد حساب کاربری خود شوید");
                router.push("/login");
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        }
    });

    const removeMutation = useMutation({
        mutationFn: RemoveItemCartProduct,
        onError: (error: AxiosError) => {
            if (error.response && error.response.status === 401) {
                toast.error("وارد حساب کاربری خود شوید");
                router.push("/login");
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        }
    })


    const addHandler = () => {
        if (props.id) {
            updateMutation.mutate({
                quantity: quantity + 1,
                id: props.id,
            })
            setQuantiy(quantity + 1);
        }
    }

    const decreaseHandler = () => {
        if (quantity > 1 && props.id) {
            updateMutation.mutate({
                quantity: quantity - 1,
                id: props.id,
            })
            setQuantiy(quantity - 1);
        }
    }

    const clearHandler = () => {
        if (props.id) {
            removeMutation.mutate(props.id);
        }
    }


    return (
        <div className="col-span-1">
            <Slide direction="up" duration={300} triggerOnce>
                <article>
                    <div className="flex items-start justify-between gap-[8px]">
                        <div>
                            <div className="relative w-[114px] h-[86px]">
                                {
                                    props.product?.index_image?.original_url && <Image
                                        src={props.product.index_image.original_url}
                                        alt={props.product?.index_image.original_url}
                                        fill={true}
                                        sizes="100%"
                                        className="rounded-[4px]"
                                        style={{ objectFit: "cover", objectPosition: "center" }}
                                    />
                                }

                                {
                                    props.discount && props.discount > 0 ?
                                        <div className="bg-[#F44336] absolute top-0 z-[2] rounded-ss-[4px]
                                            rounded-ee-[16px] py-1 px-2">
                                            <p className="text-[#FFFFFF] font-regular text-[10px]">
                                                {props.discount}%</p>
                                        </div> : ""
                                }

                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center justify-between w-full">
                                <p className="text-[#000306] font-regular text-[14px]">
                                    {props.product_title}
                                </p>
                                <div className="size-[20px] active:scale-115 transition duration-200"
                                    onClick={() => clearHandler()}>
                                    <CloseSquareIcon />
                                </div>
                            </div>
                            <p className="text-[#3D3D3D] font-regular text-[12px] mt-2">
                                مدل {props.product?.product_category?.name}
                            </p>
                            <p className="text-[#3D3D3D] font-regular text-[14px] text-left mt-4">
                                {props.price} تومان
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start justify-between mt-4">
                        <div className="flex items-center justify-start gap-2">
                            <div className="size-[16px] cursor-pointer active:scale-110 transition">
                                <SizeIcon />
                            </div>
                            <p className="text-[#3D3D3D] font-thin text-[12px]">سایز 42</p>
                            <div className="size-[16px] cursor-pointer active:scale-110 transition">
                                <ColorFilterIcon />
                            </div>
                            <div className="size-[16px] bg-[#344241] rounded-full"></div>
                            <p className="text-[#3D3D3D] font-thin text-[12px]">مشکی</p>
                        </div>
                        <div className="flex items-center justify-center px-[24px] py-[8px] rounded-[4px]
                        border border-[#3D3D3D] gap-[8px]">
                            <div className="size-[16px] active:scale-115 transition duration-200"
                                onClick={() => addHandler()}>
                                <AddIcon color="#3D3D3D" />
                            </div>
                            <p className="text-[#3D3D3D] font-medium text-[16px]">
                                {quantity}
                            </p>
                            <div className="size-[16px] active:scale-115 transition duration-200"
                                onClick={() => decreaseHandler()}>
                                <MinimizeIcon color="#3D3D3D" />
                            </div>
                        </div>
                    </div>
                </article>
            </Slide>
        </div>
    )
}; export default MobileCartProduct;