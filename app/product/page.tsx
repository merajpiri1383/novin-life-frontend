"use client"
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import useDevice from "@/hooks/useDevice";
import { GetProductFilter } from "@/api/products";
import { ProductsFilterResponseType } from "@/app/product/types";
const Desktop = dynamic(() => import("@/app/product/components/desktop"), { ssr: false });
const Mobile = dynamic(() => import("@/app/product/components/mobile"), { ssr: false });



const Page = () => {

    const device = useDevice();
    const { data } = useQuery<{status : boolean , output : ProductsFilterResponseType}>({
        queryKey : ["products"],
        queryFn : GetProductFilter,
    });

    return (
        <>
            {
                device === "desktop" ?
                    <Desktop products={data?.output.products} /> :
                    <Mobile products={data?.output.products} />
            }
        </>
    )
}; export default Page;