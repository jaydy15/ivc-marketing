import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbars from './components/layouts/Navbar';
import Carousels from './components/layouts/Carousel';
import ItemsCard from './components/ItemsCard';
import KBChoice from './components/KBChoice';
import ShopBrands from './components/ShopBrands';
import MostPopular from './components/MostPopular';
import HotSales from './components/HotSales';
import TopAds from './components/TopAds';
import BestSeller from './components/BestSeller';
import ByStyle from './components/ByStyle';
import CardInfo from './components/layouts/CardInfo';

function App() {
  return (
    <Fragment>
      <Navbars />
      <div className='container'>
        <Carousels />
        <ItemsCard />
        <TopAds />
        <KBChoice />
        <ShopBrands />
        <HotSales />
        <MostPopular />
        <BestSeller />
        <ByStyle />
        <br />
        <CardInfo
          title='#idealVisionPH'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sed laudantium enim quos temporibus, impedit recusandae. Repellendus, iure. Aliquam repellendus ullam nesciunt? Laborum quo accusamus, dolorum rem magni est magnam.Sunt dicta, debitis rem soluta esse nisi expedita laudantium quia, molestias praesentium vero dignissimos aliquam autem placeat deserunt reiciendis natus! Veritatis ex dolorem ab vel commodi aperiam consectetur. Reiciendis, eum?'
        />
        <CardInfo
          title='Measure Your P.D'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sed laudantium enim quos temporibus, impedit recusandae. Repellendus, iure. Aliquam repellendus ullam nesciunt? Laborum quo accusamus, dolorum rem magni est magnam.Sunt dicta, debitis rem soluta esse nisi expedita laudantium quia, molestias praesentium vero dignissimos aliquam autem placeat deserunt reiciendis natus! Veritatis ex dolorem ab vel commodi aperiam consectetur. Reiciendis, eum?'
        />
        <CardInfo
          title='Fitting Guide'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sed laudantium enim quos temporibus, impedit recusandae. Repellendus, iure. Aliquam repellendus ullam nesciunt? Laborum quo accusamus, dolorum rem magni est magnam.Sunt dicta, debitis rem soluta esse nisi expedita laudantium quia, molestias praesentium vero dignissimos aliquam autem placeat deserunt reiciendis natus! Veritatis ex dolorem ab vel commodi aperiam consectetur. Reiciendis, eum?'
        />
      </div>
    </Fragment>
  );
}

export default App;
