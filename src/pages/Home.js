import React from 'react';
import Header from '../components/Header/index';
import LoginRegister from '../components/LoginRegister';
import MobileMenu from '../components/MobileMenu';
import Slider from '../components/Slider/home';
import About from '../components/About/home';
import Features from '../components/Features';
import Services from '../components/Service';
import Testimonials from '../components/Testimonials/home';
import Team from '../components/Team/home';
import Blog from '../components/Blog';
import BrandLogo from '../components/BrandLogo';
import Funfact from '../components/Funfact';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <About />
      <Features classes='sp-top' />
      <Services classes='sm-top-wt' />
      <Testimonials />
      <Team />
      <Blog />
      <BrandLogo />
      <Funfact />
      <CallToAction />
      <Footer />
      <MobileMenu />
      <LoginRegister />
    </React.Fragment>
  );
};

export default Home;
