"use client"
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { GetProductDetail } from "@/app/api/product";


const MobileDetail = dynamic(() => import("@/app/product/[id]/components/mobileDetail"), { ssr: false });
const ProductInfo = dynamic(() => import("@/app/product/[id]/components/productInfo"),{ssr : false})

const ProductMobile = () => {

    const params: { id: string } = useParams();

    const { data  } = useQuery({
        queryKey: ["GetProductDetail"],
        queryFn: () => GetProductDetail(params.id),
    });

    return (
        <>
            
            <MobileDetail {...data?.output?.product} />
            <ProductInfo />
        </>
    )
}; export default ProductMobile;