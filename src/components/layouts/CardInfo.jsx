import React from 'react';

const CardInfo = ({ title, body }) => {
  return (
    <div className='card my-3'>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{body}</p>
        <a href='#!' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardInfo;
