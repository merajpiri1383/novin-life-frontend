import dynamic from "next/dynamic";
const ProductDetail = dynamic(() => import("@/app/product/[id]/components/productDetail"), { ssr: true });
const ProductInfo = dynamic(() => import("@/app/product/[id]/components/productInfo"), { ssr: true });
const RelatedProducts = dynamic(() => import("@/app/product/[id]/components/relatedProducts"), { ssr: true });

const Page = () => {

    return (
        <div className="mx-[80px] mb-[40px] [direction:rtl]">
            <ProductDetail />
            <ProductInfo />
            <RelatedProducts />
        </div>
    )
}; export default Page;