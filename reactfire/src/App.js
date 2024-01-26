import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Home from "./Home";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}
