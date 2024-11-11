import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ResearchCard from './ResourceCard';
import ApiData from '../assets/data/ApiData.json';
import ResourceCardName from '../entities/ResourceCardName';

function ResearchResources() {
  const ResearchResources = ApiData.ResearchResources;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      totalItems: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 530, min: 0 },
      items: 1
    }
  };

  const researchData = ResearchResources.map((cardData: ResourceCardName) => {
    return <ResearchCard
      id={cardData.id}
      imageInfo={cardData.imageInfo}
      description={cardData.description}
      key={cardData.id}
    />
  });

  return (
    <div className="resources">
      <h1>eCommerce Research and Resources</h1>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={true}
        responsive={responsive}
        ssr={true}
        keyBoardControl={true}
        partialVisible={false}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        additionalTransfrom={0}
        className="carousel-resources"
        arrows={true}
        renderArrowsWhenDisabled={true}
        centerMode={false}
        partialVisbile={true}
        focusOnSelect={false}
        shouldResetAutoplay
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
      >
        { researchData }
      </Carousel>
    </div>
  )
}

export default ResearchResources;