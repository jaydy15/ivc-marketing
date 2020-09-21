import React from 'react';
import CardItem from './layouts/CardItem';
const KBChoice = () => {
  return (
    <div>
      <hr />
      <h2
        className='display-4 text-center'
        style={{ textDecoration: 'underline' }}>
        Kathryn's Choice
      </h2>
      <div
        className='scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4'
        style={{ overflowX: 'auto' }}>
        <div className='col-xs-6 col-sm-4'>
          <CardItem
            title='ANNA-SUI'
            img='https://www.idealvision.ph/wp-content/uploads/2020/03/ANNA-SUI.jpg'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <CardItem
            title='NEW-BALANCE-NB05188-C04'
            img='https://www.idealvision.ph/wp-content/uploads/2020/03/NEW-BALANCE-NB05188-C04.jpg'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <CardItem
            title='POLICE'
            img='https://www.idealvision.ph/wp-content/uploads/2020/03/POLICE.jpg'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <CardItem
            title='ACUVUE-DEFINE-CL'
            img='https://www.idealvision.ph/wp-content/uploads/2019/04/ACUVUE-DEFINE-CL.jpg'
          />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <CardItem
            title='ANTEPARA-CL'
            img='https://www.idealvision.ph/wp-content/uploads/2020/05/ANTEPARA-CL.jpg'
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
  );
};

export default KBChoice;
