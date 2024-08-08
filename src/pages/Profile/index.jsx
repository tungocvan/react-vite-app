import React from 'react';
import Slider from '../../layouts/components/Slider';

const Profile = () => {
  const sliderImages = [
    "/assets/slider/1.jpg",
    "/assets/slider/2.jpg",
    "/assets/slider/3.jpg",
    "/assets/slider/4.jpg",
    "/assets/slider/5.jpg"
  ];
  return (
    <div>
        <Slider sliderImages={sliderImages}/>
    </div>
  );
};

export default Profile;
