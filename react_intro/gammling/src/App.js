import Navbar from "./Navbar"

import Layout from "./layout"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={(<>hjmemememememem</>)} />
                    <Route path="registrer" element={(<>hjmemememememem</>)} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
