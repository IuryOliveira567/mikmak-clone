import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import facebook from '../assets/images/partners/media/Facebook.svg.webp';
import instagram from '../assets/images/partners/media/Instagram.webp';
import pinterest from '../assets/images/partners/media/Pinterest.webp';
import youtube from '../assets/images/partners/media/Youtube.webp';
import google from '../assets/images/partners/media/Google.webp';
import tiktok from '../assets/images/partners/media/Tiktok.webp';
import twitter from '../assets/images/partners/media/Twitter.webp';
import snapchat from '../assets/images/partners/media/Snapchat.webp';
import verizonMedia from '../assets/images/partners/media/Verizon_Media.svg.webp';
import theTradeDesk from '../assets/images/partners/media/Thetradedesk.webp';
import pandora from '../assets/images/partners/media/Pandora.webp';
import twitch from '../assets/images/partners/media/Twitch.webp';
import hulu from '../assets/images/partners/media/Hulu.webp';

import doordash from '../assets/images/partners/media/Doordash.webp';
import uberEats from '../assets/images/partners/media/UberEats.webp';
import macys from '../assets/images/partners/media/Macys.webp';
import kohls from '../assets/images/partners/media/Kohls.webp';
import sephora from '../assets/images/partners/media/Sephora.webp';
import cvs from '../assets/images/partners/media/Csv.webp';
import petco from '../assets/images/partners/media/Petco.webp';
import ultra from '../assets/images/partners/media/Ulta.webp';
import boots from '../assets/images/partners/media/Boots.webp';
import carrefour from '../assets/images/partners/media/Carrefour.webp';
import costco from '../assets/images/partners/media/FontCostco.webp';
import kroger from '../assets/images/partners/media/Kroger.svg.webp';
import target from '../assets/images/partners/media/Target.webp';
import walmart from '../assets/images/partners/media/Walmart.webp';
import asda from '../assets/images/partners/media/Asda.webp';
import gopuff from '../assets/images/partners/media/Gopuff.webp';
import walgreens from '../assets/images/partners/media/Walgreens.webp';
import bestBuy from '../assets/images/partners/media/Bestbuy.webp';
import tesco from '../assets/images/partners/media/Tesco.webp';
import instacart from '../assets/images/partners/media/Instacart.webp';
import amazon from '../assets/images/partners/media/Amazon.webp';

function MediaPartners() {
  const imageNames1 = [
    { id: 0, name: facebook, alt: "Facebook logo" },
    { id: 1, name: instagram, alt: "Instagram logo" },
    { id: 2, name: pinterest, alt: "Pinterest logo" },
    { id: 3, name: youtube, alt: "Youtube logo" },
    { id: 4, name: google, alt: "Google logo" },
    { id: 5, name: tiktok, alt: "Tiktok logo" },
    { id: 6, name: twitter, alt: "twitter logo" },
    { id: 7, name: snapchat, alt: "SnapChat logo" },
    { id: 8, name: verizonMedia, alt: "Verizon Media logo" },
    { id: 9, name: theTradeDesk, alt: "The trade desk logo" },
    { id: 10, name: pandora, alt: "Pandora logo" },
    { id: 11, name: twitch, alt: "Twitch logo" },
    { id: 12, name: hulu, alt: "Hulu logo" }
  ]

  const imageNames2 = [
    { id: 13, name: doordash, alt: "Doordash logo" },
    { id: 14, name: uberEats, alt: "Uber Eats logo" },
    { id: 15, name: macys, alt: "Macys logo"},
    { id: 16, name: kohls, alt: "Kohls logo" },
    { id: 17, name: sephora, alt: "Sephora logo" },
    { id: 18, name: cvs, alt: "Cvs logo" },
    { id: 19, name: petco, alt: "Petco logo" },
    { id: 20, name: ultra, alt: "Ultra logo" },
    { id: 21, name: boots, alt: "Boots logo" },
    { id: 22, name: carrefour, alt: "Carrefour logo" },
    { id: 23, name: costco, alt: "Costco logo" },
    { id: 24, name: kroger, alt: "Kroger logo" },
    { id: 25, name: target, alt: "Target logo" },
    { id: 26, name: walmart, alt: "Walmart logo" },
    { id: 27, name: asda, alt: "Asda logo" },
    { id: 28, name: gopuff, alt: "Gopuff logo" },
    { id: 29, name: walgreens, alt: "Walgreens logo" },
    { id: 30, name: bestBuy, alt: "BestBuy logo" },
    { id: 31, name: tesco, alt: "Tesco logo" },
    { id: 32, name: instacart, alt: "Instacart logo" },
    { id: 33, name: amazon, alt: "Amazon logo" },
  ]

  const partnersImgList1 = imageNames1.map(partnerImg =>
    <img
      key={ partnerImg.id }
      src={ partnerImg.name }
      alt={ partnerImg.alt } />
  );

  const partnersImgList2 = imageNames2.map(partnerImg =>
    <img
      key={partnerImg.id}
      src={partnerImg.name}
      alt={partnerImg.alt} />
  );

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      totalItems: imageNames1.length,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
    <div className="partners">
      <div className='partners-title'>
        <h1>Our retailer and media partners</h1>
      </div>
      <div>
        <div className='label1'>
          <hr/>
          <label>MEDIA</label>
        </div>
        <Carousel
          infinite
          responsive={responsive}
          additionalTransfrom={0}
          className="carousel4"
          arrows={false}
          autoPlay
          draggable
          swipeable={true}
          centerMode={true}
          autoPlaySpeed={1300}
          partialVisbile={false}
          showDots={false}
          focusOnSelect={false}
          shouldResetAutoplay
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
        >
          { partnersImgList1 }
        </Carousel>
      </div>
      <div>
      <div className='label2'>
          <hr/>
          <label>MIKMAK RETAILER NETWORK</label>
        </div>
        <Carousel
          infinite={true}
          responsive={responsive}
          additionalTransfrom={0}
          className="carousel5"
          containerClass="container-with-dots"
          arrows={false}
          autoPlay
          draggable
          swipeable
          centerMode
          autoPlaySpeed={1300}
          partialVisbile={false}
          showDots={false}
          focusOnSelect={false}
          shouldResetAutoplay
          rewind={ false }
          rewindWithAnimation={ false }
          rtl={ true }
          sliderClass=""
        >
          { partnersImgList2 }
        </Carousel>
        </div>
    </div>
  )
}

export default MediaPartners;