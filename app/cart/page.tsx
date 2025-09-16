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
import useUserStore from "@/lib/store/user";

const Desktop = dynamic(() => import("@/app/cart/components/desktop"), { ssr: false });
const Mobile = dynamic(() => import("@/app/cart/components/mobile"), { ssr: false });

const Page = () => {

    const device = useDevice();
    const router = useRouter();

    const query = useQuery<CartType, AxiosError>({
        queryKey: ["cart"],
        queryFn: GetCartIndex,
    });

    const user = useUserStore((state) => state.user);
    const isHydrated = useUserStore((state) => state.isHydrated);

    useEffect(() => {
        if (isHydrated && !user) {
            router.push("/login");
            toast.info("وارد حساب کاربری خود شوید")
        }

        if (query.error && query.error.response?.status === 401) {
            toast.error("وارد حساب کاربری خود شوید");
            router.push("/login");
        }
    }, [query,user]);

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