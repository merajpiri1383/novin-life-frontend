"use client"

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import Logo from "@/public/logo.svg";
import MapBg from "@/public/dev/map-bg.svg";
import MailIcon from "@/components/icons/about/mail";
import CallIcon from "@/components/icons/profile/call";

const About = dynamic(() => import("@/app/about/components/about"), { ssr: false });
const Contact = dynamic(() => import("@/app/about/components/contact"), { ssr: false });
const Faqs = dynamic(() => import("@/app/about/components/faqs"),{ssr : false});

type ActiveSectionType = "about" | "contact" | "faq";

const Page = () => {

    const [activeSection, setActiveSection] = useState<ActiveSectionType>("about");

    return (
        <div className="mx-[80px] mb-12 [direction:rtl]">
            <div className="flex items-center justify-start gap-[24px]">
                <div
                    onClick={() => setActiveSection("faq")}
                    className={`rounded-[8px] px-[16px] py-[10px] cursor-pointer transition 
                    duration-400 hover:translate-y-[-10px]
                    ${activeSection === "faq" && "bg-[#EBF5FF]"}`}>
                    <p className={`${activeSection === "faq" ? "text-[#0A3C63]" : "text-[#3D3D3D]"}
                        text-[14px] font-medium`}>سولات متداول</p>
                </div>
                <div
                    onClick={() => setActiveSection("contact")}
                    className={`rounded-[8px] px-[16px] py-[10px] cursor-pointer transition 
                    duration-400 hover:translate-y-[-10px]
                    ${activeSection === "contact" && "bg-[#EBF5FF]"}`}>
                    <p className={`${activeSection === "contact" ? "text-[#0A3C63]" : "text-[#3D3D3D]"}
                        text-[14px] font-medium`}>تماس با ما</p>
                </div>
                <div
                    onClick={() => setActiveSection("about")}
                    className={`rounded-[8px] px-[16px] py-[10px] cursor-pointer transition 
                    duration-400 hover:translate-y-[-10px]
                    ${activeSection === "about" && "bg-[#EBF5FF]"}`}>
                    <p className={`${activeSection === "about" ? "text-[#0A3C63]" : "text-[#3D3D3D]"}
                        text-[14px] font-medium`}>درباره ما</p>
                </div>
            </div>
            <div className="my-12">
                {
                    activeSection === "about" && <About />
                }
                {
                    activeSection === "contact" && <Contact />
                }
                {
                    activeSection === "faq" && <Faqs />
                }
            </div>

            <Slide duration={300} triggerOnce direction="up">
                <div className="border border-[#D6D6D6] p-6 rounded-[8px]">
                    <p className="text-[#3D3D3D] font-medium text-[16px] 
                        border-b w-fit border-[#2196F3]">اطلاعات نوین لایف</p>

                    <div className="flex items-center justify-start gap-4 my-6">
                        <div className="size-[50.8] relative">
                            <Image
                                src={Logo}
                                alt="logo"
                                fill={true}
                                sizes="100%"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        </div>
                        <p className="font-medium text-[18px] text-[#3D3D3D]">دفتر مرکزی</p>
                    </div>
                    <div className="my-6 w-full h-[440px] relative flex items-center justify-center">
                        <Image
                            src={MapBg}
                            alt="map bg"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                        <p className="text-[#000000] font-bold text-[64px] relative">Google map</p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-6 px-[30px]">
                        <div className="col-span-1 bg-[#E9F3FB] p-6 rounded-[8px]">
                            <Slide direction="right" duration={300} triggerOnce>
                                <div className="size-[24px] mx-auto my-4">
                                    <CallIcon />
                                </div>
                                <p className="text-[#3D3D3D] font-medium text-[16px] my-4
                                text-center">شماره تماس</p>
                                <p className="my-4 font-regular text-[16px] text-[#3D3D3D]
                                text-center">۰۲۱-۹۱۹۰۹۲۹۲۰۲۹</p>
                            </Slide>
                        </div>
                        <div className="col-span-1 bg-[#E9F3FB] p-6 rounded-[8px]">
                            <Slide duration={300} direction="left" triggerOnce>
                                <div className="size-[24px] mx-auto my-4">
                                    <MailIcon />
                                </div>
                                <p className="text-[#3D3D3D] font-medium text-[16px] my-4
                                text-center">ایمیل نوین لایف</p>
                                <p className="my-4 font-regular text-[16px] text-[#3D3D3D]
                                text-center">info@novinlife.com</p>
                            </Slide>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    )
}; export default Page;