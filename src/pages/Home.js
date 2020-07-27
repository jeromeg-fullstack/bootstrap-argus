import React from 'react';
import Header from '../components/Header/index';
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <MobileMenu/>
      <LoginRegister/>
    </React.Fragment>
  );
};

export default Home;