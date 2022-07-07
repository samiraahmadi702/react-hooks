import {useRef, useEffect, useState} from "react";

const UseRefHook = () => {

    const inputRef = useRef(null);
    const [name, setName] = useState("");
    const preName = useRef("");
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        // inputRef.current.placeholder = " please enter your name";
        // inputRef.current.className = "bg-warning";
    })

    useEffect(() => {
        preName.current = name;
    }, [name])


    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <div className="d-grid w-50 gap-2 m-auto">
                <h5 className="alert alert-success text-center">
                    useRef Hook
                </h5>
                <p>{`your name is ${name}`}</p>
                <p>{`your last name is ${preName.current}`}</p>
                <p>{`render count is ${renderCount.current}`}</p>
                <input type="text"
                       ref={inputRef}
                       value={name}
                       onChange={e => {
                           setName(e.target.value)
                       }
                       }
                       className="form-control"
                       placeholder="Enter a name"/>
                <button
                    onClick={focusInput}
                    className="btn btn-primary btn-block mt-2">
                    submit
                </button>
            </div>

        </>
    )
}
export default UseRefHook;