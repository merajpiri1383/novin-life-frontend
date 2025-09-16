import { FC } from "react";
import ArrowSquare from "@/icons/header/arrowSquare";
import { useCompanyStore } from "@/lib/store/company";
import Link from "next/link";


const Menu: FC = () => {

    const { header } = useCompanyStore();

    return (
        <div className="bg-[#E9F3FB] py-[16px] px-[40px] my-6 rounded-[16px] flex items-center 
            justify-start gap-[40px]">

            {
                header?.map((item, index) => {
                    return (
                        <Link  
                            href={item.link ? item.link : "/"}
                            className="flex items-center justify-center gap-[4px]" key={index}>
                            <p className="text-[#3D3D3D] text-[16px] font-bold">
                                {item.title}
                            </p>
                            <div className="size-[18px]">
                                <ArrowSquare />
                            </div>
                        </Link>
                    )
                })
            }

            <p className="font-bold text-[16px] text-[#F44336]">تخفیفات ویژه</p>

            <Link href={"#most-sell"} className="font-bold text-[16px] text-[#2196F3]">پرفروش ترین ها</Link>

            <Link href={"/product"} className="font-bold text-[16px] text-[#2196F3]">جدید ترین محصولات</Link>

        </div>
    )
}; export default Menu;