import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbars from './components/layouts/Navbar';
import Carousels from './components/layouts/Carousel';
import Card from './components/layouts/Card';
import CardItem from './components/layouts/CardItem';
import ItemsCard from './components/ItemsCard';
import { Navbar } from 'react-bootstrap';
import KBChoice from './components/KBChoice';

function App() {
  return (
    <Fragment>
      <Navbars />
      <div className='container'>
        <Carousels />
        <ItemsCard />
        <KBChoice />
      </div>
    </Fragment>
  );
}

export default App;
