import { BounceLoader } from "react-spinners";


export const Loader = () => {
    return (
        <div className="my-12">
            <BounceLoader
                color="#085b9c"
                size={"5rem"}
                className="mx-auto"
                speedMultiplier={1.5}
            />
        </div>
    )
};