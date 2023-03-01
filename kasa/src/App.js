import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Apropos from "./pages/Apropos/Apropos";
import Header from "./Components/Header/Header";
import Error from "./pages/Error/Error";
import Footer from "./Components/Footer/Footer";
import FicheLogement from "./pages/FicheLogement/FicheLogement"

import "./App.css"

function App () {
    return (
        <div>
            <Header /> 
                <Routes>

                    <Route path="/" element={<Home /> }/>
                    <Route path="/Apropos" element={<Apropos /> }/>
                    <Route path="/logement/:id" element={<FicheLogement />} />
                    <Route path="*" element={<Error /> }/> 

                </Routes>
            <Footer />
        </div>
    )
}
export default App;