import logo from './logo.svg';
import './App.css';
import UseRefHook from "./UseRefHook";

function App() {
    return (
        <>
            <div className="container">
                <div className="text-center mt-2">
                    <h2>
                        react hooks
                    </h2>
                </div>
            </div>
            <div className="text-danger">
                <UseRefHook/>
            </div>
        </>
    );
}

export default App;
