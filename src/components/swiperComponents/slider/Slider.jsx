// import { useEffect, useState } from 'react';
import { v4 } from 'uuid'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { ProductCard } from '../../cardComponents/productCard/ProductCard'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css'


const Slider = ({ data }) => {

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={2}
            slidesPerView={1}
            breakpoints={{
                680: { slidesPerView: 2 },
                1050: { slidesPerView: 3 },
                1380: { slidesPerView: 4 },
                1680: { slidesPerView: 5 },
                1950: { slidesPerView: 6 },
                2250: { slidesPerView: 7 },
                2550: { slidesPerView: 8 },
                2850: { slidesPerView: 9 },
                3150: { slidesPerView: 10 },
                3450: { slidesPerView: 11 },
            }}
            navigation
            pagination={{ clickable: true }}
        >
            {data.map(x => (
                <SwiperSlide className='swiper'
                    key={v4()}>
                    {<ProductCard {...x} />}
                </SwiperSlide>
            ))}
        </Swiper>

    );
};

export default Slider;