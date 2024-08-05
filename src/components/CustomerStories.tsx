import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SlideLeftBtn from './SlideLeftBtn';
import SlideRightBtn from './SlideRightBtn';
import CarouselItem from "./CarouselItem";
import CostumersData from '../assets/data/CustomersStories.json';
import CustomerCardPropertyNames from '../entities/CustomersCardPropertyName';

function CustomerStories() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const customerSuccessStories = CostumersData.CustomersStories.map((customerStory: CustomerCardPropertyNames) => {
    return <CarouselItem
      title={ customerStory.title }
      description={ customerStory.description }
      costumerSucessStories={ customerStory.costumerSucessStories }
      note={ customerStory.note }
      image={ customerStory.image }
    />
  });

  return (
    <div className="stories">
      <div>
        <h1>MikMak Customer Success Stories</h1>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          infinite={true}
          responsive={responsive}
          ssr={true}
          keyBoardControl={true}
          partialVisible={false}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          additionalTransfrom={0}
          className="carousel-customers"
          arrows={true}
          customLeftArrow={<SlideLeftBtn/>}
          customRightArrow={<SlideRightBtn/>}
          renderArrowsWhenDisabled={true}
          centerMode={false}
          partialVisbile={true}
          focusOnSelect={false}
          shouldResetAutoplay
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
        >
          { customerSuccessStories }
        </Carousel>
      </div>
    </div>
  )
}

export default CustomerStories;