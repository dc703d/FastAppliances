import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HeadingBox from "./components/HeadingBox/HeadingBox";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Nav />
                <Routes>
                    <Route
                        path="/FastAppliances/"
                        element={
                            <>
                                <HeadingBox />
                                <Services />
                            </>
                        }
                    />
                </Routes>
                <Footer />
            </>
        </BrowserRouter>
    );
};

export default App;
