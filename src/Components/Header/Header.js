import { Link, NavLink } from "react-router-dom";
import "./Header.scss"

const Header = () => {


  return (
    <header className="header">
      <Link to='/' className='title-link' ><h1 className='title' >under a tack!</h1></Link>
      <div className="button-container">
        <NavLink to='/' className='nav-link' ><img className='home-icon' src='https://www.svgrepo.com/show/334004/home.svg' alt='home.svg' /></NavLink>
        <NavLink to='/favorites' className='nav-link' ><img className='fav-icon' src='https://www.svgrepo.com/show/333996/heart.svg' alt='fav.svg' /></NavLink>
        <NavLink to='/cart' className='nav-link' ><img className='cart-icon' src='https://www.svgrepo.com/show/333784/cart-alt.svg' alt='cart.svg' /></NavLink>
      </div>
    </header>
  )

}



export default Header;