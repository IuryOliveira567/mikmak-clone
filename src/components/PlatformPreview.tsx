import PreviewCard from "./PreviewCard";
import HomePlatformImg from '../assets/images/HomepagePlatformInsightss.webp';
import CommerceV2Img from '../assets/images/Commerce-v2.webp';

function PlatformPreview() {

  const card1Text = `
    Multichannel eCommerce analytics help brands
    develop and apply eCommerce strategies that work,
    with a complete understanding of consumers' online
    behavior and preferences
  `
  const card2Text = `
    A seamless path to checkout at any retailer, from
    anywhere across your entire media mix, including
    social media, retail media, brand websites, search,
    CTV, display, QR codes, and more.
  `

  return (
    <div>
      <h1>The MikMak Platform</h1>
      <div className="show-on-scroll row">
        <div className="col-md-6">
          <PreviewCard
            img={ HomePlatformImg }
            buttonText="MikMak Insights"
            title="Exclusive First-Party Consumer Insights"
            text={card1Text}
            backgroundColor="#00A6A4"
            textColor="#ffff"
            hoverBackgroundColor="#084A49"
          />
        </div>
        <div className="col-md-6">
          <PreviewCard
            img={CommerceV2Img}
            buttonText="MikMak Commerce"
            title="Premium Consumer Shopping Experiences"
            text={card2Text}
            backgroundColor="#BA3CAD"
            textColor="#ffff"
            hoverBackgroundColor="#66215F"
          />
        </div>
      </div>
    </div>
  )
}

export default PlatformPreview;