"use client"
import dynamic from "next/dynamic";
import useDevice from "@/hooks/useDevice";
const ProductDesktop = dynamic(() => import("@/app/product/[id]/components/desktop"), { ssr: true });
const ProductMobile = dynamic(() => import("@/app/product/[id]/components/mobile"), { ssr: true });



const Page = () => {

    const device = useDevice();

    return (
        <>
            {
                device === "desktop" ?
                    <ProductDesktop /> :
                    <ProductMobile />
            }
        </>
    )
}; export default Page;