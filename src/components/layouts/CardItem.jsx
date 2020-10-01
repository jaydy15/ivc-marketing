import React from 'react';

const CardItem = ({ img, title }) => {
  return (
    <div
      className='card'
      style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto' }}>
      <img src={img} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text d-flex flex-column'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          href='!#'
          className='btn btn-primary btn-block mt-auto'
          style={{ borderRadius: '100px' }}>
          <i className='fa fa-cart-plus' />
          <span style={{ paddingLeft: '15px' }}>Add to Cart</span>
        </a>
      </div>
    </div>
  );
};

export default CardItem;
