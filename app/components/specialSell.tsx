import Image, { StaticImageData } from "next/image";
import SP1 from "@/public/dev/sp1.svg";
import SP2 from "@/public/dev/sp2.svg";
import SP3 from "@/public/dev/sp3.svg";
import SP4 from "@/public/dev/sp4.svg";
import SP5 from "@/public/dev/sp5.svg";
import DiscountIcon from "@/components/icons/home/discount";
import DisocuntImage from "@/public/discount.svg";
import { FC } from "react";


const DiscountSection = () => {
    return (
        <div className="absolute top-0 h-[40px] w-[23px] md:h-[97px] md:w-[57px] z-[3] md:left-6
                left-3">
            <div className="relative w-full h-full">
                <Image
                    src={DisocuntImage}
                    alt="discount image"
                    fill={true}
                    sizes="100%"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <p className="text-[#FFFFFF] text-[10px] relative z-[3] text-center
                        md:text-[20px] pt-1 md:pt-4">20%</p>
                <p className="text-[#FFFFFF] text-[10px] relative z-[3] text-center
                        md:text-[20px]  md:my-2">OFF</p>
            </div>
        </div>
    )
}

interface SmallItemProps {
    image: StaticImageData,
    text: string,
}

const SmallItem: FC<SmallItemProps> = ({ image, text }) => {
    return (
        <div className="col-span-1 relative h-[64px] w-full md:w-[276px] md:h-[276px]">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[1]
                md:rounded-[16px] rounded-[8px] bg-linear-to-b from-[#000000]/10 to-[#000000]/91"></div>
            <Image
                src={image}
                alt="sp2"
                fill={true}
                sizes="100%"
                className="rounded-[8px] md:rounded-[16px]"
                style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <DiscountSection />
            <p className="absolute z-[3] md:right-6 md:bottom-6 text-[#FFFFFF] md:text-[32px] md:font-bold
                font-medium text-[12px] bottom-2 right-2">{text}</p>
        </div>
    )
}

const SpecialSell = () => {
    return (
        <div className="m-6 md:m-[80px] [direction:rtl]">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-[8px]">
                    <div className="size-[40px] hidden md:block">
                        <DiscountIcon />
                    </div>
                    <p className="text-[#F44336] md:text-[#3D3D3D] md:font-bold md:text-[24px]
                    text-[14px] font-semibold">فروش ویژه</p>
                </div>

                <div className="bg-[#D6D6D6] h-[1px] w-[80%] hidden md:block"></div>
            </div>

            <div className="grid grid-cols-2 gap-[15px] md:gap-6 my-3 md:my-6">
                <div className="col-span-1 relative h-auto">
                    <div className="absolute top-0 left-0 right-0 bottom-0 z-[1]
                            rounded-[16px] bg-linear-to-b from-[#000000]/10 to-[#000000]/91"></div>
                    <Image
                        src={SP5}
                        alt="sp5"
                        fill={true}
                        sizes="100%"
                        className="rounded-[16px]"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    <DiscountSection />
                    <p className="absolute z-[3] md:right-6 md:bottom-6 text-[#FFFFFF] md:text-[32px] md:font-bold
                font-medium text-[12px] bottom-2 right-2">س</p>
                </div>
                <div className="col-span-1">
                    <div className="grid-cols-2 grid gap-[15px] md:gap-12 mb-[15px] md:mb-6">
                        <SmallItem
                            image={SP1}
                            text="پوشیدنی"
                        />
                        <SmallItem
                            image={SP2}
                            text="مناسب تحریر"
                        />
                    </div>
                    <div className="grid-cols-2 grid gap-[15px] md:gap-12">
                        <SmallItem
                            image={SP3}
                            text="مناسب لپتاپ"
                        />
                        <SmallItem
                            image={SP4}
                            text="خانه هوشمند"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}; export default SpecialSell;