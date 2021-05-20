// Import Swiper React components

import { Flex, Box, Image, Text, useMediaQuery } from "@chakra-ui/react";
import Link from 'next/link'


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

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)")


  return (
    <>
    {isLargerThan700? (
      <Flex justify="center" mt={['10','15', '15']} ml={['10']} mr={['10']} mb={['20']} >
        <Swiper  navigation={true}  slidesPerView={1}  centeredSlides={true} pagination={{
        "clickable": true}}>
          <SwiperSlide>
            <Link href="/europe">
              <Box position="relative" textAlign="center" cursor="pointer"> 
              
                <Image src="europe.png" w="100%" />
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)" color="white" fontSize={['1xl','2xl', '3xl','6xl']}  fontWeight="bold">Europa</Text>
                <Text position="absolute" top="50%" left="50%" transform={["translate(-50%, 80%)","translate(-50%, 100%)","translate(-50%, 110%)","translate(-50%, 160%)"]} color="white" fontSize={['md','md','md','3xl']} fontWeight="bold">O continente mais antigo.</Text>

              </Box>
            </Link>
          </SwiperSlide>
        </Swiper>
      </Flex>
    ): (
      <Flex justify="center" mt={['10','15', '15']} ml={[0]} mr={[0]} mb={['10']} h="100%">
        <Swiper  navigation={true}  slidesPerView={1}  centeredSlides={true} pagination={{
        "clickable": true}}>
          <SwiperSlide>
            <Link href="/europe">
              <Box position="relative" textAlign="center" cursor="pointer" w="100%" h="100%"> 
              
                <Image src="europe.png" w="100%" h="100%" />
                <Text position="absolute" top="50%" left="50%" transform={["translate(-50%,-70%)","translate(-50%,-50%)"]} color="white" fontSize={['13','md']}  fontWeight="bold">Europa</Text>
                <Text position="absolute" top="50%" left="50%" transform={["translate(-50%, 10%)","translate(-50%, 50%)"]} color="white" fontSize={['13','s']} fontWeight="bold">O continente mais antigo.</Text>

              </Box>
            </Link>
          </SwiperSlide>
        </Swiper>
      </Flex>      
    )}
    </>
   
  )
}