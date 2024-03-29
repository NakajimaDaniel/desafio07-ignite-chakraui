import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";

import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";




export default function Home() {
  return (
    <>
      <Header/>
      <Flex flexDirection="column">
        <Banner />
        <TravelTypes />
        <Divider />

        <Text align="center" fontSize={[ 'md', '1xl', '2xl', '3xl']} color="gray.600" pt={['6', '8', '10', '12']} fontWeight="600">
          Vamos nessa?
        </Text>
        <Text align="center"  fontSize={[ 'md', '1xl', '2xl', '3xl']} color="gray.600" fontWeight="600" pb={['4' ,'6', '8']}>
          Então escolha seu continente
        </Text>

        <Carousel />

      </Flex>
    </>
  )
}
