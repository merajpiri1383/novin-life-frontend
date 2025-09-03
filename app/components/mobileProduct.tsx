import Image from "next/image";
import ProductImage from "@/public/dev/productImage1.png"
import HeartIcon from "@/components/icons/home/heart";
import AddSquareIcon from "@/components/icons/cart/addSquare";
import { ProductMainType } from "@/app/types";
import { FC } from "react";
import Link from "next/link";

const MobileProduct: FC<ProductMainType> = (props) => {
    return (
        <Link href={"/product/" + props.slug} className="rounded-[16px] p-[12px] border border-[#EDEDED]">
            <div className="w-full h-[115px] relative">
                {
                    props.image &&
                    <Image
                        src={props.image}
                        alt={props.title ? props.title : ""}
                        fill={true}
                        className="rounded-[8px]"
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                }
            </div>
            <div className="mt-[12px] flex items-center justify-between">
                <p className="text-[12px] text-[#3D3D3D] font-semibold">{props.title}</p>
                <div className="size-[20px]">
                    <HeartIcon />
                </div>
            </div>
            <p className="text-[10px] text-[#3D3D3D] mt-[12px] font-regular text-justify">
                {props.summary}
            </p>
            <p className="mt-[12px] text-center font-medium text-[16px] text-[#3D3D3D]">{props.price} تومان</p>
            <div className="mx-auto mt-[12px] border-[#2196F3] border rounded-[8px] p-[8px]
                flex items-center justify-center gap-[8px]">
                <div className="size-[16px]">
                    <AddSquareIcon color="#2196F3" />
                </div>
                <p className="text-[#2196F3] font-medium text-[10px]">افزودن به سبد</p>
            </div>
        </Link>
    )
}; export default MobileProduct;