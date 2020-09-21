import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbars from './components/layouts/Navbar';
import Carousels from './components/layouts/Carousel';
import Card from './components/layouts/Card';
import CardItem from './components/layouts/CardItem';

function App() {
  return (
    <Fragment>
      <Navbars />
      <div className='container'>
        <Carousels />
        {/* CARDS 1st row */}
        <div className='row mt-5'>
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
        <div className='row mt-5'>
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
        {/* END OF CARDS */}
        <hr />
        <h2
          className='display-4 text-center'
          style={{ textDecoration: 'underline' }}>
          Kathryn's Choice
        </h2>
        <div className='row mt-5'>
          <CardItem
            title='ANNA-SUI'
            img='https://www.idealvision.ph/wp-content/uploads/2020/03/ANNA-SUI.jpg'
          />
          <CardItem
            title='NEW-BALANCE-NB05188-C04'
            img='https://www.idealvision.ph/wp-content/uploads/2020/03/NEW-BALANCE-NB05188-C04.jpg'
          />
          <CardItem
            title='POLICE'
            img='https://www.idealvision.ph/wp-content/uploads/2020/03/POLICE.jpg'
          />
          <CardItem
            title='ACUVUE-DEFINE-CL'
            img='https://www.idealvision.ph/wp-content/uploads/2019/04/ACUVUE-DEFINE-CL.jpg'
          />
          <CardItem
            title='ANTEPARA-CL'
            img='https://www.idealvision.ph/wp-content/uploads/2020/05/ANTEPARA-CL.jpg'
          />
          <CardItem
            title='FRESHLOOK-CL'
            img='https://www.idealvision.ph/wp-content/uploads/2019/05/FRESHLOOK-CL.jpg'
          />
        </div>
        <div>Footer</div>
      </div>
    </Fragment>
  );
}

export default App;
