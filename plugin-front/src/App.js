import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
//레이아웃
import RootLayout from "./Layouts/RootLayout";
// 화면
import Main from "./Pages/Main";

function App() {
    return (
        <div id="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<RootLayout />}>
                        <Route path="/" element={<Main />} />
                    </Route>
                    <Route path="/*" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
