import Navbar from "./pages/navbar";
import Logginn from "./pages/Logginn";
import Home from "./pages/home";
import Kurs from "./pages/kurs";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const tempUser = JSON.parse(localStorage.getItem('user'))
        setUser(tempUser);
    }, []);
    console.log(user);

    return (
        <>
            <Navbar user={user} />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/logginn" element={!user ? <Logginn /> : <Navigate to='/' />} />
                    <Route path="/register" element={!user ? <register /> : <Navigate to='/' />} />
                    <Route path="/kurs/:kursId" element={<Kurs />} />
                </Routes>
            </div>
        </>
    );
}

export default App;