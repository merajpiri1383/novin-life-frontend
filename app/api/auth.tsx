import Api from "@/utils/api";

export const SendOtp = async ({ input }: { input: string }) => {
    const result = await Api.post("/auth/send-otp/", {
        mobile: input,
    }).then(
        (response) => response.data,
    )
    return result;
};



export const VerifyOtp = async ({ mobile, code }: {
    mobile: string,
    code: number,
}) => {
    const result = await Api.post("/auth/verify-otp/", { "mobile": mobile, "code": code }).then(
        (response) => response.data,
    );
    return result;
};