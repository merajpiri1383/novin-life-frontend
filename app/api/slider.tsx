import Api from "@/utils/api";


export const getSliders = async () => {
    const result = await Api.get("/sliders/all/").then(
        (response) => response.data,
    );
    return result;
}