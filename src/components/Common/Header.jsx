import React from "react";
import Mainbanner from '../../assets/img/background.png'
// import whitebanner from 'Hunger-Captian\frontend\src\assets\img\white-banner.svg';
import logo from '../../assets/img/Logoo.svg'
//let logo = require('../../assets/img/Logoo.svg')

import whiteBanner from '../../assets/img/white-banner.svg'


const Header = () => {
  return (
    <>
      <header>
        <img src={Mainbanner} alt="" />
        <img className="white-border" src={whiteBanner} alt="" />
      </header>
      <section className="logo">
        <img src={logo} alt="" />
      </section>
      <section className="text">
        <p>
          Good food is <br /> The Foundation of <br />{" "}
          <span>GENUINE HAPPINESS</span>
        </p>
      </section>
      </>
  );
};

export default Header;
