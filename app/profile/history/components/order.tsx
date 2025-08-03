import Image from "next/image";
import TickCircleIcon from "@/components/icons/profile/tickCircle2";
import ProductImage1 from "@/public/dev/productImage1.png";
import BillIcon from "@/components/icons/profile/bill";

const Order = () => {
    return (
        <div className="my-4 border-[#EDEDED] border-[1px] rounded-[8px]">
            <div className="flex items-center justify-start gap-[8px] m-[20px]">
                <div className="size-[24px]">
                    <TickCircleIcon />
                </div>
                <p className="font-medium text-[16px] text-[#3D3D3D]">تحویل شده</p>
            </div>
            <div className="m-[20px] md:flex items-center justify-start gap-[16px]">
                <p className="text-[#898989] font-regular text-[16px]">۳ شهریور ۱۴۰۲</p>
                <div className="flex items-center justify-start my-3 md:my-0 md:justify-center gap-[8px]">
                    <p className="font-regular text-[16px] text-[#898989]">کد سفارش </p>
                    <p className="font-regular text-[16px] text-[#3D3D3D]">۳۵۴۵۳۴۵۲۱</p>
                </div>
                <div className="flex items-center justify-start my-3 md:my-0 md:justify-center gap-[8px]">
                    <p className="font-regular text-[16px] text-[#898989]">مبلغ</p>
                    <p className="font-regular text-[16px] text-[#3D3D3D]"> ۵۴۵,۰۰۰ تومان</p>
                </div>
                <div className="flex items-center justify-start my-3 md:my-0 md:justify-center gap-[8px]">
                    <p className="font-regular text-[16px] text-[#898989]">تخفیف</p>
                    <p className="font-regular text-[16px] text-[#3D3D3D]"> ۵۴۵,۰۰۰ تومان</p>
                </div>
            </div>
            <div className="my-[20px] border-t border-b border-[#EDEDED] p-[20px] 
                grid grid-cols-3 md:grid-cols-7 gap-[32px]">
                <div className="col-span-1 size-[88px] relative">
                    <Image
                        src={ProductImage1}
                        alt="product image1"
                        fill={true}
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="rounded-[8px]"
                    />
                </div>
                <div className="col-span-1 size-[88px] relative">
                    <Image
                        src={ProductImage1}
                        alt="product image1"
                        fill={true}
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="rounded-[8px]"
                    />
                </div>
                <div className="col-span-1 size-[88px] relative">
                    <Image
                        src={ProductImage1}
                        alt="product image1"
                        fill={true}
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="rounded-[8px]"
                    />
                </div>
                <div className="col-span-1 size-[88px] relative">
                    <Image
                        src={ProductImage1}
                        alt="product image1"
                        fill={true}
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="rounded-[8px]"
                    />
                </div>
                <div className="col-span-1 size-[88px] relative">
                    <Image
                        src={ProductImage1}
                        alt="product image1"
                        fill={true}
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="rounded-[8px]"
                    />
                </div>
                <div className="col-span-1 size-[88px] relative">
                    <Image
                        src={ProductImage1}
                        alt="product image1"
                        fill={true}
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="rounded-[8px]"
                    />
                </div>

            </div>
            <div className="m-[20px] flex items-center justify-end gap-[16px]">
                <div className="size-[24px]">
                    <BillIcon />
                </div>
                <p className="text-[#0B79D1] font-medium text-[14px]">مشاهده سفارش</p>
            </div>
        </div>
    )
};export default Order;