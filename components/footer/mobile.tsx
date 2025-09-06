"use client"
import Image from "next/image";
import dynamic from "next/dynamic";
import { FC, useEffect, useRef, useState } from "react";
import Logo from '@/public/logo.svg';
import HomeIconFull from "@/icons/footer/home";
import HomeIcon from "@/icons/cart/home";
import NoteAddIcon from "@/icons/footer/noteAdd";
import UserIcon from "@/icons/header/user";
import UserFullIcon from "@/icons/footer/userFull";
import ShopingCartFullIcon from "@/icons/footer/shopingCartFull";
import NoteAddFullIcon from "@/icons/footer/noteAddFull";
import ArrowDownCircleIcon from "@/icons/footer/arrowDownCircle";
import { GroupLinkType } from ".";
import ShopingCardIcon from "@/icons/about/shopingCard";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FooterType } from "@/components/types";


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
                            <li key={index} className="text-[#EDEDED] text-[12px] my-1">
                                {
                                    item.link ?
                                        <Link href={item.link}>{item.title}</Link> :
                                        <p>{item.title}</p>
                                }

                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
};


const FooterMobile: FC<FooterType> = ({ license, quickAccess, socialMedia, text }) => {

    const currentPath = usePathname();

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
                <NewsInput />
                <div className="my-6 grid grid-cols-3 items-center">
                    <div className="col-span-2">
                        <div className="flex items-center justify-start gap-6">
                            {
                                license?.map((item, index) => {
                                    return (
                                        <div className="w-[41px] h-[48px] relative overflow-hidden" key={index}>
                                            {item.code}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="flex items-center my-6 justify-start gap-[16px]">
                            {
                                socialMedia?.map((item, index) => {
                                    return (
                                        <Link href={item.link ? item.link : "/"} key={index}>
                                            <div className="size-[32px] relative" >
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
                <p className="text-[#FFFFFF] font-medium text-[10px] text-center text-justify leading-6">
                    {text}
                </p>
            </div>
            <div className="bg-[#0A3C63] p-6 py-3 [direction:rtl] border-t border-white sticky bottom-0 z-[25]">
                <div className="flex items-center justify-between">
                    <Link href={"/"}>
                        <div className="size-[24px] mx-auto mb-2">
                            {
                                currentPath === "/" ?
                                    <HomeIconFull color="white" /> :
                                    <HomeIcon color="white" />
                            }
                        </div>
                        <p className="text-[#EDEDED] text-[12px] font-regular">خانه</p>
                    </Link>
                    <div>
                        <div className="size-[24px] mx-auto mb-2">
                            {
                                currentPath === "/me" ?
                                    <NoteAddFullIcon color="white" /> :
                                    <NoteAddIcon color="white" />
                            }
                        </div>
                        <p className="text-[#EDEDED] text-[12px] font-regular">آپشنال</p>
                    </div>
                    <Link href={"/cart"}>
                        <div className="size-[24px] mx-auto mb-2">
                            {
                                currentPath === "/cart" ?
                                    <ShopingCartFullIcon color="white" /> :
                                    <ShopingCardIcon color="white" />
                            }
                        </div>
                        <p className="text-[#EDEDED] text-[12px] font-regular">سبد خرید</p>
                    </Link>
                    <Link href={"/profile"}>
                        <div className="size-[24px] mx-auto mb-2">
                            {
                                currentPath.startsWith("/profile") ?
                                    <UserFullIcon color="white" /> :
                                    <UserIcon color="white" />
                            }
                        </div>
                        <p className="text-[#EDEDED] text-[12px] font-regular">پروفایل</p>
                    </Link>
                </div>
            </div>
        </>
    )
}; export default FooterMobile;