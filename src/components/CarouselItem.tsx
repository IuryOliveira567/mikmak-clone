import PropTypes, { useState, useEffect } from 'react';
import { CustomersCardPropertyName } from '../entities';
import DOMPurify from 'dompurify';

function CarouselItem(props: CustomersCardPropertyName) {
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      const image = await import(`../assets/images/customers/${ props.image.imageUrl }`);
      setImagePath(image.default);
    };

    loadImage();
  }, [props.image.imageUrl]);
  
  const HtmlRenderer = (htmlString: string) => {
    const sanitizedHtml = DOMPurify.sanitize(htmlString);
  
    return (
      <span key={ htmlString } dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></span>
    );
  };

  const customerSuccessStory = props.customerSuccessStories.map((story: string) => {
    return <li key={ story }>{ HtmlRenderer(story) }</li>;
  });

  const getReference = () => {
    const reference = props.reference;

    return reference ? <div className="reference">
                         <span>- { reference }</span>
                       </div>
           : '';
  }
  
  debugger

  return(
    <div className="carousel-card">
      <div className="row flex-row">
        <div className="carousel-left col-md-7">
          <h1>{ props.title }</h1>
          <p>{ props.description }</p>
          { getReference() }
          <ul className='story'>
            { customerSuccessStory }
          </ul>
          <span className="note">
            { props.note ? HtmlRenderer(props.note) : '' }
          </span>
        </div>
        <div className="carousel-right col-md-5">
          <img src={ imagePath } alt={ props.image.alt } width={ '90%' } height={ '75%' }/>
        </div>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {} as CustomersCardPropertyName;
export default CarouselItem;