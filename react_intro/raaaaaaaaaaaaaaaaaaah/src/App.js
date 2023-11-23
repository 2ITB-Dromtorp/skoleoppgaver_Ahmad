import Navbar from "./pages/navbar";
import Logginn from "./pages/Logginn";
import Home from "./pages/home";
import Kurs from "./pages/kurs";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/logginn" element={<Logginn />} />
                    <Route path="/kurs/:kursId" element={<Kurs />} />
                </Routes>
            </div>
        </>
    );
}

export default App;