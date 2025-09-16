"use client"
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useDevice from "@/hooks/useDevice";
import useUserStore from "@/lib/store/user";
import { toast } from "react-toastify";
const Desktop = dynamic(() => import("@/app/profile/components/desktop"), { ssr: false });
const Mobile = dynamic(() => import("@/app/profile/components/mobile"), { ssr: false });

const Page = () => {

    const device = useDevice();
    const router = useRouter();
    const user = useUserStore((state) => state.user);
    const isHydrated = useUserStore((state) => state.isHydrated);

    useEffect(() => {
        if (isHydrated && !user) {
            router.push("/login");
            toast.info("وارد حساب کاربری خود شوید")
        }
    },[user]);

    return (
        <>
            {
                device === "mobile" ?
                    <Mobile /> :
                    <Desktop />
            }
        </>
    )
}; export default Page;