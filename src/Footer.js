import './Footer.css';
import 'boxicons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer () {
    return (

        <div className='footer'>

                 <div className="brand-section">

                </div>
                <div className="footer-container">
               <div className="footer-columns">
                    <div className='brand-icon'>
                        <box-icon type="solid" name="cart" color='white'></box-icon>
                    </div>
                  
                    <div className="brand-text">
                        <p className='brand-name2'>Ecwid</p>
                        <p className='brand-slogan2'>by Lightspeed</p>
                    </div>
            <div className="footer-column">
                <h3>SELL ONLINE</h3>
                <ul>
                    <li><a href="#">Sell Everywhere</a></li>
                    <li><a href="#">Sell on Social</a></li>
                    <li><a href="#">Sell on Instagram</a></li>
                    <li><a href="#">Sell on TikTok</a></li>
                    <li><a href="#">Sell on Facebook</a></li>
                    <li><a href="#">Sell on Google</a></li>
                    <li><a href="#">Sell on Amazon</a></li>
                    <li><a href="#">Sell on WhatsApp</a></li>
                    <li><a href="#">Sell on Pinterest</a></li>
                    <li><a href="#">ShopApp</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>PRODUCT</h3>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Watch Demo</a></li>
                    <li><a href="#">Buy Now Button</a></li>
                    <li><a href="#">Ecommerce Hosting</a></li>
                    <li><a href="#">Point-of-Sale</a></li>
                    <li><a href="#">Digital Products</a></li>
                    <li><a href="#">Subscriptions</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>FOR YOUR BUSINESS</h3>
                <ul>
                    <li><a href="#">Ecommerce Website</a></li>
                    <li><a href="#">WordPress Ecommerce</a></li>
                    <li><a href="#">Joomla Ecommerce</a></li>
                    <li><a href="#">Squarespace Ecommerce</a></li>
                    <li><a href="#">Weebly Ecommerce</a></li>
                    <li><a href="#">Wix Ecommerce</a></li>
                    <li><a href="#">Etsy Ecommerce</a></li>
                    <li><a href="#">Add Online Store</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>PARTNERS</h3>
                <ul>
                    <li><a href="#">Reseller Program</a></li>
                    <li><a href="#">Affiliate Program</a></li>
                    <li><a href="#">White Label Solutions</a></li>
                    <li><a href="#">Referral Program</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">App Market</a></li>
                    <li><a href="#">API Documentation</a></li>
                    <li><a href="#">Ecwid Experts</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>COMPANY</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Ecwid Blog</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>SUPPORT</h3>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Product Updates</a></li>
                    <li><a href="#">Status Monitor</a></li>
                    <li><a href="#">Contact Support</a></li>
                    <li><a href="#">Free Guides</a></li>
                    <li><a href="#">Ecwid 101</a></li>
                    <li><a href="#">Ecwid Academy</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>LATEST BLOG</h3>
                <ul>
                    <li><a href="#">Getting Started with TikTok for Small Businesses</a></li>
                    <li><a href="#">How to Make your Products More Discoverable on Facebook & Instagram</a></li>
                    <li><a href="#">How to Make Content for Facebook & Instagram to Grow Sales</a></li>
                </ul>
            </div>
            </div>
    </div>
<div className='socialIcons'>
    <box-icon name='notepad' type='solid' color='white'></box-icon>
    <box-icon name='microphone' type='solid' color='white'></box-icon>
    <box-icon type='logo' name='pinterest' color='white'></box-icon>
    <box-icon name='facebook' type='logo' color='white'></box-icon>
    <box-icon name='twitter' type='logo' color='white'></box-icon>
    <box-icon name='instagram-alt' type='logo' color='white'></box-icon>
    <box-icon name='youtube' type='logo' color='white'></box-icon>
</div>
    <div className="footer2">
  <div className="search">
    <input type="search" placeholder="Search" />
  </div>

  <div className="download">
    <div className="download1">
      <box-icon type="logo" name="apple" color="white" size="20px"></box-icon>
      <div className="download-text">
        <span className="logo">Download on the</span>
        <p className="logoText">App Store</p>
      </div>
    </div>

    <div className="download2">
      <i className="fa-brands fa-google-play"></i>
      <div className="download-text">
        <span className="logo">Get it on</span>
        <p className="logoText">Google Play</p>
      </div>
    </div>
  </div>
</div>



                <hr/>

                <div className='bottomLeft'>
                    <box-icon name='world' color='white'></box-icon>
                    <p>GLOBAL</p>
                </div>

                <div className='bottomRight'>
                    <p>DPA</p>
                    <p>Terms of Service</p>
                    <p>CCPA Notice</p>
                    <p>Copyright Policy</p>
                    <p className='copyright'>&copy; 2021 Ecwid</p>
                </div>
        </div>
    );
}

export default Footer;