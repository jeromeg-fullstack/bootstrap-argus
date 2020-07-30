import React, { Fragment } from 'react';
import Header from '../components/Header/index';
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import PageHeader from '../components/PageHeader';
import About from '../components/About/home-two';
import Funfact from '../components/Funfact';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import BrandLogo from '../components/BrandLogo';
import ServiceThumb from '../assets/img/about.jpg';

const PageAbout = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        bgImg={require('../assets/img/page-header.jpg')}
        title='ABOUT US'
        content='We only offer the best Security Systems to protect your Home, Property and Business.'
      />
      <About
        title={'Our Team'}
        heading='Meet Our <br/> Expert Member'
        thumb={ServiceThumb}
        content='<b>Argus</b> always try to provide the best Business Solutions for Clinets to grow up their Business very sharply and smoothly. We voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
      />
      <BrandLogo/>
      <Funfact classes='sp-top' />
      <CallToAction />
      <Footer/>
      <LoginRegister/>
      <MobileMenu/>
    </Fragment>
  );
};

export default PageAbout;
