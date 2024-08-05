import PropTypes from 'react';
import { CustomersCardPropertyName } from '../entities';

function CarouselItem(props: CustomersCardPropertyName) {
 
  const customerSuccessStory = props.costumerSucessStories.map((story: string) => {
    return <li>{ story }</li>;
  });

  return(
    <div className="carousel-item">
      <div className="row">
        <div className="col-md-7">
          <h1>{ props.title }</h1>
          <p >{ props.description }</p>
          <ul>
            { customerSuccessStory}
          </ul>
          <span>{ props.note }</span>
        </div>
        <div className="col-md-5">
          <img src='../assets/images/customers/Sabra.webp' alt={ props.image.alt } />
        </div>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {} as CustomersCardPropertyName;
export default CarouselItem;