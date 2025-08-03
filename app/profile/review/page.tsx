import Image from "next/image";
import TestImage from "@/public/dev/productImage1.png";
import StarIcon from "@/components/icons/home/star";
import ArrowLeft2Icon from "@/components/icons/home/arrowLeft2";
import { Slide } from "react-awesome-reveal";


const Review = () => {
    return (
        <Slide direction="up" duration={300} triggerOnce>
            <div className="flex md:justify-between
                p-3 md:p-4 rounded-[8px] bg-[#FBFBFB] items-start gap-2 md:gap-4">
                <div className="w-full h-[87px] md:h-[160px] grid grid-cols-1 ">
                    <div className="flex items-center justify-between col-span-1">
                        <p className="text-[#3D3D3D] font-medium text-[12px] md:text-[20px]">جا سیگاری هوشمند</p>
                        <div className="flex items-center justify-center gap-1 md:gap-2">
                            <div className="size-[2px] bg-[#009F0A]/46 md:size-[6px] rounded-full"></div>
                            <p className="text-[#009A0A] font-regular text-[8px] md:text-[16px]">تایید شده</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <p className="mt-3 text-[#737373] text-justify text-[10px] font-regular md:text-[16px]">
                        میتونست قیمت بهتری داشته باشه و لی کلا خوبه من راضیم.</p>
                    </div>
                    <div className="flex items-center justify-end gap-1 col-span-1">
                        <div className="size-[12px]">
                            <StarIcon color="#CBCBCB" />
                        </div>
                        <div className="size-[12px]">
                            <StarIcon color="#CBCBCB" />
                        </div>
                        <div className="size-[12px]">
                            <StarIcon />
                        </div>
                        <div className="size-[12px]">
                            <StarIcon />
                        </div>
                        <div className="size-[12px]">
                            <StarIcon />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[97px] h-[87px] relative mx-auto md:w-[179px] md:h-[160px]">
                        <Image 
                            src={TestImage}
                            alt="test image"
                            fill={true}
                            sizes="100%"
                            draggable={false}
                            className="rounded-[4px]"
                            style={{objectFit : "cover",objectPosition : "center"}}
                        />
                    </div>
                </div>
            </div>
            <div className="flex itemsc-center justify-start gap-2">
                <p className="text-[#3D3D3D] text-[10px] font-medium md:text-[16px]">مشاهده صفحه محصول</p>
                <div className="size-[16px] md:size-[20px]">
                    <ArrowLeft2Icon />
                </div>
            </div>
        </Slide>
    )
};

const Page = () => {

    const items = [1,2,3,4,5,6]

    return (
        <div className="grid grid-cols-1 gap-6">
            {
                items.map((item,index) => {
                    return (
                        <Review key={index} />
                    )
                })
            }
        </div>
    )
};export default Page;