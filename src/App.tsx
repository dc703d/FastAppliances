import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HeadingBox from "./components/HeadingBox/HeadingBox";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Help from "./components/Help/Help";
import FAQ from "./components/HelpComponents/FAQ";

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
                                <Reviews />
                            </>
                        }
                    />
                    <Route
                        path="/FastAppliances/aboutus"
                        element={
                            <>
                                <AboutUs />
                                <Reviews />
                            </>
                        }
                    />
                    <Route
                        path="/FastAppliances/contact"
                        element={
                            <>
                                <Contact />
                            </>
                        }
                    />
                    <Route
                        path="/FastAppliances/help"
                        element={
                            <>
                                <Help />
                            </>
                        }
                    />
                    <Route
                        path="/FastAppliances/book"
                        element={
                            <>
                                <Contact />
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
