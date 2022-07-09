import {useEffect, useState, useMemo} from "react";

const superLowFunction = (num) => {
    console.log("Super slow function is running...");
    let count = 0;
    while (count <= 1000000) {
        count++;
    }
    return num * 2;
}

const UseMemoHook = () => {

    const [number, setNumber] = useState(0);
    const [colorChange, setColorChange] = useState(false);

    const doubleNumber = useMemo(() => superLowFunction(number),
        [number]);

    const appStyle = useMemo(() => {
        return {backgroundColor: colorChange ? "tomato" : "white"}
    }, [colorChange])

    useEffect(() => {
        console.log("background color");
    }, [appStyle])

    return (
        <>
            <div style={appStyle} className="mx-auto mt-5 d-grid gap-3 w-50">
                <h5 className="alert alert-primary text-center">
                    useMemo hook
                </h5>
                <input
                    type="number"
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="please enter a number"
                />
                <button type="button"
                        className="btn btn-info btn-block"
                        onClick={() =>
                            setColorChange((prevColorChange) => !prevColorChange)}
                >
                    change color
                </button>
                <div style={appStyle}
                     className="text-center mx-auto">
                    <p className="alert alert-warning">
                        {`the number is ${doubleNumber}`}
                    </p>
                </div>
            </div>
        </>
    )
}
export default UseMemoHook;