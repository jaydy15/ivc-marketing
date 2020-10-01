import React from 'react';

const Navbars = () => {
  return (
    <div>
      <nav className='navbar navbar-dark bg-primary mb-5'>
        <a className='navbar-brand' href='#!'>
          Ideal Vision PH
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <a className='nav-link' href='#!'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                Eyeware
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                Contacts & Solutions
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                Accessories
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                Googles & Readers
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                Eye Care
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                Eye Care
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                Brands
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                Deals
              </a>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-success my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbars;
