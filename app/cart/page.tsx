"use client"
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { GetCartIndex } from "@/api/cart";
import useDevice from "@/hooks/useDevice";
import { CartType } from "@/app/cart/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Desktop = dynamic(() => import("@/app/cart/components/desktop"), { ssr: false });
const Mobile = dynamic(() => import("@/app/cart/components/mobile"), { ssr: false });

const Page = () => {

    const device = useDevice();
    const router = useRouter();

    const query = useQuery<CartType, AxiosError>({
        queryKey: ["cart"],
        queryFn: GetCartIndex,
    });

    useEffect(() => {
        if (query.error && query.error.response?.status === 401) {
            toast.error("وارد حساب کاربری خود شوید");
            router.push("/login");
        }
    }, [query,router]);

    return (
        <>
            {
                device === "desktop" ?
                    <Desktop
                        isPending={query.isPending}
                        cart_products={query.data?.items}
                        summary={query.data?.summary}
                    /> :
                    <Mobile
                        isPending={query.isPending}
                        cart_products={query.data?.items}
                        summary={query.data?.summary}
                    />
            }
        </>
    )
}; export default Page;