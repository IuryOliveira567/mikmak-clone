import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import coty from '../assets/images/partners/Coty.svg.webp';
import diageo from '../assets/images/partners/Diageo.webp';
import hershey from '../assets/images/partners/Hershey.svg.webp';
import markAnthony from '../assets/images/partners/mark-anthony.webp';
import mars from '../assets/images/partners/Mars.svg.webp';
import mondelez from '../assets/images/partners/Mondelez.webp';
import reckittBenckiser from '../assets/images/partners/ReckittBenckiser.webp';
import scJohnson from '../assets/images/partners/SC_Johnson.svg.webp';
import unilever from '../assets/images/partners/unilever-logo.webp';

import heineken from '../assets/images/partners/heineken.webp';
import compobellis from '../assets/images/partners/Campbells.webp';
import newell from '../assets/images/partners/Newell_Brands.webp';
import campari from '../assets/images/partners/campari.webp';
import kraftheinz from '../assets/images/partners/KraftHeinz.svg.webp';
import anheuserBusch from '../assets/images/partners/Lock-Up-Large-Stacked.webp';
import pernodRicard from '../assets/images/partners/Pernod_Ricard.webp';
import kellanova from '../assets/images/partners/Kellanova.webp';
import hasbro from '../assets/images/partners/Hasbro.webp';
import proximo from '../assets/images/partners/Proximo.webp';

function Partners() {

  const imageNames1 = [
    { id: 0, name: unilever, alt: "Unilever logo" },
    { id: 1, name: markAnthony, alt: "Mark Anthony logo" },
    { id: 2, name: coty, alt: "Coty logo" },
    { id: 3, name: hershey, alt: "Hershey logo" },
    { id: 4, name: scJohnson, alt: "SC Johnson logo" },
    { id: 5, name: reckittBenckiser, alt: "ReckittBenckiser logo" },
    { id: 6, name: mondelez, alt: "Mondelez logo" },
    { id: 7, name: mars, alt: "Mars logo" },
    { id: 8, name: diageo, alt: "Diageo logo" }
  ]

  const imageNames2 = [
    { id: 9, name: heineken, alt: "Heineken logo" },
    { id: 10, name: compobellis, alt: "Compobellis logo" },
    { id: 11, name: newell, alt: "Newell logo" },
    { id: 12, name: campari, alt: "Campari logo" },
    { id: 13, name: kraftheinz, alt: "Kraftheinz logo" },
    { id: 14, name: anheuserBusch, alt: "AnheuserBusch logo" },
    { id: 15, name: pernodRicard, alt: "PernodRicard logo" },
    { id: 16, name: kellanova, alt: "Kellanova logo" },
    { id: 17, name: hasbro, alt: "Hasbro logo" },
    { id: 18, name: proximo, alt: "Proximo logo" }
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
      breakpoint: { max: 464, min: 320 },
      items: 1
    }
  };

  return (
    <div className="partners-pane">
      <div>
        <Carousel
          infinite
          responsive={responsive}
          additionalTransfrom={0}
          className="carousel1"
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
        <Carousel
          infinite={true}
          responsive={responsive}
          additionalTransfrom={0}
          className="carousel1"
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

export default Partners;