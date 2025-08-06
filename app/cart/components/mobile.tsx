import dynamic from "next/dynamic";
import { Slide } from "react-awesome-reveal";
import TickCircleIcon from "@/components/icons/profile/tickCircle";
import InfoCircleIcon from "@/components/icons/cart/infoCircle";
import Link from "next/link";
const MobileCartProduct = dynamic(() => import("@/app/cart/components/mobileCartProduct"), { ssr: false });



const CartMobile = () => {

    const products = [1, 2, 3];

    return (
        <div className="m-6 [direction:rtl]">
            <div className="border-b border-[#ADADAD] pb-3">
                <p className="text-[#000000] font-semibold text-[14px]">صورت حساب</p>
            </div>

            <div className="grid grid-cols-1 gap-6 my-6">
                {
                    products.map((product, index) => {
                        return (
                            <MobileCartProduct key={index} />
                        )
                    })
                }
            </div>

            <Slide duration={300} triggerOnce direction="left">
                <div className="border-[1px] border-[#D6D6D6] rounded-[16px] p-4">
                    <p className="text-[#F21818] font-medium text-[14px] mb-2">کد تخفیف</p>
                    <p className="my-2 text-[#3D3D3D] font-medium text-[14px] text-justify">
                        کد تخفیف کد معرف کارت هدیه خود را در زیر وارد کرده و دکمه
                        ثبت رو بزنید تا در صورت داشتن اعتبار به سفارش شما اعمال شود</p>
                    <div className="flex items-center justify-between gap-[8px]">
                        <input
                            type="text"
                            className="outline-none border-[#D6D6D6] border-[1px] rounded-[8px]
                                                py-[8px] px-[16px] w-full"
                        />
                        <div className="border-[#F21818] px-[24px] py-[8px] border-[1px]
                                                rounded-[8px] cursor-pointer">
                            <p className="text-[#F21818] text-[14px] font-medium">ثبت</p>
                        </div>
                    </div>
                </div>
            </Slide>

            <Slide duration={300} triggerOnce direction="up" className="my-6">
                <div className="flex items-center justify-between my-3">
                    <p className="tex-[#3D3D3D] font-medium text-[14px]">قیمت کالا ها</p>
                    <p className="text-[#3D3D3D] font-medium text-[14px]">
                        <span>۲۴۰.۰۰۰</span>
                        <span>تومان</span>
                    </p>
                </div>
                <div className="flex items-center justify-between my-3">
                    <p className="text-[#F44336] font-medium text-[14px]"> سود شما از خرید</p>
                    <p className="text-[#F44336] font-medium text-[14px]">
                        <span>۲۰.۰۰۰</span>
                        <span>تومان</span>
                    </p>
                </div>
                <div className="flex items-center justify-between my-3">
                    <p className="tex-[#3D3D3D] font-medium text-[14px]">هزینه ارسال</p>
                    <p className="text-[#3D3D3D] font-medium text-[14px]">
                        <span>۵۰.۰۰۰</span>
                        <span>تومان</span>
                    </p>
                </div>
                <div className="flex items-center justify-between my-3 border-t border-[#EDEDED] pt-3">
                    <p className="tex-[#3D3D3D] font-medium text-[14px]">مبلغ قابل پرداخت</p>
                    <p className="text-[#3D3D3D] font-medium text-[14px]">
                        <span>۲۹۰.۰۰۰</span>
                        <span>تومان</span>
                    </p>
                </div>

                <Link
                    href={"/cart/payment"}
                    className="my-3 flex items-center justify-center gap-[8px] py-[8px] bg-[#0A3C63]
                    rounded-[8px]">
                    <div className="size-[24px]">
                        <TickCircleIcon color="#FFFFFF" />
                    </div>
                    <p className="text-[#FFFFFF] font-medium text-[16px]">تکمیل فرایند خرید</p>
                </Link>
            </Slide>

            <Slide direction="up" duration={300}>
                <div className="border border-[#D6D6D6] rounded-[8px] p-[16px]">
                    <div className="size-[18px]">
                        <InfoCircleIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-regular text-[12px] my-3">
                        ارسال رایگان برای سفارش های بالای ۷۰۰.۰۰۰ تومن</p>
                    <p className="text-[#3D3D3D] font-regular text-[12px] my-3">
                        در صورت اتمام موجودی‌، کالاها از سبد خرید حذف میشوند.</p>
                    <p className="text-[#3D3D3D] font-regular text-[12px] my-3">
                        لطفا در طول مراحل خرید فیلتر شکن خود را خاموش کنید.</p>
                </div>
            </Slide>
        </div>
    )
}; export default CartMobile;