import './Header.css'
import logo from '../assets/YOUR LOGO.png'
import cart from '../assets/search HEART shopping-cart.png'

function Header(){
    return <div className='header'>
        <img className='logo' src={logo} alt="logo" />
        <ul className='listItem'>
            <li>HOME</li>
            <li>SHOP</li>
            <li>LOOKBOOK</li>
            <li>FEATURES</li>
            <li>PAGES</li>
            <li>BLOG</li>
        </ul>
        <img  className='cart' src={cart} alt="cart" />
    </div>
}
 export default Header