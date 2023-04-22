import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/page1' activeStyle>
            Page 1
          </NavLink>
          <NavLink to='/page2' activeStyle>
            Page 2
          </NavLink>
          <NavLink to='/page3' activeStyle>
            Page 3
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
  );
};
  
export default Navbar;