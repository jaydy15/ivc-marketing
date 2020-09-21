import React from 'react';
import Card from './layouts/Card';

const ItemsCard = () => {
  return (
    <div className='container'>
      <div
        className='scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4'
        style={{ overflowX: 'auto' }}>
        <div className='col-xs-6 col-sm-4'>
          <Card
            title='Mens Eyeglasses'
            img='https://images.pexels.com/photos/939817/pexels-photo-939817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <Card
            title='Womens Eyeglasses'
            img='https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <Card
            title='Kids Eyeglasses'
            img='https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          />
        </div>
      </div>
      {/* CARDS 2nd Row */}
      <div
        className='scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4'
        style={{ overflowX: 'auto' }}>
        <div className='col-xs-6 col-sm-4'>
          <Card
            title='Mens Sunglasses'
            img='https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <Card
            title='Womens Sunglasses'
            img='https://images.pexels.com/photos/2043870/pexels-photo-2043870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <Card
            title='Contact Lenses'
            img='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          />
        </div>
      </div>
    </div>
  );
  {
    /* END OF CARDS */
  }
};

export default ItemsCard;
