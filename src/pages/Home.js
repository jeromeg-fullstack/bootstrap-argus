import React from 'react';
import Header from '../components/Header/index';
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Slider from '../components/Slider/home';
import About from '../components/About/home';

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <Slider/>
      <About/>
      <MobileMenu/>
      <LoginRegister/>
    </React.Fragment>
  );
};

export default Home;