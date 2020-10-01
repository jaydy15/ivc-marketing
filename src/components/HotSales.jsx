import React from 'react';
import CardItem from './layouts/CardItem';

const HotSales = () => {
  return (
    <div>
      <div>
        <hr />
        <h2
          className='display-4 text-center'
          style={{ textDecoration: 'underline' }}>
          Sweet Deals
        </h2>
        <div
          className='scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4'
          style={{ overflowX: 'auto' }}>
          <div className='col-xs-6 col-sm-4'>
            <CardItem
              title='Agnes B. AB40022'
              img='https://www.idealvision.ph/wp-content/uploads/2019/08/1.jpg'
            />
          </div>
          <div className='col-xs-6 col-sm-4'>
            <CardItem
              title='Antepara IRELAND '
              img='https://www.idealvision.ph/wp-content/uploads/2020/07/IRELAND-AD9070-C1-DEMI-49-21-140-138mm-768x768.jpg'
            />
          </div>
          <div className='col-xs-6 col-sm-4'>
            <CardItem
              title='Boston-F-1'
              img='https://www.idealvision.ph/wp-content/uploads/2019/04/Boston-F-1.jpg'
            />
          </div>
          <div className='col-xs-6 col-sm-4'>
            <CardItem
              title='Antepara Portland AA7091'
              img='https://www.idealvision.ph/wp-content/uploads/2019/04/2-portland-F.jpg'
            />
          </div>
          <div className='col-xs-6 col-sm-4'>
            <CardItem
              title='Acuvue Moist 30’s per Box'
              img='https://www.idealvision.ph/wp-content/uploads/2019/03/20.jpg'
            />
          </div>
          <div className='col-xs-6 col-sm-4'>
            <CardItem
              title='FRESHLOOK-CL'
              img='https://www.idealvision.ph/wp-content/uploads/2019/05/FRESHLOOK-CL.jpg'
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default HotSales;
