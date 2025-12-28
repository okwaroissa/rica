import React, {useRef} from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Location from './pages/location'
import Team from './pages/team'
import Member from './pages/member'
import Advisors from './pages/advisors'
import Contact from './pages/contact'
import './App.css'
import negative from './images/rica-logo.png'
import { member } from './types/types'

const App = () => {
  const collapseRef = useRef<HTMLDivElement>(null)
  const closeNavbar = () => {
    if (collapseRef.current && collapseRef.current.classList.contains('show')) {
      const bsCollapse = new (window as any).bootstrap.Collapse(collapseRef.current, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };
  return (
    <div className="App">
      <div className='rica-header'>
        {/* <div className='container-fluid'>
          
        </div> */}
        <nav className='navbar navbar-expand-lg rica-navbar'>
            <a className='rica-company-banner navbar-brand' href='#'>
              <img src={negative} alt="" className='logo-image img img-responsive' />
            </a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#ricanavbar'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='rica-site-navigation collapse navbar-collapse' id='ricanavbar' ref={collapseRef}>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className='nav-link navigation-item' to='/home' onClick={closeNavbar}>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link navigation-item' to='/about' onClick={closeNavbar}>About Us</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link navigation-item' to='/services' onClick={closeNavbar}>Services</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link navigation-item' to='/location' onClick={closeNavbar}>Location</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link navigation-item' to='/team' onClick={closeNavbar}>Team</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link navigation-item' to='/advisors' onClick={closeNavbar}>Advisors</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link navigation-item' to='/contact' onClick={closeNavbar}>Contact Us</Link>
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
          <Route path='/member' element={<Member/>}/>
          <Route path='/advisors' element={<Advisors/>}/>
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
              334 Boston Turnpike<br/>
              Shrewsbury, MA 01545<br/>
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
