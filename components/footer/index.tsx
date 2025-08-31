"use client"
import dynamic from "next/dynamic";
import useDevice from "@/hooks/useDevice";
import "@/components/footer/styles.css";
import { useCompanyStore } from "@/lib/store/company";

const FooterDesktop = dynamic(() => import("@/components/footer/Desktop"), { ssr: true });
const FooterMobile = dynamic(() => import("@/components/footer/mobile"), { ssr: false });

export type GroupLinkType = {
    title: string,
    items: {
        title: string,
        link?: string,
    }[],
}

const Footer = () => {

    const device = useDevice();

    const { footer } = useCompanyStore();

    return (
        <>
            {
                footer  && device === "desktop" ?
                    <FooterDesktop {...footer} /> :
                    <FooterMobile {...footer} />
            }
        </>
    )
}; export default Footer