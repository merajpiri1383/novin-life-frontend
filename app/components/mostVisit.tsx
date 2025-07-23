import Image from "next/image";
import HolderImage from "@/public/dev/holder.svg";
import MedalStarIcon from "@/components/icons/home/medalStar";
import HeartIcon from "@/components/icons/home/heart";
import StarIcon from "@/components/icons/home/star";
import AirpodIcon from "@/components/icons/home/airbod";
import Link from "next/link";
import { FC } from "react";



export const Product : FC<{index : number , classname ?: string,}> = ({ index , classname }) => {
    return (
        <Link href={"/product/" + index} 
            className={`border-[1px] border-[#CBCBCB] rounded-[16px] p-[15px] cursor-pointer ` + classname}>
            <div className="w-full h-[245px] relative bg-[#A1A1A1] rounded-[8px]">
                <Image 
                    src={HolderImage}
                    alt="holder image"
                    fill={true}
                    sizes="100%"
                    className="rounded-[8px]"
                    style={{objectFit : "cover",objectPosition : "center"}}
                />
            </div>
            <div className="flex items-center justify-between mt-2">
                <p className="text-[#3D3D3D] font-semibold text-[18px]">هولدر موبایل</p>
                <div className="size-[24px]">
                    <HeartIcon />
                </div>
            </div>
            <p className="mt-2 text-[#3D3D3D] text-[16px] text-justify">
                دارای رنگ بندی، مناسب گوشی های 5 تا 6 اینچی</p>

            <div className="flex items-between justify-between mt-2">
                <div className="flex items-center justify-center px-[8px] py-[4px] bg-[#E9F3FB] rounded-[4px]">
                    <div className="size-[20px]">
                        <StarIcon />
                    </div>
                    <p className="text-[#3D3D3D]">3.2</p>
                </div>
                <p className="text-[#3D3D3D] font-semibold text-[18px]">۱۵۰,۰۰۰ تومان</p>
            </div>
        </Link>
    )
}

const MostVisit = () => {

    const items = [1,2,3,4,5,6,7,8];

    return (
        <div className="my-[30px] mx-[80px] [direction:rtl]">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-[8px]">
                    <div className="size-[40px]">
                        <AirpodIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-bold text-[24px]">پربازدیدها</p>
                </div>
                <div className="w-[70%] bg-[#E9E9E9] h-[1px]"></div>
                <p className="text-[#2196F3] text-[16px]">مشاهده بیشتر</p>
            </div>
            <div className="my-6 grid grid-cols-4 gap-[25px]">
                {
                    items.map((product) => {
                        return (
                            <Product index={product} key={product} />
                        )
                    })
                }
            </div>
        </div>
    )
};export default MostVisit;