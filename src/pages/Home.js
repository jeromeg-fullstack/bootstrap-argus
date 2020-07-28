import React from 'react';
import Header from '../components/Header/index';
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Slider from '../components/Slider/home';
import About from '../components/About/home';
import Features from '../components/Features'
import Services from '../components/Services'

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <Slider/>
      <About/>
      <Features classes="sp-top"/>
      <Services classes="sm-top-wt"/>
      <MobileMenu/>
      <LoginRegister/>
    </React.Fragment>
  );
};

export default Home;