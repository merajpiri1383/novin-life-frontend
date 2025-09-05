import MoneyReceiveIcon from "@/components/icons/cart/moneyReceive"
import Link from "next/link";
import { SummaryType } from "@/app/cart/types";
import { FC } from "react";


const Summary: FC<SummaryType> = (props) => {

    return (
        <div className="p-4 border-[#EDEDED] rounded-[16px] border-[1px] select-none">
            <div className="flex items-center justify-between mb-4">
                <p className="text-[#3D3D3D] font-bold text-[20px]">هزینه ها</p>
                <div className="flex items-center justify-center gap-4">
                    <p className="text-[#3D3D3D] font-semibold text-[12px]">
                        {props.items_count} عدد محصول</p>
                    <div className="size-[24px]">
                        <MoneyReceiveIcon />
                    </div>
                </div>
            </div>
            <div className="my-3 flex items-center justify-between">
                <p className="text-[#3D3D3D] font-medium text-[16px]">قیمت محصولات</p>
                <p className="text-[#3D3D3D] font-medium text-[16px]">{props.total_price} تومان</p>
            </div>
            <div className="my-3 flex items-center justify-between">
                <p className="text-[#3D3D3D] font-medium text-[16px]">هزینه های  جانبی</p>
                <p className="text-[#3D3D3D] font-medium text-[16px]">{props.total_post_price} تومان</p>
            </div>
            <div className="my-3 flex items-center justify-between">
                <p className="text-[#D50000] font-medium text-[16px]">تخفیف محصولات</p>
                <p className="text-[#D50000] font-medium text-[16px]">{props.discount} تومان</p>
            </div>
            <div className="my-3 flex items-center justify-between">
                <p className="text-[#3D3D3D] font-medium text-[16px]">جمع کل محصولات</p>
                <p className="text-[#3D3D3D] font-medium text-[16px]">{props.final_total} تومان</p>
            </div>

            <Link href={"/cart/payment"}>
                <div className="bg-[#0A3C63] rounded-[8px] w-full py-[8px]">
                    <p className="text-center w-full text-[#FFFFFF]">مرحله بعدی</p>
                </div>
            </Link>
        </div>
    )
}; export default Summary;