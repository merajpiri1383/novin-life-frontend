import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import MedalStarIcon from "@/components/icons/home/medalStar";
import HeartIcon from "@/components/icons/home/heart";
import StarIcon from "@/components/icons/home/star";
import Link from "next/link";
import { FC } from "react";
import { ProductMainType } from "@/app/types";



const Product: FC<ProductMainType> = (props) => {
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
                            <p className="text-[#3D3D3D]">3.2</p>
                        </div>
                        <p className="text-[#3D3D3D] font-semibold text-[18px]">۱۵۰,۰۰۰ تومان</p>
                    </div>
                </article>
            </Slide>
        </Link>
    )
}

const Newest: FC<{ data: ProductMainType[] }> = ({ data }) => {

    return (
        <div className="m-[80px] [direction:rtl]">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-[8px]">
                    <div className="size-[40px]">
                        <MedalStarIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-bold text-[24px]">پر فروش ترین ها</p>
                </div>
                <div className="w-[70%] bg-[#E9E9E9] h-[1px]"></div>
                <p className="text-[#2196F3] text-[16px]">مشاهده بیشتر</p>
            </div>
            <div className="my-6 grid grid-cols-4 gap-[25px]">
                {
                    data?.map((product, index) => {
                        return (
                            <Product
                                {...product}
                                key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}; export default Newest;