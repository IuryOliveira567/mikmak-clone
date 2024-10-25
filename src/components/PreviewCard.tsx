import PropTypes from 'prop-types';
import { CardPropertyName } from '../entities';
import { useRef } from 'react';

function PreviewCard(props: CardPropertyName) {
  const cardRef = useRef(null) as any;

  const setBgIn= function() {
    cardRef.current.style.backgroundColor = props.hoverBackgroundColor;
  }

  const setBgOut = function() {
    cardRef.current.style.backgroundColor = props.backgroundColor;
  }

  return (
    <div className="preview-card">
      <div className='top-image'>
        <img src={props.img} alt='Home platform image preview' />
      </div>
      <div className='card-body'
        style={{ 'backgroundColor': props.backgroundColor}}
        onMouseEnter={setBgIn}
        onMouseLeave={setBgOut}
        ref = { cardRef }
        >
        <button className='btn bg-white fs-5' style={{color: props.backgroundColor }} type='button'>{props.buttonText}</button>
        <div>
          <h1 style={{ color: props.textColor }}>{props.title}</h1>
          <p style={{ color: props.textColor }}>{props.text}</p>
        </div>
        <div className='details-link'>
          <a href="#">Learn More</a>
          <i className="fa-solid fa-arrow-right-long"></i>
        </div>
      </div>
    </div>
  )
}

PreviewCard.propTypes = {} as CardPropertyName;
export default PreviewCard;