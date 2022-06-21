import React from 'react';
import './styles.css';
import bannerImg from './banner.jpeg';
import Logo from '../../common/Logo';

const Banner = ({ handleScrollMenu }) => {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Delicious donuts to satisfy all cravings</h1>
          <p>We make fresh and tasty donuts that are always warm and ready for you!</p>
          <button onClick={handleScrollMenu}>
            View Menu <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img src={bannerImg} alt="banner" className="header-img"></img>
    </header>
  );
};

export default Banner;