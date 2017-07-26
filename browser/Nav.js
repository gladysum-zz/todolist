import React from 'react';
import {Link} from 'react-router-dom';

const Nav = ()=>(
  <div className="nav">
    <div className="nav-col-left">
      <div id="home-link">
        To Do List
      </div>

    </div>
    <div className="nav-col-right">
      <div className="dropdown">
        <button className="dropbtn">
          <div className="nav-icon"></div>
          <div className="nav-icon"></div>
          <div className="nav-icon"></div>
        </button>
        <div className="dropdown-content">
          <Link to={'/'} className="link" id="menu-link">HOME</Link>
          <Link to={'/about'} className="link" id="menu-link">ABOUT</Link>
        </div>
      </div>

    </div>
  </div>
);

export default Nav;

