"use client"
import Image from "next/image";
import dynamic from "next/dynamic";
import { FC, useEffect, useRef, useState } from "react";
import Logo from '@/public/logo.svg';
import YoutubeIcon from "@/icons/footer/youtube";
import WhatsAppIcon from "@/icons/footer/whatsapp";
import TelegramIcon from "@/icons/footer/telegram";
import InstagramIcon from "@/icons/footer/instagram";
import NamadImage from "@/public/dev/namad.svg";
import HomeIcon from "@/icons/footer/home";
import NoteAddIcon from "@/icons/footer/noteAdd";
import ShoppingCartIcon from "@/icons/cart/shoppingCart";
import UserIcon from "@/icons/header/user";
import ArrowDownCircleIcon from "@/icons/footer/arrowDownCircle";
import { GroupLinkType } from ".";
import ShopingCardIcon from "../icons/about/shopingCard";


const NewsInput = dynamic(() => import("@/components/footer/newsInput"), { ssr: false });

const GroupLink: FC<GroupLinkType> = ({ items, title }) => {

    const [open, setOpen] = useState<boolean>(false);
    const contentRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.setProperty("--group-link-height", contentRef.current.scrollHeight + "px")
        }
    }, [open]);

    return (
        <div className={`border-b border-[#EDEDED] pb-2
            ${open ? "grouplink-open" : "grouplink-close"} overflow-hidden`} ref={contentRef}>
            <div className="flex items-center justify-between">
                <p className="text-[#EDEDED] font-medium text-[14px]">{title}</p>
                <div className={`size-[19px] cursor-pointer ${open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}>
                    <ArrowDownCircleIcon />
                </div>
            </div>
            <div className="my-2">
                {
                    open && items.map((item, index) => {
                        return (
                            <li className="text-[#EDEDED] text-[12px] my-1" key={index}>{item.text}</li>
                        )
                    })
                }
            </div>
        </div>
    )
};


interface Props {
    groupLinks: GroupLinkType[]
}

const FooterMobile: FC<Props> = ({ groupLinks }) => {

    return (
        <>
            <div className="bg-[#0A3C63] p-6 [direction:rtl]">
                <div className="flex items-center justify-between text-[#FFFFFF] text-[12px]">
                    <p>
                        <span>تماس با پشتیبانی : </span>
                        <span>017-۳۴۵۶۰۰۰</span>
                    </p>
                    <p>|</p>
                    <p>پاسخگویی ۲۴ ساعته ، ۷ روز هفته </p>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-4">
                    {
                        groupLinks.map((groupLink, index) => {
                            return (
                                <GroupLink {...groupLink} key={index} />
                            )
                        })
                    }
                </div>
                <NewsInput />
                <div className="my-6 grid grid-cols-3 items-center">
                    <div className="col-span-2">
                        <div className="flex items-center justify-start gap-6">
                            <div className="w-[41px] h-[48px] relative">
                                <Image
                                    src={NamadImage}
                                    alt="namad image"
                                    fill={true}
                                    className="rounded-[2px]"
                                    sizes="100%"
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                />
                            </div>
                            <div className="w-[41px] h-[48px] relative">
                                <Image
                                    src={NamadImage}
                                    alt="namad image"
                                    fill={true}
                                    className="rounded-[2px]"
                                    sizes="100%"
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                />
                            </div>
                            <div className="w-[41px] h-[48px] relative">
                                <Image
                                    src={NamadImage}
                                    alt="namad image"
                                    fill={true}
                                    className="rounded-[2px]"
                                    sizes="100%"
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center my-6 justify-start gap-[16px]">
                            <div className="size-[32px]">
                                <YoutubeIcon color="#0A3C63" />
                            </div>
                            <div className="size-[32px]">
                                <WhatsAppIcon color="#0A3C63" />
                            </div>
                            <div className="size-[32px]">
                                <TelegramIcon color="#0A3C63" />
                            </div>
                            <div className="size-[32px]">
                                <InstagramIcon color="#0A3C63" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="w-[108px] h-[118px] relative mx-auto">
                            <Image
                                src={Logo}
                                alt="logo"
                                fill={true}
                                sizes="100%"
                                draggable={false}
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        </div>
                    </div>
                </div>
                <p className="text-[#FFFFFF] font-medium text-[10px] text-center">
                    تمام حقوق این وبسایت متعلق به فروشگاه آنلاین نوین لایف می باشد</p>
            </div>
            <div className="bg-[#0A3C63] p-6 py-3 [direction:rtl] border-t border-white sticky bottom-0 z-[25]">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="size-[24px] mx-auto mb-2">
                            <HomeIcon color="white" />
                        </div>
                        <p className="text-[#EDEDED] text-[12px] font-regular">خانه</p>
                    </div>
                    <div>
                        <div className="size-[24px] mx-auto mb-2">
                            <NoteAddIcon color="white" />
                        </div>
                        <p className="text-[#EDEDED] text-[12px] font-regular">آپشنال</p>
                    </div>
                    <div>
                        <div className="size-[24px] mx-auto mb-2">
                            <ShopingCardIcon color="white" />
                        </div>
                        <p className="text-[#EDEDED] text-[12px] font-regular">سبد خرید</p>
                    </div>
                    <div>
                        <div className="size-[24px] mx-auto mb-2">
                            <UserIcon color="white" />
                        </div>
                        <p className="text-[#EDEDED] text-[12px] font-regular">پروفایل</p>
                    </div>
                </div>
            </div>
        </>
    )
}; export default FooterMobile;