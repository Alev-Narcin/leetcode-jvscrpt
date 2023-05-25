import './App.css';
import LongestCommonPrefix from "./solutions/longestCommonPrefix";

function App() {
    return (
        <div className="App">
            <div>
                <button style={{
                    width: "150px",
                    height: "150px",
                    fontSize: '100px',
                    position: "absolute",
                    top: "40%",
                    transform: "translate(-100px, -50%)",
                }}>
                    {/*<IsValidTo value={"[{]}]"}/>*/}
                    {/*<RomanToInt string={"LVIII"}/>*/}
                    {/*<LongestCommonPrefix value={["flower", "flow", "flight"]}/>*/}
                    <LongestCommonPrefix value={["flower", "flow", "flight"]}/>
                </button>
            </div>
        </div>
    );
}

export default App;
