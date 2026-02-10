import "../../Styles/Footer.css";


const Footer = () => {
  return (
    <footer className="footer m-4">
      <div className="footer-container">

        {/* Store Info */}
        <div className="footer-col">
          <h4 className="text-light">ROZINA - FLAGSHIP STORE, MUMBAI</h4>
          <p>
            77/A Hill Road, Next to McDonald's,<br />
            Bandra West, Mumbai – 400050,<br />
            Maharashtra
          </p>
          <p>Email: rozinavishram1@gmail.com</p>
          <p>Phone: +91 96193 36168</p>
        </div>

        {/* Categories */}
        <div className="footer-col">
          <h4 className="text-light">CATEGORIES</h4>
          <ul>
            <li>New arrivals</li>
            <li>Prints by Rozina Vishraam</li>
            <li>Anarkalis</li>
            <li>Jackets</li>
            <li>Kurta Set</li>
            <li>Pallazos</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div className="footer-col">
          <h4 className="text-light">CUSTOMER SERVICES</h4>
          <ul>
            <li>Sign In / Register</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="footer-col">
          <h4 className="text-light">SUBSCRIBE TO OUR EMAILS</h4>
          <input type="email" placeholder="Email" />
          <button >Subscribe</button>

          <div className="social-icons">
            
          </div>
        </div>

      </div>
      <hr/>
       <center> &copy;<span className="text-light">All Rights Are Reserved</span></center>

    </footer>
  );
};

export default Footer;
