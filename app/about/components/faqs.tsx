import React, { FC, useState } from "react";
import { Slide } from "react-awesome-reveal";
import SearchIcon from "@/components/icons/header/search";
import TruckFastIcon from "@/components/icons/about/truckFast";
import ShopingCardIcon from "@/components/icons/about/shopingCard";
import LoginIcon from "@/components/icons/about/login";
import RotateRightIcon from "@/components/icons/about/rotateRight";
import DiscountIcon from "@/components/icons/about/discount";
import MenuIcon from "@/components/icons/about/menu";
import MessageIcon from "@/components/icons/about/message";
import ArrowDownIcon from "@/components/icons/about/arrowDown";
import ArrowLeftIcon from "@/components/icons/profile/arrowLeft";

type CategoryTypes = "order-tracking" | "order-registeration-process" | "login-signup" | "product-return"
    | "dicount-code" | "other";

export interface CategoryType {
    text: string,
    type: CategoryTypes,
    active_icon: React.ReactNode,
    icon: React.ReactNode,
    faqs?: {
        question: string,
        answer: string,
    }[],
    currentCategory?: CategoryTypes,
    setCategory?: React.Dispatch<React.SetStateAction<CategoryTypes>>,
}


export const Category: FC<CategoryType> = (props) => {
    return (
        <div className="grid grid-cols-1 my-4 cursor-pointer"
            onClick={() => props?.setCategory?.(props.type)}>
            <div className={`flex items-center justify-between  pl-4
                ${props.currentCategory === props.type
                ? "bg-[#D5E9F8]" : "bg-[#FAFAFA]"} rounded-[8px] transition duration-400`}>
                <div className={`flex items-center justify-start p-4 gap-[16px]`}>
                    <div className="size-[20px]">
                        {
                            props.currentCategory === props.type ? props.active_icon : props.icon
                        }
                    </div>
                    <p className={`text-[14px] transition duration-400
                ${props.currentCategory === props.type ?
                            " text-[#0A3C63] font-semibold " : " text-[#3D3D3D] font-regular"}`}>
                        {props.text}</p>
                </div>
                <div className="md:hidden size-[16px]">
                    <ArrowLeftIcon color="#3D3D3D" />
                </div>
            </div>
        </div>
    )
};

export const Faq: FC<{
    question: string,
    answer: string,
}> = ({ answer, question }) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="col-span-1 cursor-pointer hover:bg-[#FAFAFA] p-4 rounded-[8px] transition
            duration-400">
            <Slide duration={200} direction="up" triggerOnce>
                <div onClick={() => setOpen(!open)}>
                    <div className="flex items-center justify-between">
                        <p className="text-[#3D3D3D] font-regular text-[12px] md:text-[16px]">{question}</p>
                        <div className={`size-[20px] ${open && "rotate-180"}`}>
                            <ArrowDownIcon />
                        </div>
                    </div>
                    <p>{open && answer}</p>
                </div>
            </Slide>
        </div>
    )
}

export const categories: CategoryType[] = [
    {
        text: "پیگیری ارسال سفارش",
        type: "order-tracking",
        active_icon: <TruckFastIcon color={"#0A3C63"} />,
        icon: <TruckFastIcon color={"#4DABF5"} />,
        faqs: [
            {
                answer: "",
                question: "چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟"
            }, {
                answer: "",
                question: "چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟"
            }, {
                answer: "",
                question: "چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟"
            }, {
                answer: "",
                question: "چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟"
            }, {
                answer: "",
                question: "چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟"
            }, {
                answer: "",
                question: "چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟"
            }, {
                answer: "",
                question: "چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟"
            }, {
                answer: "",
                question: "چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟"
            },
        ]
    }, {
        text: "فرآیند ثبت سفارش",
        type: "order-registeration-process",
        active_icon: <ShopingCardIcon color={"#0A3C63"} />,
        icon: <ShopingCardIcon color={"#4DABF5"} />,
        faqs: [
            {
                answer: "",
                question: "آیا پس از ثبت سفارش، به من اطلاع رسانی می‌شود؟",
            }, {
                answer: "",
                question: "آیا پس از ثبت سفارش، به من اطلاع رسانی می‌شود؟",
            }, {
                answer: "",
                question: "آیا پس از ثبت سفارش، به من اطلاع رسانی می‌شود؟",
            }, {
                answer: "",
                question: "آیا پس از ثبت سفارش، به من اطلاع رسانی می‌شود؟",
            }, {
                answer: "",
                question: "آیا پس از ثبت سفارش، به من اطلاع رسانی می‌شود؟",
            }, {
                answer: "",
                question: "آیا پس از ثبت سفارش، به من اطلاع رسانی می‌شود؟",
            }, {
                answer: "",
                question: "آیا پس از ثبت سفارش، به من اطلاع رسانی می‌شود؟",
            }, {
                answer: "",
                question: "آیا پس از ثبت سفارش، به من اطلاع رسانی می‌شود؟",
            },
        ]
    }, {
        text: "ورود و ثبت نام",
        type: "login-signup",
        active_icon: <LoginIcon color={"#0A3C63"} />,
        icon: <LoginIcon color={"#4DABF5"} />,
        faqs: [
            {
                answer: "",
                question: " مدت زمان ارسال سفارش چقدر است؟",
            }, {
                answer: "",
                question: " مدت زمان ارسال سفارش چقدر است؟",
            }, {
                answer: "",
                question: " مدت زمان ارسال سفارش چقدر است؟",
            }, {
                answer: "",
                question: " مدت زمان ارسال سفارش چقدر است؟",
            }, {
                answer: "",
                question: " مدت زمان ارسال سفارش چقدر است؟",
            }, {
                answer: "",
                question: " مدت زمان ارسال سفارش چقدر است؟",
            }, {
                answer: "",
                question: " مدت زمان ارسال سفارش چقدر است؟",
            }, {
                answer: "",
                question: " مدت زمان ارسال سفارش چقدر است؟",
            },
        ]
    }, {
        text: "مرجوع کالا",
        type: "product-return",
        active_icon: <RotateRightIcon color={"#0A3C63"} />,
        icon: <RotateRightIcon color={"#4DABF5"} />,
    }, {
        text: "کد تخفیف",
        type: "dicount-code",
        active_icon: <DiscountIcon color={"#0A3C63"} />,
        icon: <DiscountIcon color={"#4DABF5"} />,
    }, {
        text: "سایر موارد",
        type: "other",
        active_icon: <MenuIcon color={"#0A3C63"} />,
        icon: <MenuIcon color={"#4DABF5"} />,
    },
]

const Faqs = () => {

    const [currentCategory, setCategory] = useState<CategoryTypes>("order-tracking");

    return (
        <>
            <Slide triggerOnce duration={300} direction="up">
                <div className="flex items-center justify-start gap-3 p-3 border border-[#EDEDED] 
                    rounded-[8px] w-[33%]">
                    <div className="size-[20px]">
                        <SearchIcon />
                    </div>
                    <input
                        type="text"
                        placeholder="موضوع خود را جست و جو کنید..."
                        className="text-[#868686] w-full outline-none font-regular text-[14px]"
                    />
                </div>
            </Slide>
            <div className="grid grid-cols-4 gap-6 my-12">
                <div className="col-span-1">
                    <Slide duration={300} direction="right" triggerOnce>
                        {
                            categories.map((category, index) => {
                                return (
                                    <Category
                                        key={index}
                                        {...category}
                                        setCategory={setCategory}
                                        currentCategory={currentCategory}
                                    />
                                )
                            })
                        }
                    </Slide>
                </div>
                <div className="col-span-3">
                    <div className="flex items-center justify-start gap-4">
                        <div className="size-[24px]">
                            <MessageIcon />
                        </div>
                        <p className="text-[#3D3D3D] text-[28px] font-medium">سوالات پیگیری ارسال سفارش</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 my-4">
                        {
                            categories.find((item) => item.type === currentCategory)?.faqs?.map((faq, index) => {
                                return (
                                    <Faq
                                        key={index}
                                        answer={faq.answer}
                                        question={faq.question}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}; export default Faqs;