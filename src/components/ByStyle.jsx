import React from 'react';
import BrandCard from './layouts/BrandCard';

const ByStyle = () => {
  return (
    <div>
      <hr />
      <h2
        className='display-4 text-center'
        style={{ textDecoration: 'underline' }}>
        Shop By Style
      </h2>
      {/* EYEGLASSES */}
      <div
        className='scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4'
        style={{ overflowX: 'auto' }}>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard
            title='Round Eyeglasses'
            img='https://www.idealvision.ph/wp-content/uploads/2019/02/5-oregon-F.jpg'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard
            title='Square Eyeglasses '
            img='https://www.idealvision.ph/wp-content/uploads/2019/04/1-kenya-F.jpg'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard
            title='Rectangle Eyeglasses'
            img='https://www.idealvision.ph/wp-content/uploads/2020/02/1-10.jpg'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard
            title='Wayfarer Eyeglasses'
            img='https://www.idealvision.ph/wp-content/uploads/2019/08/1-10.jpg'
          />
        </div>
      </div>
      {/* SUNGLASSES */}
      <div
        className='scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4'
        style={{ overflowX: 'auto' }}>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard
            title='Round Sunglasses'
            img='https://www.idealvision.ph/wp-content/uploads/2019/08/1-11-768x768.jpg'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard
            title='Aviator Sunglasses'
            img='https://www.idealvision.ph/wp-content/uploads/2019/06/aa-600x600.jpg'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard
            title='Cat Eye Sunglasses'
            img='https://www.idealvision.ph/wp-content/uploads/2019/08/1-13-768x768.jpg'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard
            title='Wayfarer Sunglasses'
            img='https://www.idealvision.ph/wp-content/uploads/2019/06/1-768x768.jpg'
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ByStyle;
