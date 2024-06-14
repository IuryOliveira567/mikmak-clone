import rightImg from '../assets/images/right-pane-image.png';

function MainPane() {
  return (
    <div className="main-pane">
      <div className="row h-100">
        <div className="col-md-6 left-pane">
          <div>
            <h1>Growing the world's<br />
              leading brands,<br />
              commerce-first.</h1>
            <p>MikMak provides eCommerce enablement and analytics software<br />
              for multichannel brands to convert global customers.
            </p>
            <a className="learn-btn" href="#">LEARN MORE</a>
          </div>
        </div>
        <div className="col-md-6 right-pane">
          <img src={ rightImg } alt="MikMak design image" width="95%" height="100%"/>
        </div>
      </div>
    </div>
  )
}

export default MainPane;