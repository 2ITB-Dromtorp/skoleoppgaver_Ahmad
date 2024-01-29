import { BrowserRouter, Routes, Route } from 'react-router-dom';
                    
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index component={<Home />} />
                    <Route path="/about" component={<About />} />
                    <Route path="/contact" component={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

