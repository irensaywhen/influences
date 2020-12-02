import React from 'react';

import SwiperCore, { Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import InfluenceCard from './InfluenceCard/InfluenceCard';

SwiperCore.use([Lazy]);

const swiperBreakpoints = {
  320: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 3,
  },
  640: {
    slidesPerView: 4,
  },
  870: {
    slidesPerView: 5,
  },
  1130: {
    slidesPerView: 6,
  },
  1300: {
    slidesPerView: 7,
  },
  1500: {
    slidesPerView: 8,
  },
  1700: {
    slidesPerView: 9,
  },
};

const InfluenceList = ({ title }) => {
  return (
    <div className='py-4 px-3'>
      <h2 className='container px-4 pb-3 mx-auto text-xl text-primary-light font-semibold'>
        {title}
      </h2>

      <Swiper
        spaceBetween={16}
        breakpoints={swiperBreakpoints}
        observer={true}
        centerInsufficientSlides={true}
      >
        <SwiperSlide>
          <InfluenceCard />
        </SwiperSlide>
        <SwiperSlide>
          <InfluenceCard />
        </SwiperSlide>
        <SwiperSlide>
          <InfluenceCard />
        </SwiperSlide>
        <SwiperSlide>
          <InfluenceCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default InfluenceList;
