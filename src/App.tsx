import React from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Location from './pages/location'
import Team from './pages/team'
import Contact from './pages/contact'
import './App.css'
import negative from './images/rica-logo.png'

const App = () => {
  return (
    <div className="App">
      <div className='rica-header'>
        <nav className='navbar navbar-expand-lg rica-navbar'>
          <a className='rica-company-banner navbar-brand'>
            <img src={negative} alt="" className='logo-image img img-responsive' />
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#ricanavbar'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='rica-site-navigation collapse navbar-collapse' id='ricanavbar'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link active'><Link className='navigation-item' to='/home'>Home</Link></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'><Link className='navigation-item' to='/about'>About Us</Link></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'><Link className='navigation-item' to='/services'>Services</Link></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'><Link className='navigation-item' to='/location'>Location</Link></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'><Link className='navigation-item' to='/team'>Team</Link></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'><Link className='navigation-item' to='/contact'>Contact Us</Link></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className='rica-content'>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      <div className='rica-footer'>
        <div className='rica-contact-address-container'>
          <div className='footer-component-contact'>
            <span className='footer-component-header'>&copy; Copyright RICA</span>
            <span className='footer-component-header'>Phone: +1 (214) 779-8074</span>
            <span className='footer-component-header'>Email:info@rica.org</span>
          </div>
          <div className='footer-component-address'>
            <span className='footer-component-header'>Office Address</span>
            <div className='address-container'>
              324 Grove Street, #2<br/>
              Worcester, MA 01605<br/>
            </div>
          </div>
        </div>

        <div className='footer-component-media'>
          <a href="https://facebook.com/yourpage" target='_blank'>
            <span className="fa-stack fa-sm">
              <i className="fab fa-facebook fa-stack-2x fa-inverse social-icon"></i>
            </span>
          </a>
          <a href="https://instagram.com/yourprofile" target='_blank'>
            <span className="fa-stack fa-sm">
              <i className="fab fa-instagram fa-stack-2x fa-inverse social-icon"></i>
            </span>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target='_blank'>
            <span className="fa-stack fa-sm">
              <i className="fab fa-linkedin fa-stack-2x fa-inverse social-icon"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
