import OceanIcon from "@/components/icons/product/ocean";
import { Product } from "@/app/components/mostVisit";

const RelatedProducts = () => {

    const products = [1,2,3,4];

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
                    products.map((product) => {
                        return (
                            <Product index={product} key={product} />
                        )
                    })
                }
            </div>
        </div>
    )
};export default RelatedProducts;