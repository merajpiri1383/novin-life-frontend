import Api from "@/utils/api";


export const GetCartIndex = async () => {
    const result = await Api.get("/cart/").then(
        (response) => response.data,
    );
    return result;
};



export const UpdateCartProductCount = async ({id , quantity} : {
    quantity: number,
    id : number,
}) => {
    const result = await Api.put("/cart/items/" + id , { quantity }).then(
        (response) => response.data,
    );
    return result;
}


export const RemoveItemCartProduct = async (id : number) => {
    const result = await Api.delete("cart/items/" + id).then(
        (response) => response.data,
    );
    return result;
};