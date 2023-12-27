import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Section2.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div id='section2'>
     <h2>Latest News from all categories</h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ratione rerum iusto alias nisi. Eveniet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>       
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='card'>
          <img src="https://preview.colorlib.com/theme/blogger/img/c2.jpg" alt="" />
          <span>10 JAN 2018</span>
            <h3>What Makes A Hotel Boutique</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
          <img src="https://preview.colorlib.com/theme/blogger/img/c3.jpg" alt="" />
          <span>10 JAN 2018</span>

            <h3>What Makes A Hotel Boutique</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
          <img src="https://preview.colorlib.com/theme/blogger/img/c1.jpg" alt="" />
          <span>10 JAN 2018</span>

            <h3>What Makes A Hotel Boutique</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
          <img src="https://preview.colorlib.com/theme/blogger/img/c2.jpg" alt="" />
          <span>10 JAN 2018</span>

            <h3>What Makes A Hotel Boutique</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
          <img src="https://preview.colorlib.com/theme/blogger/img/c3.jpg" alt="" />
          <span>10 JAN 2018</span>

            <h3>What Makes A Hotel Boutique</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
          <img src="https://preview.colorlib.com/theme/blogger/img/c1.jpg" alt="" />
          <span>10 JAN 2018</span>

            <h3>What Makes A Hotel Boutique</h3>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
