import Api from "@/utils/api"


export const GetCompany = async () => {
    const result = await Api.get("/website/headerAndFooter/").then(
        (response) => response.data,
    );

    return result;
}