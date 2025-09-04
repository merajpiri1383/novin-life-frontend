"use client"
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

import { GetProductDetail } from "@/app/api/product";

const ProductDetail = dynamic(() => import("@/app/product/[id]/components/productDetail"), { ssr: true });
const ProductInfo = dynamic(() => import("@/app/product/[id]/components/productInfo"), { ssr: true });
const RelatedProducts = dynamic(() => import("@/app/product/[id]/components/relatedProducts"), { ssr: true });

const Page = () => {

    const params: { id: string } = useParams();

    const { data, isPending } = useQuery({
        queryKey: ["GetProductDetail"],
        queryFn: () => GetProductDetail(params.id)
    });

    return (
        <div className="mx-[80px] mb-[40px] [direction:rtl]">
            {
                <ProductDetail
                    {...data?.output?.product}
                />
            }

            <ProductInfo />

            {
                data?.output?.related_products && <RelatedProducts
                    products={data.output.related_products}
                />
            }
        </div>
    )
}; export default Page;