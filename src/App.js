import './App.css';
import SearchInsertSol from "./solutions/search-insert";

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
                    {/*<LongestCommonPrefix value={["flower", "flow", "flight"]}/>*/}
                    {/*<RemoveDuplicatesSol arrs={[1, 2, 3, 3, 4, 4, 4, 5, 6]}/>*/}
                    {/*<RemoveElementSol param1={[1, 2, 3, 3, 4, 4, 4, 5, 6]} param2={3}/>*/}
                    {/*<FirstOccureInHaystackSol haystack="Sadbutsad" needle="sad"/>*/}
                    {/*<SearchInsertSol nums={[1, 2, 3, 6, 9]} target={7}/>*/}

                </button>
            </div>
        </div>
    );
}

export default App;
