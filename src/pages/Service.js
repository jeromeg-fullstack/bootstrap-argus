import React, { Fragment } from 'react';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import PageAbout from '../components/About/page';
import Testimonial from '../components/Testimonials/home-two';
import BrandLogo from '../components/BrandLogo';
import Funfact from '../components/Funfact';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import LoginRegister from '../components/LoginRegister';
import MobileMenu from '../components/MobileMenu';

import ServiceThumb from '../assets/img/about.jpg';
import Services from '../components/Service';

const PageService = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        bgImg={require('../assets/img/page-header.jpg')}
        title='PRODUCTS'
        content='We only offer the best Security Systems to protect your Home, Property and Business.'
      />
      <PageAbout
        title={'Products'}
        heading='We only offer the best Security Systems'
        thumb={ServiceThumb}
        content='We have a singular focus on security and smart technology solutions, which means you’ll never find random products on our website like books, clothing, or anything else you might see on a typical ecommerce site. Security and smart technology is our area of expertise, and that’s the foundation of what we do.
                We stand behind every product we sell. Each item is hand-selected, reviewed, tested, and approved by our product team as part of our quality-assurance process. When you work with the 7S CCTV Security experts, you will come to expect the best.'
      />
      <Services classes='sm-top' />
      <Testimonial />
      <BrandLogo />
      <Funfact classes='sp-top' />
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </Fragment>
  );
};

export default PageService;
