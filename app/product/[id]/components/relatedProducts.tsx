import { RelatedProductType } from "@/app/product/types";
import OceanIcon from "@/components/icons/product/ocean";
import DesktopProduct from "@/app/components/desktopProduct";
import { FC } from "react";

const RelatedProducts: FC<{ products: RelatedProductType[] }> = ({ products }) => {

    return (
        <div className="my-12">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-[8px]">
                    <div className="size-[40px]">
                        <OceanIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-bold text-[24px]">محصولات مرتبط</p>
                </div>
                <div className="w-[70%] bg-[#E9E9E9] h-[1px]"></div>
                <p className="text-[#2196F3] text-[16px]">مشاهده بیشتر</p>
            </div>
            <div className="my-6 grid grid-cols-4 gap-[24px]">
                {
                    products.map((product, index) => {
                        return (
                            <DesktopProduct
                                price={product.price}
                                score={product.rating}
                                slug={product.slug}
                                summary={product.summary}
                                title={product.title}
                                image={product.index_image?.url}
                                key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}; export default RelatedProducts;