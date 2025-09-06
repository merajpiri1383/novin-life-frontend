import Image from "next/image";
import { FC } from "react";
import SecuritySafeIcon from "@/icons/footer/securitySafe";
import { GroupLinkType } from ".";
import dynamic from "next/dynamic";

import { FooterType } from "@/components/types";
import Link from "next/link";

const NewsInput = dynamic(() => import("@/components/footer/newsInput"), { ssr: false });




const GroupLink: FC<GroupLinkType> = (props) => {
    return (
        <div className="col-span-1">
            <p className="text-[#F2F2F2] font-bold text-[14px]">{props.title}</p>
            <ul className="mt-6 grid grid-cols-1 gap-[16px] list-disc">
                {
                    props.items.map((item, index) => {
                        return (
                            <li key={index}
                                className="col-span-1 text-[14px] text-[#F2F2F2] font-bold">{item.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
};


const FooterDesktop: FC<FooterType> = ({ license, quickAccess, socialMedia, text }) => {

    return (
        <div className="bg-[#06425D] [direction:rtl]">
            <div className="p-[80px] flex items-start justify-between">
                <div className="grid grid-cols-4">
                    {
                        quickAccess?.map((groupLink, index) => {
                            return (
                                <GroupLink
                                    title={groupLink.title}
                                    items={groupLink.items}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
                <div>
                    <p className="text-[#FFFFFF] text-[14px] font-bold">
                        برای دریافت تخفیف های بیشتر ما را دنبال کنید!</p>
                    <div className="flex items-center justify-between my-2">
                        {
                            socialMedia?.map((item, index) => {
                                return (
                                    <Link href={item.link ? item.link : "/"} key={index}>
                                        <div className="size-[40px] relative" >
                                            {
                                                item.image && <Image
                                                    src={item.image}
                                                    alt="social media"
                                                    fill={true}
                                                    sizes="100%"
                                                />
                                            }
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <NewsInput />

                </div>
            </div>

            <div className="px-[80px] grid grid-cols-2 items-start">
                <div className="col-span-1">
                    <p className="text-[#F2F2F2] font-bold text-[14px]">فروشگاه اینترنتی نوین لایف</p>
                    <p className="text-[#F2F2F2] font-bold text-[12px] my-2 text-justify leading-6">
                        {text}</p>
                </div>
                <div className="col-span-1 flex items-center justify-end">
                    <div className="grid grid-cols-3 items-center gap-[24px] w-fit">
                        {
                            license?.map((item, index) => {
                                return (
                                    <div key={index} className="w-[68px] h-[80px] relative col-span-1 overflow-hidden">
                                        {item.code}
                                    </div>
                                )
                            })
                        }
                        <p className="text-[#F9F9F9] font-bold text-[12px] col-span-3 text-center">یک هفته ضمانت بازگشت ✍</p>
                    </div>
                </div>
            </div>

            <div className="py-6">
                <div className="bg-[#FFFFFF] h-[2px] w-full"></div>
            </div>

            <div className="px-[80px] flex items-center justify-start gap-[8px] pb-4">
                <div className="size-[14px]">
                    <SecuritySafeIcon />
                </div>
                <p className="text-[#ADADAD] font-bold text-[10px]">
                    تمامی حقوق مادی و معنوی این وب‌سایت برای مجموعه نوین لایف محفوظ می‌باشد.</p>
            </div>
        </div>
    )
}; export default FooterDesktop;