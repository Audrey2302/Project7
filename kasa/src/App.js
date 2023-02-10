import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Survey from "./pages/Survey/Survey";
import Header from "./Components/Header/Header";
import Error from "./pages/Error/Error";
import Footer from "./Components/Footer/Footer";


function App () {
    return (
        <div className="App">
            <Header /> 

                <Routes>

                    <Route path="/" element={<Home /> }/>
                    <Route path="/survey" element={<Survey /> }/>
                    <Route path="*" element={<Error /> }/> 

                </Routes>
            <Footer />
        </div>
    )
}

export default App;