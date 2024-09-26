import mikmakLogo from '../assets/images/logo-MikMak_white.svg';
import logo1211 from '../assets/images/1211-hl-icon.webp';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2 info">
            <img src={mikmakLogo} width={140} height={140} />
            <ul>
              <strong>General Enquiries</strong>
              <li>1-844-645-6251</li>
              <li>hola@mikmak.com</li>
            </ul><br />
            <ul>
              <strong>Worldwide Corporate Headquarters</strong>
              <li>
                <address>
                  116 W Houston Street<br />
                  Floor 2<br />
                  New York, NY 10012<br />
                  USA<br />
                </address>
              </li>
            </ul>
            <ul>
              <strong>United Kingdom</strong>
              <li>
                <address>
                  1st Floor West<br />
                  Davidson House Forbury Square<br />
                  Reading<br />
                  Berkshire<br />
                  RG1 3EU<br />
                </address>
              </li>
            </ul>
            <ul>
              <strong>France</strong>
              <li>
                <address>
                  60 Rue du Faubourg Poissonnière<br />
                  75010<br />
                  Paris, France<br />
                </address>
              </li>
            </ul>
          </div>
          <div className="col-md-5 center-md">
            <div className="fast-links-footer">
              <div>
                <ul>
                  <h4>Platform</h4>
                  <li><a href="#">Platform Overview</a></li>
                  <li><a href="#">MikMak Insights</a></li>
                  <li><a href="#">MikMak Commerce</a></li>
                </ul>
              </div>
              <div>
                <ul>
                  <h4>Partnerships</h4>
                  <li><a href="#">Partners</a></li>
                  <li><a href="#">Retailer Partnerships</a></li>
                </ul>
              </div>
              <div>
                <ul>
                  <h4>Resources</h4>
                  <li><a href="#">Guides & Research</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Events</a></li>
                  <li><a href="#">Newsletter</a></li>
                  <li><a href="#">Podcast</a></li>
                </ul>
              </div>
              <div>
                <ul>
                  <h4>About</h4>
                  <li><a href="#">About MikMak</a></li>
                  <li><a href="#">Partners</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="row user-act">
              <hr/>
              <div className="col-md-6 social-media">
                <h5>Join our community</h5>
                <ul>
                  <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
              <div className="col-md-6 subscribe-form">
                <h5>Stay connected</h5>
                <form>
                  <div className="input-name">
                    <input type="text" placeholder="First Name *"/>
                    <input type="text" placeholder="Last Name *"/>
                  </div>
                  <input type="email" placeholder="Email Address *"/>
                  <input type="text" placeholder="Company"/>
                  <input type="text" placeholder="Brand Name"/>
                  <div className="mb-1 w-100"><input id="us-news" type="checkbox"/><label htmlFor="us-news">EU Newsletter Opt-In</label></div>
                  <div className="w-100"><input type="checkbox"/><label>US Newsleter Opt-In</label></div>
                  <button className="btn" type="submit">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="bottom-md">
              <hr/>
                <ul>
                  <li><a href="#">Copyright © 2024 MikMak. All rights reserved</a></li>
                  <li><a href="#">|</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Security</a></li>
                </ul>
                <div className="d-flex justify-content-evenly">
                  <a href="#">Do Not Sell My Personal Information</a>
                  <a href="#"><img src={ logo1211 }/>Your Privacy Choices/Cookie Settings</a>
                </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;