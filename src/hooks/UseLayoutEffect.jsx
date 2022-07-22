import {useEffect, useLayoutEffect, useState} from "react";

const UseLayoutEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect : ${count}`);
    }, [count]);
    useLayoutEffect(() => {
        console.log(`useLayoutEffect: ${count}`)
    }, [count])

    return (
        <div className="mx-auto mt-5 d-grid gap-3 w-50">
            <h5 className="alert alert-dark text-center">
                useLayoutEffect
            </h5>
            <button className="btn btn-success"
                    onClick={() => setCount((prevCount) => prevCount + 1)}>
                add one
            </button>
            <p className="alert alert-light text-center">
                count is :{''}
                <span className="badge rounded-pill bg-info">
                    {count}
                </span>
            </p>
        </div>
    )
}
export default UseLayoutEffect;