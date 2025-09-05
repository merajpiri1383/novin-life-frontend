import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCartProductCount, RemoveItemCartProduct } from "@/app/api/cart";
import ColorsSquare from "@/components/icons/cart/colorsSquare";
import ShoppingBagIcon from "@/components/icons/cart/shoppingBag";
import ShoppingCartIcon from "@/components/icons/cart/shoppingCart";
import DirectBoxSendIcon from "@/components/icons/cart/directBoxSend";
import AddSquareIcon from "@/components/icons/cart/addSquare";
import MinusSquareIcon from "@/components/icons/cart/minusSquare";
import TrashIcon from "@/components/icons/cart/trash";
import { CartProductType } from "@/app/cart/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";




const CartProduct: FC<CartProductType> = (props) => {

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
        onSuccess: (response) => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        }
    })


    const addHandler = () => {
        props.id && updateMutation.mutate({
            quantity: quantity + 1,
            id: props.id,
        })
        setQuantiy(quantity + 1);
    }

    const decreaseHandler = () => {
        quantity > 1 && props.id && updateMutation.mutate({
            quantity: quantity - 1,
            id: props.id,
        })
        quantity > 1 && setQuantiy(quantity - 1);
    }

    const clearHandler = () => {
        props.id && removeMutation.mutate(props.id);
    }

    return (
        <Slide direction="up" duration={400} triggerOnce>
            <div className="col-span-1 border-[#EDEDED] select-none border-[1px] 
                rounded-[16px] p-6 bg-[#FDFEFF]">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex items-center justify-start gap-6">
                            <p className="text-[20px] text-[#3D3D3D] font-semibold">
                                {props.product_title}</p>
                            <Link
                                href={"/product/" + props.product?.slug}
                                className="text-[#2196F3] underline font-regular text-[16px] mt-2">
                                جزئیات محصول</Link>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-6">
                            <div className="flex items-center justify-start gap-2">
                                <div className="size-[20px]">
                                    <ColorsSquare />
                                </div>
                                <p className="text-[#3D3D3D] text-[14px] font-regular">سفید</p>
                                <div className="border-[#9C9C9C] border-[0.5px] size-[12px] 
                                rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <div className="size-[20px]">
                                    <ShoppingBagIcon />
                                </div>
                                <p className="text-[#3D3D3D] text-[14px] font-regular">
                                    گارانتی اصالت کالا</p>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <div className="size-[20px]">
                                    <ShoppingCartIcon />
                                </div>
                                <p className="text-[#3D3D3D] text-[14px] font-regular
                            ">ارسال از دو روز کاری آینده</p>
                            </div><div className="flex items-center justify-start gap-2">
                                <div className="size-[20px]">
                                    <DirectBoxSendIcon />
                                </div>
                                <p className="text-[#3D3D3D] text-[14px] font-regular">
                                    خدمات پس از فروش</p>
                            </div>
                        </div>
                    </div>
                    <div className="size-[221px] relative">
                        {
                            props.product?.index_image?.original_url && <Image
                                src={props.product.index_image.original_url}
                                alt={props.product.index_image.file_name ?
                                    props.product.index_image.file_name : ""}
                                fill={true}
                                className="rounded-[16px]"
                                sizes="100%"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        }
                    </div>
                </div>
                <div className="grid grid-cols-5 mt-4 gap-4">
                    <div className="col-span-3 border-[#EDEDED] rounded-[16px] p-4 border-[1px]">
                        <p className="text-[#000000] font-regular text-[14px]">آپشنال</p>
                    </div>
                    <div className="col-span-2 border-[#EDEDED] rounded-[16px] p-4 border-[1px]">
                        <div className="flex items-center justify-between">
                            {
                                props.discount && props.discount > 1 ?
                                    <p className="bg-[#F21818] rounded-[8px] py-[4px] font-black
                            text-[#FFFFFF] text-[14px] px-[8px]">{props.discount}%</p> : <p></p>
                            }

                            <div className="flex items-center justify-center gap-4">
                                {
                                    props.discount && props.discount > 1 ?
                                        <p className="text-[#EDEDED] line-through font-medium
                                            text-[12px]">{props.total_price} تومان</p> : ""
                                }
                                <p className="text-[#0A3C63] font-semibold text-[16px]">
                                    {props.total_price_discounted} تومان</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-end justify-between">
                            <div className="flex items-center justify-center gap-4">
                                <div className="size-[20px] active:scale-110 transition duration-200
                                    cursor-pointer" onClick={() => addHandler()}>
                                    <AddSquareIcon />
                                </div>
                                <p className="text-[#3D3D3D] font-medium text-[12px]">
                                    {quantity}
                                </p>
                                <div className="size-[20px] active:scale-110 transition duration-200
                                    cursor-pointer" onClick={() => decreaseHandler()}>
                                    <MinusSquareIcon />
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-[8px] p-[4px]
                                border-[#3D3D3D] border-[1px] rounded-[4px] cursor-pointer
                                active:-translate-y-[5px] transition duration-200"
                                onClick={() => clearHandler()}>
                                <p className="text-[#3D3D3D] font-medium text-[12px]">حذف این محصول</p>
                                <div className="size-[20px]">
                                    <TrashIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}; export default CartProduct;