import React from 'react';
import parse from 'html-react-parser';
import aboutData from '../../../data/About/home-two';
import aboutThumb from '../../../assets/img/about-2-bg.jpg';

const About = () => {
  return (
    <div
      className='home-two-about-area'
      style={{ backgroundImage: `url(${aboutThumb})` }}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 d-lg-none'>
            <figure className='about-thumb'>
              <img
                src={require('../../../assets/img/' + aboutData.thumb)}
                alt='Argus-About'
              />
            </figure>
          </div>

          <div className='col-lg-6'>
            <div className='about-content about-content--2'>
              <h6>{aboutData.title}</h6>
              <h2>{parse(aboutData.heading)}</h2>
              <span className='about-since'>{aboutData.since}</span>
              <p>{parse(aboutData.text)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
