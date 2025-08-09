import { BounceLoader } from "react-spinners";


export const Loader = () => {
    return (
        <BounceLoader
            color="#085b9c"
            size={"5rem"}
            className="mx-auto"
            speedMultiplier={1.5}
        />
    )
};