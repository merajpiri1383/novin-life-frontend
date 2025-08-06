import dynamic from "next/dynamic";
import { Slide } from "react-awesome-reveal";
const CartProduct = dynamic(() => import("@/app/cart/components/cartProduct"), { ssr: true });
const Cost = dynamic(() => import("@/app/cart/components/cost"),{ssr : true});

const CartDesktop = () => {

    const cartProducts = [1, 2, 3, 4];

    return (
        <div className="px-[80px] mb-12 [direction:rtl]">
            <p className="text-[#3D3D3D] text-[32px] font-bold">صورت حساب</p>
            <div className="grid grid-cols-3 gap-[50px] my-6 items-start">
                <div className="col-span-2 grid grid-cols-1 gap-[25px]">
                    {
                        cartProducts.map((cartProduct, index) => {
                            return (
                                <CartProduct key={index} />
                            )
                        })
                    }
                </div>
                <div className="col-span-1 sticky top-10">
                    <Slide direction="left" duration={400} triggerOnce>
                        <Cost />
                    </Slide>
                </div>
            </div>
        </div>
    )
}; export default CartDesktop;