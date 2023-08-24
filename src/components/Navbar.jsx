import {NavLink} from "react-router-dom"
import "../styles/Navbar.css"
import logo from "../assets/logo-hp.svg"
import cart from "../assets/cart.svg"

function Navbar () {
    return(

        <nav className="navbar">
            <div className="logo">
                <img className="logo-img" src={logo} alt="" />
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
                <img className="cart-img" src={cart} alt="" />
            </div>

        </nav>

    )
}

export default Navbar;