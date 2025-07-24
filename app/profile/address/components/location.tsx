import { FC } from "react";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import MapImage from "@/public/dev/map.png";
import ArrowLeftIcon from "@/components/icons/profile/arrowLeft";
import LocationIcon from "@/components/icons/profile/locationIcon";
import CallIcon from "@/components/icons/profile/call";
import MessagesIcon from "@/components/icons/profile/messages";
import UserIcon from "@/components/icons/header/user";
import SmsIcon from "@/components/icons/footer/sms";


const Location: FC = () => {
    return (
        <Slide triggerOnce duration={400} direction="up">
            <div className="border-t pt-4 border-[#EDEDED] 
                flex items-start justify-between">
                <div>
                    <p className="text-[#3D3D3D] font-regular text-[16px]">
                        گرگان، خیابان ولیعصر، منطقه ۱۲، بلوار کاوه، کوچه ابوذر، پلاک ۱۵</p>
                    <div className="grid grid-cols-2 w-fit mt-6 gap-6">
                        <div className="flex items-center justify-start gap-[8px]">
                            <div className="size-[24px]">
                                <LocationIcon />
                            </div>
                            <p className="text-[#3D3D3D] font-regular text-[16px]">گرگان</p>
                        </div>
                        <div className="flex items-center justify-start gap-[8px]">
                            <div className="size-[24px]">
                                <CallIcon />
                            </div>
                            <p className="text-[#3D3D3D] font-regular text-[16px]">09123456789</p>
                        </div>
                        <div className="flex items-center justify-start gap-[8px]">
                            <div className="size-[24px]">
                                <SmsIcon color="#3D3D3D" />
                            </div>
                            <p className="text-[#3D3D3D] font-regular text-[16px]">۷۸۳۳۵۱۴</p>
                        </div>
                        <div className="flex items-center justify-start gap-[8px]">
                            <div className="size-[24px]">
                                <UserIcon />
                            </div>
                            <p className="text-[#3D3D3D] font-regular text-[16px]">جواد چه</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[128px] h-[91px] relative">
                        <Image 
                            src={MapImage}
                            alt="map image"
                            fill={true}
                            sizes="100%"
                            className="rounded-[8px]"
                            style={{objectFit : "cover",objectPosition : "center"}}
                        />
                    </div>
                    <div className="mt-[15px] flex items-center justify-center gap-[4px]
                        rounded-[8px] py-[8px] px-[24px] border border-[#0B79D1] cursor-pointer
                        transition hover:shadow-lg hover:translate-y-[-5px] duration-400">
                        <p className="text-[#0B79D1] font-medium text-[14px]">ویرایش</p>
                        <div className="size-[24px]">
                            <ArrowLeftIcon />
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}; export default Location;