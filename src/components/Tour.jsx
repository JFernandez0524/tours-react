import React, { useState } from 'react';

const Tour = ({ id, info, image, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='single-tour'>
      <img className='img' src={image} alt={name} />
      <span className='tour-price'>{price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(2, 200)}...`}
          <button
            type='button'
            className='info-btn'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button
          type='button'
          className='btn btn-block delete-btn'
          onClick={() => {
            removeTour(id);
          }}
        >
          Remove Package
        </button>
        {console.log(id, info, image, name, price)}
      </div>
    </div>
  );
};

export default Tour;
