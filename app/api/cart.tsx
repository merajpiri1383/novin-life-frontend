import Api from "@/utils/api";


export const GetCartIndex = async () => {
    const result = await Api.get("/cart/").then(
        (response) => response.data,
    );
    return result;
};
