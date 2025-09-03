import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import HeartIcon from "@/components/icons/home/heart";
import StarIcon from "@/components/icons/home/star";
import Link from "next/link";
import { FC } from "react";
import { ProductMainType } from "@/app/types";



const DesktopProduct: FC<ProductMainType> = (props) => {
    return (
        <Link href={"/product/" + props.slug} >
            <Slide duration={300} direction="up" triggerOnce>
                <article className="border-[1px] border-[#CBCBCB] rounded-[16px] p-[15px]">
                    <div className="w-full h-[245px] relative bg-[#A1A1A1] rounded-[8px]">
                        {
                            props.image &&
                            <Image
                                src={props.image}
                                alt={props.title ? props.title : ""}
                                fill={true}
                                sizes="100%"
                                className="rounded-[8px]"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        }
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-[#3D3D3D] font-semibold text-[18px]">{props.title}</p>
                        <div className="size-[24px]">
                            <HeartIcon />
                        </div>
                    </div>
                    <p className="mt-2 text-[#3D3D3D] text-[16px] text-justify">
                        {props.summary}
                    </p>

                    <div className="flex items-between justify-between mt-2">
                        <div className="flex items-center justify-center px-[8px] py-[4px] bg-[#E9F3FB] rounded-[4px]">
                            <div className="size-[20px]">
                                <StarIcon />
                            </div>
                            <p className="text-[#3D3D3D]">{props.score}</p>
                        </div>
                        <p className="text-[#3D3D3D] font-semibold text-[18px]">{props.price} تومان</p>
                    </div>
                </article>
            </Slide>
        </Link>
    )
}; export default DesktopProduct;