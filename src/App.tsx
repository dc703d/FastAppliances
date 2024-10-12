import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HeadingBox from "./components/HeadingBox/HeadingBox";

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Nav />
                <Routes>
                    <Route path="/FastAppliances/" element={<HeadingBox />} />
                </Routes>
                {/* <Footer /> */}
            </>
        </BrowserRouter>
    );
};

export default App;
