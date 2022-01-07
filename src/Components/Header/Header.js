import { NavLink, Link } from "react-router-dom";
import "./Header.scss"

const Header = () => {


  return (
    <header className="header">
      <h1>under a tack!</h1>
      <div className="button-container">
        <NavLink to='/' className='nav-link' >HOME</NavLink>
        <NavLink to='/favorites' className='nav-link' >Favorite</NavLink>
        <button>Cart</button>
      </div>
    </header>
  )

}



export default Header;