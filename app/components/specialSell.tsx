import Image from "next/image";
import SP1 from "@/public/dev/sp1.svg";
import SP2 from "@/public/dev/sp2.svg";
import SP3 from "@/public/dev/sp3.svg";
import SP4 from "@/public/dev/sp4.svg";
import SP5 from "@/public/dev/sp5.svg";
import DiscountIcon from "@/components/icons/home/discount";
import DisocuntImage from "@/public/discount.svg";

const SpecialSell = () => {
    return (
        <div className="m-[80px] [direction:rtl]">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-[8px]">
                    <div className="size-[40px]">
                        <DiscountIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-bold text-[24px]">فروش ویژه</p>
                </div>

                <div className="bg-[#D6D6D6] h-[1px] w-[80%]"></div>
            </div>

            <div className="grid grid-cols-2 gap-6 my-6">
                <div className="col-span-1 relative">
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
                    <div className="absolute top-0 h-[97px] w-[57px] z-[3] left-6">
                        <div className="relative w-full h-full">
                            <Image
                                src={DisocuntImage}
                                alt="discount image"
                                fill={true}
                                sizes="100%"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                            <p className="text-[#FFFFFF] font-[20px] relative z-[3] text-center pt-4">20%</p>
                            <p className="text-[#FFFFFF] font-[20px] relative z-[3] text-center my-2">OFF</p>
                        </div>
                    </div>
                    <p className="absolute z-[3] right-10 bottom-10 text-[#FFFFFF] text-[32px] font-bold">س</p>
                </div>
                <div className="col-span-1">
                    <div className="grid-cols-2 grid gap-6 mb-6">
                        <div className="col-span-1 relative size-[276px]">
                            <div className="absolute top-0 left-0 right-0 bottom-0 z-[1]
                            rounded-[16px] bg-linear-to-b from-[#000000]/10 to-[#000000]/91"></div>
                            <Image
                                src={SP1}
                                alt="sp2"
                                fill={true}
                                sizes="100%"
                                className="rounded-[16px]"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                            <div className="absolute top-0 h-[97px] w-[57px] z-[3] left-6">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={DisocuntImage}
                                        alt="discount image"
                                        fill={true}
                                        sizes="100%"
                                        style={{ objectFit: "cover", objectPosition: "center" }}
                                    />
                                    <p className="text-[#FFFFFF] font-[20px] relative z-[3] text-center pt-4">20%</p>
                                    <p className="text-[#FFFFFF] font-[20px] relative z-[3] text-center my-2">OFF</p>
                                </div>
                            </div>
                            <p className="absolute z-[3] right-6 bottom-6 text-[#FFFFFF] text-[32px] font-bold">پوشیدنی</p>
                        </div>
                        <div className="col-span-1 relative size-[276px]">
                            <div className="absolute top-0 left-0 right-0 bottom-0 z-[1]
                            rounded-[16px] bg-linear-to-b from-[#000000]/10 to-[#000000]/91"></div>
                            <Image
                                src={SP2}
                                alt="sp2"
                                fill={true}
                                sizes="100%"
                                className="rounded-[16px]"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                            <div className="absolute top-0 h-[97px] w-[57px] z-[3] left-6">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={DisocuntImage}
                                        alt="discount image"
                                        fill={true}
                                        sizes="100%"
                                        style={{ objectFit: "cover", objectPosition: "center" }}
                                    />
                                    <p className="text-[#FFFFFF] font-[20px] relative z-[3] text-center pt-4">20%</p>
                                    <p className="text-[#FFFFFF] font-[20px] relative z-[3] text-center my-2">OFF</p>
                                </div>
                            </div>
                            <p className="absolute z-[3] right-6 bottom-6 text-[#FFFFFF] text-[32px] font-bold">مناسب تحریر</p>
                        </div>
                    </div>
                    <div className="grid-cols-2 grid gap-6 mt-6">
                        <div className="col-span-1 relative size-[276px]">
                            <div className="absolute top-0 left-0 right-0 bottom-0 z-[1]
                            rounded-[16px] bg-linear-to-b from-[#000000]/10 to-[#000000]/91"></div>
                            <Image
                                src={SP3}
                                alt="sp2"
                                fill={true}
                                sizes="100%"
                                className="rounded-[16px]"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                            <div className="absolute top-0 h-[97px] w-[57px] z-[3] left-6">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={DisocuntImage}
                                        alt="discount image"
                                        fill={true}
                                        sizes="100%"
                                        style={{ objectFit: "cover", objectPosition: "center" }}
                                    />
                                    <p className="text-[#FFFFFF] font-[20px] relative z-[3] text-center pt-4">20%</p>
                                    <p className="text-[#FFFFFF] font-[20px] relative z-[3] text-center my-2">OFF</p>
                                </div>
                            </div>
                            <p className="absolute z-[3] right-6 bottom-6 text-[#FFFFFF] text-[32px] font-bold">مناسب لپتاپ</p>
                        </div>
                        <div className="col-span-1 relative size-[276px]">
                            <div className="absolute top-0 left-0 right-0 bottom-0 z-[1]
                            rounded-[16px] bg-linear-to-b from-[#000000]/10 to-[#000000]/91"></div>
                            <Image
                                src={SP4}
                                alt="sp2"
                                fill={true}
                                sizes="100%"
                                className="rounded-[16px]"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                            <div className="absolute top-0 h-[97px] w-[57px] z-[3] left-6">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={DisocuntImage}
                                        alt="discount image"
                                        fill={true}
                                        sizes="100%"
                                        style={{ objectFit: "cover", objectPosition: "center" }}
                                    />
                                    <p className="text-[#FFFFFF] font-[20px] relative z-[3] text-center pt-4">20%</p>
                                    <p className="text-[#FFFFFF] font-[20px] relative z-[3] text-center my-2">OFF</p>
                                </div>
                            </div>
                            <p className="absolute z-[3] right-6 bottom-6 text-[#FFFFFF] text-[32px] font-bold">خانه هوشمند</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}; export default SpecialSell;