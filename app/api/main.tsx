import Api from "@/utils/api";


export const GetMainPage = async () => {
    const result = await Api.get("/website/mainPage/").then(
        (response) => response.data,
    );
    return result;
};