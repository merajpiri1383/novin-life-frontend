import Api from "@/utils/api";

export const GetProductCategories = async () => {
    
    const result = await Api.get("/post-categories/").then(
        (response) => response.data,
    )
    return result;
};