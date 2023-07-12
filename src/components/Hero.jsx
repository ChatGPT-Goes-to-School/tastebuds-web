import React from 'react';
import { ReactComponent as BackgroundSvg } from '../assets/barbecue.svg';

const HeroSection = () => {
  return (
    <div className="bg-[#d7f3e6] border rounded-xl mx-8 my-4 h-[200px] flex items-center justify-center">
      <div className="flex items-center justify-center w-1/4 h-[200px]">
        <BackgroundSvg className="svg-bg" />
      </div>
      <div className="flex flex-col w-3/4">
        <h1>Discover Delicious Recipes</h1>
        <p>Explore a world of culinary delights</p>
      </div>
    </div>
  );
};

export default HeroSection;
