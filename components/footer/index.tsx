import Image from "next/image";
import { FC } from "react";
import YoutubeIcon from "@/icons/footer/youtube";
import WhatsAppIcon from "@/icons/footer/whatsapp";
import TelegramIcon from "@/icons/footer/telegram";
import InstagramIcon from "@/icons/footer/instagram";
import SmsIcon from "@/icons/footer/sms";
import NamadImage from "@/public/dev/namad.svg";
import SecuritySafeIcon from "../icons/footer/securitySafe";


type GroupLinkType = {
    title: string,
    items: {
        text: string,
        link?: string,
    }[],
}

const GroupLink: FC<GroupLinkType> = (props) => {
    return (
        <div className="col-span-1">
            <p className="text-[#F2F2F2] font-bold text-[14px]">{props.title}</p>
            <ul className="mt-6 grid grid-cols-1 gap-[16px] list-disc">
                {
                    props.items.map((item, index) => {
                        return (
                            <li key={index}
                                className="col-span-1 text-[14px] text-[#F2F2F2] font-bold">{item.text}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

const Footer = () => {

    const groupLinks: GroupLinkType[] = [
        {
            items: [
                {
                    text: "سیم"
                }, {
                    text: "موبایل"
                }, {
                    text: "هولدر"
                }, {
                    text: "کابل"
                },
            ],
            title: "محبوب‌ترین‌ها"
        }, {
            items: [
                {
                    text: "سوالات متداول",
                }, {
                    text: "حریم خصوصی",
                }, {
                    text: "گزارش ایراد در سایت",
                }, {
                    text: "شرایط بازگرداندن محصول",
                },
            ],
            title: "خدمات مشتریان"
        }, {
            items: [
                {
                    text: "راهنمای ثبت سفارش"
                }, {
                    text: "شیوه های پرداخت"
                }, {
                    text: "شیوه های پرداخت"
                }, {
                    text: "نحوه پیگیری محصول"
                },
            ],
            title: "راهنمای خرید"
        }, {
            items: [
                {
                    text: "نشانی  گرگان-صیاد",
                }, {
                    text: "شماره تماس  123456-789",
                }, {
                    text: "پست الکترونیک  novin@gmail.com",
                }, {
                    text: "ساعت کاری  شنبه تا چهارشنبه 9 تا 17",
                },
            ],
            title: "اطلاعات تماس"
        },
    ]


    return (
        <div className="bg-[#06425D] [direction:rtl]">
            <div className="p-[80px] flex items-start justify-between">
                <div className="grid grid-cols-4">
                    {
                        groupLinks.map((groupLink, index) => {
                            return (
                                <GroupLink {...groupLink} key={index} />
                            )
                        })
                    }
                </div>
                <div>
                    <p className="text-[#FFFFFF] text-[14px] font-bold">برای دریافت تخفیف های بیشتر ما را دنبال کنید!</p>
                    <div className="flex items-center justify-between my-2">
                        <div className="size-[40px]">
                            <YoutubeIcon />
                        </div>
                        <div className="size-[40px]">
                            <WhatsAppIcon />
                        </div>
                        <div className="size-[40px]">
                            <TelegramIcon />
                        </div>
                        <div className="size-[40px]">
                            <InstagramIcon />
                        </div>
                    </div>
                    <p className="mt-6 text-[#FFFFFF] font-bold text-[14px]">خبرنامه نوین لایف</p>
                    <div className="border-[1px] rounded-[8px] border-[#868686] 
                        p-[6px] my-2 flex items-center justify-start gap-2">
                        <div className="aspect-square w-[30px]">
                            <SmsIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="ایمیل خود را وارد کنید..."
                            className="w-full text-[#868686] placeholder-[#868686] font-bold text-[12px] outline-none"
                        />
                        <div className="bg-[#03A9F4] rounded-[4px] py-[5px] px-[13px]">
                            <p className="text-[#FFFFFF] text-[14px] font-bold">ثبت</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-[80px] grid grid-cols-2 items-start">
                <div className="col-span-1">
                    <p className="text-[#F2F2F2] font-bold text-[14px]">فروشگاه اینترنتی نوین لایف</p>
                    <p className="text-[#F2F2F2] font-bold text-[12px] my-2 text-justify leading-6">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                        بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
                        شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
                        رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت
                        می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد </p>
                </div>
                <div className="col-span-1 flex items-center justify-end">
                    <div className="grid grid-cols-3 items-center gap-[24px] w-fit">
                        <div className="w-[68px] h-[80px] relative col-span-1">
                            <Image
                                src={NamadImage}
                                alt="namad"
                                fill={true}
                                sizes="100%"
                                className="rounded-[2px] border-[1px] border-[#000000]"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        </div>
                        <div className="w-[68px] h-[80px] relative col-span-1">
                            <Image
                                src={NamadImage}
                                alt="namad"
                                fill={true}
                                sizes="100%"
                                className="rounded-[2px] border-[1px] border-[#000000]"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        </div>
                        <div className="w-[68px] h-[80px] relative col-span-1">
                            <Image
                                src={NamadImage}
                                alt="namad"
                                fill={true}
                                sizes="100%"
                                className="rounded-[2px] border-[1px] border-[#000000]"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        </div>
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
}; export default Footer;