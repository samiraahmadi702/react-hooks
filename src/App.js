import logo from './logo.svg';
import './App.css';
import UseRefHook from "./hooks/UseRefHook";
import Accordion from "./components/Accordion";
import UseMemoHook from "./hooks/UseMemoHook";
import UseCallBackHook from "./hooks/UseCallBackHook";
import UseReducerHook from "./hooks/UseReducerHook";

function App() {
    return (
        <>
            <div className="container">
                <div className="text-center mt-2">
                    <h2>
                        React Hooks
                    </h2>
                </div>
            </div>
            <hr className="text-danger"/>
            <Accordion title=" useRef hook example"
                       heading="headingOne">
                <UseRefHook/>
            </Accordion>
            <hr className="text-primary"/>
            <Accordion title="useMemo hook example"
                       heading="headingTwo">
                <UseMemoHook/>
            </Accordion>
            <hr className="text-success"/>
            <Accordion title="useCallBack hook example"
                       heading="headingThree">
                <UseCallBackHook/>
            </Accordion>
            <hr className="text-success"/>
            <Accordion title="useReducer hook example"
                       heading="headingFour">
                <UseReducerHook/>
            </Accordion>
            <hr className="text-success"/>
        </>
    );
}

export default App;
