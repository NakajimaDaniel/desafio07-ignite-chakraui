// Import Swiper React components

import { Flex, Box, Image } from "@chakra-ui/react";



import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./styles.module.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export function Carousel() {
  return (
    <Flex justify="center" m="20" >
        <Swiper  navigation={true}  slidesPerView={1}  centeredSlides={true} pagination={{
      "clickable": true}}>
          <SwiperSlide>
            <Image src="europe.png" w="100%"></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="europe.png" w="100%"></Image>
          </SwiperSlide>
          
        </Swiper>

    </Flex>
  )
}