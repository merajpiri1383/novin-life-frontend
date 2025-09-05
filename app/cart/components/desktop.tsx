import dynamic from "next/dynamic";
import { FC } from "react";
import { Slide } from "react-awesome-reveal";
import { CartProductType, SummaryType } from "@/app/cart/types";
const CartProduct = dynamic(() => import("@/app/cart/components/cartProduct"), { ssr: true });
const Summary = dynamic(() => import("@/app/cart/components/summary"), { ssr: true });


interface Props {
    cart_products?: CartProductType[],
    isPending: boolean,
    summary?: SummaryType
}

const CartDesktop: FC<Props> = ({ cart_products, summary }) => {

    return (
        <div className="px-[80px] mb-12 [direction:rtl]">
            <p className="text-[#3D3D3D] text-[32px] font-bold">صورت حساب</p>
            <div className="grid grid-cols-3 gap-[50px] my-6 items-start">
                <div className="col-span-2 grid grid-cols-1 gap-[25px]">
                    {
                        cart_products?.map((cartProduct) => {
                            return (
                                <CartProduct
                                    key={cartProduct.id}
                                    {...cartProduct}
                                />
                            )
                        })
                    }
                </div>
                <div className="col-span-1 sticky top-10">
                    <Slide direction="left" duration={400} triggerOnce>
                        {
                            summary && <Summary {...summary} />
                        }
                    </Slide>
                </div>
            </div>
        </div>
    )
}; export default CartDesktop;