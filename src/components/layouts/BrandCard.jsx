import React from 'react';

const BrandCard = ({ img, title }) => {
  return (
    <div
      className='card h-100'
      style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto' }}>
      <img src={img} className='card-img-top' alt='...' />
      <div className='card-body d-flex flex-column'>
        <p className='card-text'>{title}</p>
        <a href='#' className='btn btn-primary btn-block mt-auto'>
          See More
        </a>
      </div>
    </div>
  );
};

export default BrandCard;
