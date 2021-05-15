// Import Swiper React components

import { Flex, Box, Image, Text } from "@chakra-ui/react";



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
            <Box position="relative" textAlign="center"> 
              <Image src="europe.png" w="100%" ></Image>
              <Text position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)" color="white" fontSize="4xl" fontWeight="bold">Europa</Text>
              <Text position="absolute" top="50%" left="50%" transform="translate(-50%, 80%)" color="white" fontSize="2xl" fontWeight="bold">O continente mais antigo.</Text>
            </Box>
            
          </SwiperSlide>
          <SwiperSlide>
            <Image src="europe.png" w="100%"></Image>
          </SwiperSlide>
          
        </Swiper>

    </Flex>
  )
}