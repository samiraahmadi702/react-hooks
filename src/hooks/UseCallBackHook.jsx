import {useCallback, useEffect, useMemo, useState} from "react";

const List = ({getItems}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
            setItems(getItems);
            console.log("update items...");
        }, [getItems]
    );
    return items.map((item, index) => <div key={index}>{item}</div>)
};

const UseCallBackHook = () => {
    const [number, setNumber] = useState(1);
    const [coloChange, setColorChange] = useState(false);

    const getItems = useCallback(() => {
            return [number, number + 1, number + 2];
        }, [number]
    )
    const appStyle = useMemo(() => {
        return {
            backgroundColor: coloChange ? "tomato" : "white"
        }
    }, [coloChange])

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
                    <List getItems={getItems}></List>
                </div>
            </div>
        </>
    )
}
export default UseCallBackHook;