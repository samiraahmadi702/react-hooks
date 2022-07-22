import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + action.payload}
        case "DECREMENT":
            return {count: state.count - action.payload}
        default:
            return state;
    }
}
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const increment = () => {
        dispatch({type: "INCREMENT", payload: 1})
    }
    const decrement = () => {
        dispatch({type: "DECREMENT", payload: 1})
    }
    return (
        <div className="mx-auto mt-5 d-grid gap-3 w-50">
            <h5 className="alert alert-info text-center">
                useReducer Hook
            </h5>
            <button
                className="btn btn-primary"
                onClick={increment}>
                plus one
            </button>
            <p className="alert alert-warning text-center">
                your count is {" "}
                <span className="badge rounded-pill bg-success">
                    {state.count}
                </span>
            </p>
            <button className="btn btn-danger"
                    onClick={decrement}>
                minus one
            </button>
        </div>
    )
}
export default UseReducerHook;