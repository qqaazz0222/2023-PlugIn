import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
//레이아웃
import RootLayout from "./Layouts/RootLayout";
// 화면
import Main from "./Pages/Main";
import { SignIn, SignUp } from "./Pages/Sign";
import SignLayout from "./Layouts/SignLayout";

function App() {
    return (
        <div id="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<RootLayout />}>
                        <Route path="/" element={<Main />} />
                    </Route>
                    <Route element={<SignLayout />}>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Route>
                    <Route path="/*" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
