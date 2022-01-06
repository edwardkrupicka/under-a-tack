import { NavLink, Link } from "react-router-dom";
import "./Header.scss"
const Header = () => {


  return (
    <header className="header">
      <h1>Under-A-Tack</h1>
      <div className="button-container">
        <button>Home</button>
        <button>Favorite</button>
        <button>Cart</button>
      </div>
    </header>
  )

}



export default Header;