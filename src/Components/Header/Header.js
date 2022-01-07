import { NavLink } from "react-router-dom";
import "./Header.scss"

const Header = () => {


  return (
    <header className="header">
      <h1>under a tack!</h1>
      <div className="button-container">
        <NavLink to='/' className='nav-link' >Home</NavLink>
        <NavLink to='/favorites' className='nav-link' >Favorite</NavLink>
        <NavLink to='/cart' >Cart</NavLink>
      </div>
    </header>
  )

}



export default Header;