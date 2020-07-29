import React from 'react';
import SectionTitle from '../../UI/SectionTitle';
import SlickSlider from '../../UI/Slick';
import Member from './Member';

import teamBg from '../../../assets/img/team/team-bg.jpg';
import Teams from '../../../data/Team/home';

function Team() {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: false,
    dots: true,
    className: 'team-content-wrap slick-dots--light mtn-md-5',
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <div
      className='team-area-wrapper bg-img sp-y'
      style={{ backgroundImage: `url(${teamBg})` }}>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-lg-4'>
            <SectionTitle
              variant='light'
              title='Management Team'
              heading='We have a great <br />management team'
              text='<strong>Argus</strong> always try to provide the best Business Solutions for Clients to protect their Business day in and day out.'
            />
          </div>

          <div className='col-lg-8'>
            <SlickSlider settings={settings}>
              {Teams.map(team => (
                <div key={team.id}>
                  <Member
                    id={team.id}
                    name={team.name}
                    designation={team.designation}
                    profilePic={team.profilePic}
                  />
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
