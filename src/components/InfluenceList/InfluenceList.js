import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import InfluenceCard from './InfluenceCard/InfluenceCard';

const InfluenceList = ({ title }) => {
  return (
    <div className='py-4'>
      <h2 className='container px-4 mx-auto text-xl text-primary font-semibold'>
        {title}
      </h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
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
