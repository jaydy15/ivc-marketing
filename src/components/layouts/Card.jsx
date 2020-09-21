import React from 'react';

const Card = ({ img, title }) => {
  return (
    <div
      className='card'
      style={{
        width: '18rem',
        height: '20rem',
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}>
      <div className='card-body text-right' style={{ marginTop: '200px' }}>
        <h5 className='card-title' style={{ color: 'white' }}>
          {title}
        </h5>
        <a href='#' className='btn btn-primary'>
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Card;
