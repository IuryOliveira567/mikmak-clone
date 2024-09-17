import demoImage from "../assets/images/DemoPaneImage.webp"

function DemoPane() {
  return(
    <div className="row demo-pn">
      <div className="col-md-6 demo-left">
        <img src={ demoImage } alt="Demo Image"/>
      </div>
      <div className="col-md-6 demo-right">
        <h1>Ready to grow your brand,<br/>
         commerce-first with<br/> MikMak?</h1>
        <a href="#">Book a Demo</a>
      </div>
    </div>
  )
}

export default DemoPane;