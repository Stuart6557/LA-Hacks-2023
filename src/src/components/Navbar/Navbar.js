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
          <NavLink to='/index' activeStyle>
            Page 1
          </NavLink>
          <NavLink to='/page2' activeStyle>
            Page 2
          </NavLink>
          <NavLink to='/page3' activeStyle>
            Page 3
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign Up / Log In</NavBtnLink>
        </NavBtn>
      </Nav>
  );
};
  
export default Navbar;