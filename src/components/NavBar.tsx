import logo from '../images/logo-MikMak_white.svg';

function NavBar() {
  return (
    <div className="nav-bar d-flex align-items-center justify-content-around">
      <div className="logo">
        <a href="#">
          <img src= { logo } alt="MikMak white logo" width="120" height="80" />
        </a>
      </div>
      <nav>
        <ul className="nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Platform</a>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <div>
                  <strong>Platform Overview</strong>
                  <span>eCommerce Acceleration for Multichannel Brands</span>
                </div>
              </li>
              <li className="dropdown-item">
                <div>
                  <strong>MikMak Insights</strong>
                  <span>Multichannel eCommerce Analytics</span>
                </div>
              </li>
              <li className="dropdown-item">
                <div>
                  <strong>MikMak Commerce</strong>
                  <span>Multi Retail eCommerce Enablement</span>
                </div>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Partnerships</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Partners</a></li>
                <li><a className="dropdown-item" href="#">Retailer Partnerships</a></li>
              </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Resources</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Guides & Research</a></li>
              <li><a className="dropdown-item" href="#">Blog</a></li>
              <li><a className="dropdown-item" href="#">Case Studies</a></li>                <li><a className="dropdown-item" href="#">Blog</a></li>
              <li><a className="dropdown-item" href="#">Events</a></li>
              <li><a className="dropdown-item" href="#">Newsletter</a></li>
              <li><a className="dropdown-item" href="#">Podcast</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">About MikMak</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Company</a></li>
              <li><a className="dropdown-item" href="#">Careers</a></li>
              <li><a className="dropdown-item" href="#">Press</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Login</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">MikMak 2.0</a></li>
              <li><a className="dropdown-item" href="#">MikMak 3.0</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="demo-sch">
        <a className="nav-link" href="#">Schedule Demo</a>
      </div>
    </div>
  )
}

export default NavBar;