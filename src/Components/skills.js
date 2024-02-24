import React from 'react';
import MyGradientCircularProgress from './CircleProgressBar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage from '../images/خليفة.jpg';


const NextArrow = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}><span>►</span></div>;
  };
  
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}><span>◄</span></div>;
  };
  

const Skills = () => {
  const skills = [
    { name: 'BackEnd Development', percentage: 95 },
    { name: 'Data Science', percentage: 80 },
    { name: 'FrontEnd Development', percentage: 90 },
    { name: 'Cyber Security', percentage: 95 },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint:950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint:650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div id="skills" className="app1" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className='skills' style={{ backgroundColor: '#333', color: '#fff', padding: '30px' }}>
      <h2 style={{fontSize:'45px', paddingBottom:'20px'}}>Skills</h2>
      <h3 style={{fontSize:'18px' , color:'rgb(160, 157, 157)'}}>You Can See My Skills Here</h3>
      <div className='skills'>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} style={{ width: '33%'}}>
            <div style={{marginLeft:'30px'}}>
            <MyGradientCircularProgress percentage={skill.percentage} /></div>
            <div>{skill.name}</div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
    </div>
  );
};

export default Skills;
