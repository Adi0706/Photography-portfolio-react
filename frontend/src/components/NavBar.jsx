import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('');

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-items">
          <li className='function'>
            <NavLink
              exact
              to="/"
              className='link'
              activeClassName='active'
              onClick={() => handleNavItemClick('HOME')}
            >
              HOME
            </NavLink>
          </li>
          <li className='function'>
            <NavLink
              to="/About"
              className='link'
              activeClassName='active'
              onClick={() => handleNavItemClick('ABOUT')}
            >
              ABOUT
            </NavLink>
          </li>
          <li className='function'>
            <NavLink
              to="/Gallery"
              className='link'
              activeClassName='active'
              onClick={() => handleNavItemClick('GALLERY')}
            >
              GALLERY
            </NavLink>
          </li>
          <li className='function'>
            <NavLink
              to="/Contact"
              className='link'
              activeClassName='active'
              onClick={() => handleNavItemClick('CONTACT')}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
        <ul className='icon-tray'>
          <li className='icon'><a href="https://www.instagram.com/thephotographypage8/"><FaInstagram /></a></li>
          <li className='icon'><a href="https://www.linkedin.com/in/aditya-bhattacharjee-288462215/"><FaLinkedinIn /></a></li>
          <li className='icon'><a href='https://github.com/Adi0706'><FaGithub /></a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
