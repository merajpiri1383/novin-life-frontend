"use client"
import dynamic from "next/dynamic";
import useDevice from "@/hooks/useDevice";
import "@/components/footer/styles.css";

const FooterDesktop = dynamic(() => import("@/components/footer/Desktop"),{ssr : true});
const FooterMobile = dynamic(() => import("@/components/footer/mobile"),{ssr : false});

export type GroupLinkType = {
    title: string,
    items: {
        text: string,
        link?: string,
    }[],
}

const Footer = () => {

    const device = useDevice();

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
        <>
        {
            device === "desktop" ?
            <FooterDesktop groupLinks={groupLinks} /> : 
            <FooterMobile groupLinks={groupLinks} />
        }
        </>
    )
}; export default Footer