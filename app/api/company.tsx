import Api from "@/utils/api"


export const GetCompany = async () => {
    const result = await Api.get("/current-company/").then(
        (response) => response.data,
    );

    return result;
}