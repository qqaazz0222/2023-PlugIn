import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
//레이아웃
import RootLayout from "./Layouts/RootLayout";
// 화면
import Main from "./Pages/Main";
import Api from "./Pages/Api";
import { SignIn, SignUp } from "./Pages/Sign";
import SignLayout from "./Layouts/SignLayout";
import Loading from "./Components/Loading";

function App() {
    const isLoading = useSelector((state) => state.isLoading);
    return (
        <div id="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<RootLayout />}>
                        <Route path="/" element={<Main />} />
                        <Route path="/api" element={<Api />} />
                    </Route>
                    <Route element={<SignLayout />}>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Route>
                    <Route path="/*" element={<Main />} />
                </Routes>
            </BrowserRouter>
            {isLoading ? <Loading /> : <></>}
        </div>
    );
}

export default App;
