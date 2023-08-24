import {NavLink} from "react-router-dom"
import "../styles/Navbar.css"

function Navbar () {
    return(

        <nav className="navbar">
            <div className="logo">
                LOGO
            </div>
            <ul>
                <li >
                <NavLink className={({isActive})=> isActive ? "active": ""} style={{textDecoration: 'none'}} to="/">Home</NavLink>
                </li>
                <li>
                <NavLink className={({isActive})=> isActive ? "active": ""} style={{textDecoration: 'none'}} to="/">Products</NavLink>
                </li>
                <li>
                <NavLink className={({isActive})=> isActive ? "active": ""} style={{textDecoration: 'none'}} to="/">About us</NavLink>
                </li>
            </ul>
            <div className="cart">
                CART
            </div>

        </nav>

    )
}

export default Navbar;