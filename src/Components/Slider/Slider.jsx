import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

import {Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"

        ></div>
        <SwiperSlide>
          <div className='slider-wrapper'>
            <img src="./slider2.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-wrapper'>
            <img src="./slider3.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-wrapper'>
            <img src="./slider1.png" alt="" />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
