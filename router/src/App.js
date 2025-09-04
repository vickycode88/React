import Navbar from "./navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
    return(

        <>
        <div> Welcome</div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>

            <Routes>
                <Route path="/about" element={<About/>}></Route>
            </Routes>

            <Routes>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </Router>
        </>
    );
}

export default App;