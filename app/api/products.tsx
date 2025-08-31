import Api from "@/utils/api";

export const GetProductCategories = async () => {
    
    const result = await Api.get("/product-categories/roots/").then(
        (response) => response.data,
    )
    return result;
};