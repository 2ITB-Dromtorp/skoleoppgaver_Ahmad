import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div id="main">
                <nav>
                    <div id="nav_icon">🗿</div>
                    <ul id="nav_list">
                        <li className="nav_li">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav_li">
                            <Link to="/products">Products</Link>
                        </li>
                        <li className="nav_li">
                            <Link to="/">Help</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
                
            </div>
        </>
    );
}

export default Layout;