import { FC } from "react";
import { Product } from "@/app/components/mostVisit";
import MoreCircleIcon from "@/components/icons/profile/moreCircle";
import MessagesIcon from "@/components/icons/profile/messages";
import GalleryIcon from "@/components/icons/profile/gallery";
import BagHappyIcon from "@/components/icons/profile/bagHappy";
import TickCircleIcon from "@/components/icons/profile/tickCircle";
import CloseCircleIcon from "@/components/icons/profile/closeCircle";


const Content: FC = () => {

    const products : number[] = [1,2,3];

    return (
        <div className="border-[1px] border-[#EDEDED] rounded-[16px] p-[25px]">
            <div className="pb-4 border-b border-[#EDEDED]">
                <p className="text-[#3D3D3D] font-bold text-[18px]">سفارشات من </p>
                <div className="grid grid-cols-3 gap-[25px] my-3">
                    <div className="col-span-1 border-l border-[#EDEDED]">
                        <div className="flex items-center justify-start gap-[8px] my-4">
                            <div className="size-[24px]">
                                <MoreCircleIcon />
                            </div>
                            <p className="text-[#3D3D3D] text-[18px] font-regular">۴۵ سفارش جاری</p>
                        </div>
                        <div className="flex items-center justify-start gap-[8px] my-4">
                            <div className="size-[24px]">
                                <MessagesIcon />
                            </div>
                            <p className="text-[#3D3D3D] text-[18px] font-regular">۵۴ نظر ثبت شده</p>
                        </div>
                    </div>
                    <div className="col-span-1 border-l border-[#EDEDED]">
                        <div className="flex items-center justify-start gap-[8px] my-4">
                            <div className="size-[24px]">
                                <TickCircleIcon />
                            </div>
                            <p className="text-[#3D3D3D] text-[18px] font-regular">۴۵ سفارش ارسال شده</p>
                        </div>
                        <div className="flex items-center justify-start gap-[8px] my-4">
                            <div className="size-[24px]">
                                <CloseCircleIcon />
                            </div>
                            <p className="text-[#3D3D3D] text-[18px] font-regular">۲۱۵ سفارش  لغو شده</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex items-center justify-start gap-[8px] my-4">
                            <div className="size-[24px]">
                                <GalleryIcon />
                            </div>
                            <p className="text-[#3D3D3D] text-[18px] font-regular">۱۰ محصول در گالری</p>
                        </div>
                        <div className="flex items-center justify-start gap-[8px] my-4">
                            <div className="size-[24px]">
                                <BagHappyIcon />
                            </div>
                            <p className="text-[#3D3D3D] text-[18px] font-regular">۲۸ محصول  فیزیکی</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-6 border-[#EDEDED] border-b pb-3">
                <div className="flex items-center justify-between">
                    <p className="text-[#3D3D3D] font-bold text-[24px]">علاقه مندی های من</p>
                    <p className="text-[#0B79D1] font-medium text-[14px]">مشاهده بیشتر</p>
                </div>
                <div className="w-full flex items-center justify-start gap-6 overflow-x-hidden my-4">
                    {
                        products.map((product) => {
                            return (
                                <Product 
                                    key={product} 
                                    classname="min-w-[288px]"
                                    index={product} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="my-6 border-[#EDEDED] border-b pb-3">
                <div className="flex items-center justify-between">
                    <p className="text-[#3D3D3D] font-bold text-[24px]">خرید های پرتکرار</p>
                    <p className="text-[#0B79D1] font-medium text-[14px]">مشاهده بیشتر</p>
                </div>
                <div className="w-full flex items-center justify-start gap-6 overflow-x-hidden my-4">
                    {
                        products.map((product) => {
                            return (
                                <Product 
                                    key={product} 
                                    classname="min-w-[288px]"
                                    index={product} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="my-6">
                <div className="flex items-center justify-between">
                    <p className="text-[#3D3D3D] font-bold text-[24px]">آخرین کالاهای خریداری شده</p>
                    <p className="text-[#0B79D1] font-medium text-[14px]">مشاهده بیشتر</p>
                </div>
                <div className="w-full flex items-center justify-start gap-6 overflow-x-hidden my-4">
                    {
                        products.map((product) => {
                            return (
                                <Product 
                                    key={product} 
                                    classname="min-w-[288px]"
                                    index={product} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}; export default Content;