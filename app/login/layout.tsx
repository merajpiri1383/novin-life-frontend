import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthBgImage1 from "@/public/auth-bg-1.png";
import AuthBgImage2 from "@/public/auth-bg-2.png";
import AuthBgImage from "@/public/auth-bg.svg";
import HomeIcon from "@/icons/cart/home";
interface Props {
    children?: React.ReactNode,
}

const LoginLayout: FC<Props> = ({ children }) => {
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-white z-[10] [direction:rtl]">
            <div className="w-full h-full grid grid-cols-2">
                <div className="col-span-1 relative flex items-center justify-center">
                    <div className="absolute top-0 left-0">
                        <div className="relative size-[300px]">
                            <Image
                                src={AuthBgImage1}
                                draggable={false}
                                alt="auth bg image1"
                                fill={true}
                                sizes="100%"
                                className="opacity-[10%]"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        </div>
                    </div>
                    <div
                        className="relative w-full z-[25]">{children}</div>
                    <div className="absolute bottom-0 right-0">
                        <div className="relative size-[300px]">
                            <Image
                                src={AuthBgImage2}
                                draggable={false}
                                alt="auth bg image 2"
                                fill={true}
                                sizes="100%"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 relative bg-[#0A3C63] flex items-center justify-center">
                    <Image
                        src={AuthBgImage}
                        alt="auth bg image"
                        draggable={false}
                        fill={true}
                        sizes="100%"
                        className="opacity-[10%]"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    <div className="relative">
                        <p className="text-[#FFFFFF] text-center font-black text-[28px]">نوین لایف</p>
                        <Link href={"/"} className="my-4 flex items-center justify-center gap-2">
                            <div className="size-[24px]">
                                <HomeIcon />
                            </div>
                            <p className="text-[#FFFFFF] text-[18px]
                            font-semibold">برگشت به صفحه اصلی</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}; export default LoginLayout;