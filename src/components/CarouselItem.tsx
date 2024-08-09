import PropTypes, { useState, useEffect } from 'react';
import { CustomersCardPropertyName } from '../entities';

function CarouselItem(props: CustomersCardPropertyName) {
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      const image = await import(`../assets/images/customers/${ props.image.imageUrl }`);
      setImagePath(image.default);
    };

    loadImage();
  }, [props.image.imageUrl]);
   
  const customerSuccessStory = props.costumerSucessStories.map((story: string) => {
    return <li key={ story }>{ story }</li>;
  });

  return(
    <div className="carousel-item">
      <div className="row flex-row">
        <div className="carousel-left col-md-7">
          <h1>{ props.title }</h1>
          <p >{ props.description }</p>
          <ul>
            { customerSuccessStory}
          </ul>
          <span>{ props.note }</span>
        </div>
        <div className="carousel-right col-md-5">
          <img src={ imagePath } alt={ props.image.alt } width={ '90%' } height={ '90%' }/>
        </div>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {} as CustomersCardPropertyName;
export default CarouselItem;