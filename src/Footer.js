import './Footer.css';
import 'boxicons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer () {
    return (

        <div className='footer'>

                 <div className="brand-section">
                {/* Box-icon for Cart */}
                    <div className='brand-icon'>
                        <box-icon type="solid" name="cart" color='white'></box-icon>
                    </div>

                 {/* Text beside the icon */}
                    <div className="brand-text">
                        <p className='brand-name'>Ecwid</p>
                        <p className='brand-slogan'>by Lightspeed</p>
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