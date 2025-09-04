import Api from "@/utils/api";


export const GetProductDetail = async (slug : string) => {
    const result = await Api.get("/website/detailProduct?productSlug=" + slug).then(
        (response) => response.data,
    );
    return result;
};


export const AddProductToCart = async (data : {
    product_id : number,
    quantity : number,
})  => {
    
    const result = await Api.post("/cart/items/",data).then(
        (response) => response.data,
    );

    return result;
};