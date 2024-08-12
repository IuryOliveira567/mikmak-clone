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
  
  const HtmlRenderer = ( htmlString: string) => {
    const sanitizedHtml = DOMPurify.sanitize(htmlString);
  
    return (
      <li key={htmlString} dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></li>
    );
  };

  const customerSuccessStory = props.costumerSucessStories.map((story: string) => {
    return HtmlRenderer(story);
  });
  
  return(
    <div className="carousel-item">
      <div className="row flex-row">
        <div className="carousel-left col-md-7">
          <h1>{ props.title }</h1>
          <p>{ HtmlRenderer(props.description) }</p>
          <ul className='stories'>
            { customerSuccessStory }
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