import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import AirpodImage from "@/public/dev/airpod2.png";
import CloseSquareIcon from "@/components/icons/cart/closeSquare";
import SizeIcon from "@/components/icons/cart/size";
import ColorFilterIcon from "@/components/icons/cart/colorFilter";
import AddIcon from "@/components/icons/profile/Add";
import MinimizeIcon from "@/components/icons/cart/minimize";


const MobileCartProduct = () => {
    return (
        <div className="col-span-1">
            <Slide direction="up" duration={300} triggerOnce>
                <article>
                    <div className="flex items-start justify-between gap-[8px]">
                        <div>
                            <div className="relative w-[114px] h-[86px]">
                                <Image
                                    src={AirpodImage}
                                    alt="airpodimage"
                                    fill={true}
                                    sizes="100%"
                                    className="rounded-[4px]"
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                />
                                <div className="bg-[#F44336] absolute top-0 z-[2] rounded-ss-[4px]
                                    rounded-ee-[16px] py-1 px-2">
                                    <p className="text-[#FFFFFF] font-regular text-[10px]">50%</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center justify-between w-full">
                                <p className="text-[#000306] font-regular text-[14px]">Hnadsfree Wireless</p>
                                <div className="size-[20px]">
                                    <CloseSquareIcon />
                                </div>
                            </div>
                            <p className="text-[#3D3D3D] font-regular text-[12px] mt-2">مدل 1244</p>
                            <p className="text-[#3D3D3D] font-regular text-[14px]
                                text-left mt-4">600,000 تومان</p>
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
                            <div className="size-[16px]">
                                <AddIcon color="#3D3D3D" />
                            </div>
                            <p className="text-[#3D3D3D] font-medium text-[16px]">1</p>
                            <div className="size-[16px]">
                                <MinimizeIcon color="#3D3D3D" />
                            </div>
                        </div>
                    </div>
                </article>
            </Slide>
        </div>
    )
}; export default MobileCartProduct;