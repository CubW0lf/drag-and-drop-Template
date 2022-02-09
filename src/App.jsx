import { Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks/Tasks";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Tasks />} />
            </Routes>
        </div>
    );
}

export default App;
