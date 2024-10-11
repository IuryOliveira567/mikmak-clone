import logo from '../assets/images/logo-MikMak_white.svg';

function NavBar() {

  function animateBar(status: boolean, mMenu: HTMLDivElement): void {
    if (status) {
      mMenu.classList.toggle("animate-bar");
    } else {
      mMenu.classList.remove("animate-bar");
    }
  }

  function showMobileMenu(event: any) {
    const subMenu = document.querySelector("ul.nav") as HTMLUListElement;
    subMenu?.classList.toggle("active");

    const mobileMenu = document.getElementsByClassName("mobile-menu")[0] as HTMLDivElement;
    animateBar(subMenu.classList.contains("active"), mobileMenu);
  }

  return (
    <div className="nav-bar d-flex align-items-center justify-content-center">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="MikMak white logo" width="120" height="80" />
        </a>
      </div>
      <ul className="nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Platform</a>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <div>
                <strong><a className="nav-link" href="#">Platform Overview</a></strong>
                <span>eCommerce Acceleration for Multichannel Brands</span>
              </div>
            </li>
            <li className="dropdown-item">
              <div>
                <strong><a className="nav-link" href="#">MikMak Insights</a></strong>
                <span>Multichannel eCommerce Analytics</span>
              </div>
            </li>
            <li className="dropdown-item">
              <div>
                <strong><a className="nav-link" href="#">MikMak Commerce</a></strong>
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
            <li><a className="dropdown-item" href="#">Case Studies</a></li>
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
      <div className="demo-sch">
        <a className="nav-link" href="#">Schedule Demo</a>
      </div>
      <div className="mobile-menu" onClick={showMobileMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  )
}

export default NavBar;