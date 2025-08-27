import { Outlet, NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
export default function DefaultLayout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-fixed-transparent">
                <div className="container">
                    <NavLink className="nav-link" to="/"><h2>BOOROAD</h2></NavLink>
                    <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Travel">Travel</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Aboutus">About Us</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
            <Outlet />
            <Footer/>
        </>
    );
}