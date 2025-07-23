import Image from "next/image";
import MomGift from '@/public/mom 1.png';
import DadGift from "@/public/dadi 1.png";
import MagicStar from "@/components/icons/home/magitStar";


const BannerGift = () => {
    return (
        <div className="grid grid-cols-2 items-center [direction:rtl] m-[80px] gap-[25px]">
            <div className="col-span-1 flex items-center justify-between bg-[#D5E9F8] rounded-[16px]">
                <div className="m-[25px]">
                    <p className="text-[#3D3D3D] font-bold text-[24px]">محصولات مناسب آقایان</p>
                    <div className="flex items-center justify-center bg-[#0A3C63] w-fit my-4 gap-[4px]
                        rounded-[8px] py-[8px] px-[24px]">
                        <div className="size-[24px]">
                            <MagicStar />
                        </div>
                        <p className="font-bold text-[14px] text-[#FFFFFF]">لیست کامل</p>
                    </div>
                </div>
                <div className="w-[287px] h-[188px] relative">
                    <Image
                        src={DadGift}
                        alt="dad gift"
                        fill={true}
                        sizes="100%"
                        className="rounded-[16px]"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
            </div>
            <div className="col-span-1 flex items-center justify-between bg-[#D5E9F8] rounded-[16px]">
                <div className="m-[25px]">
                    <p className="text-[#3D3D3D] font-bold text-[24px]">محصولات مناسب خانم</p>
                    <div className="flex items-center justify-center bg-[#0A3C63] w-fit my-4 gap-[4px]
                        rounded-[8px] py-[8px] px-[24px]">
                        <div className="size-[24px]">
                            <MagicStar />
                        </div>
                        <p className="font-bold text-[14px] text-[#FFFFFF]">لیست کامل</p>
                    </div>
                </div>
                <div className="w-[287px] h-[188px] relative">
                    <Image
                        src={MomGift}
                        alt="mom gift"
                        fill={true}
                        sizes="100%"
                        className="rounded-[16px]"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
            </div>
        </div>
    )
}; export default BannerGift;