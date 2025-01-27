import './Footer.css'
import networks from '../assets/facebook instagram twitter linkedin.png'

const Footer=()=>{
    return (
        <div className="footer">
            <div >
                <div className='leftInner'>
                    <h4>YOUR LOGO</h4>
                    <p>We earned a reputation of being good at what we do.
Let us take your online shop to new dimension in 
success!</p>
                </div>
                <div>
                    <p>location
                    Comilla, Bangladesh 3500</p>
                    <p>kawsarahmed0210@gmail.com
                        <hr />
                    01647470457</p>
                    <img src={networks} alt="networks" />
                </div>
            </div>
            <div className='rightInner'>
                <h4>RECIVE EMAIL UPDATES</h4>
                <input type="text" placeholder='Your Email Address JOIN'/>
                <div className='footerListContainer'>
                <div className='footerList'>
                    <h5>SHOP</h5>
                    <ul>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Collection</a></li>
                        <li><a href="">Outlet</a></li>
                        <li><a href="">Lookbook</a></li>
                    </ul>
                </div>
                <div className='footerList'>
                    <h5>HELP</h5>
                    <ul>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Privecy Policy</a></li>
                        <li><a href="">Tearms and conditions</a></li>
                        <li><a href="">Return and Exchanges</a></li>
                    </ul>
                </div>
                <div className='footerList'>
                    <h5>ABOUT</h5>
                    <ul>
                        <li><a href="">Journal</a></li>
                        <li><a href="">Our Story</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Store Location</a></li>
                    </ul>
                </div>
                </div>
               
            </div>
        
        </div>
    )
}

export default Footer