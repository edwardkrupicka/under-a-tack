import { NavLink } from "react-router-dom";
import "./Header.scss"
const Header = () => {


  return (
    <header className="header">
      <h1>Under-A-Tack</h1>
      <div className="button-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </header>
  )

}



export default Header;