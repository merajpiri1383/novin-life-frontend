"use client"
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { GetCartIndex } from "@/api/cart";
import useDevice from "@/hooks/useDevice";

const Desktop = dynamic(() => import("@/app/cart/components/desktop"), { ssr: false });
const Mobile = dynamic(() => import("@/app/cart/components/mobile"), { ssr: false });

const Page = () => {

    const device = useDevice();
    const { data, isPending } = useQuery({
        queryKey: ["cart"],
        queryFn: GetCartIndex,
    });

    console.log(data);
    console.log(isPending);

    return (
        <>
            {
                device === "desktop" ?
                    <Desktop /> :
                    <Mobile />
            }
        </>
    )
}; export default Page;