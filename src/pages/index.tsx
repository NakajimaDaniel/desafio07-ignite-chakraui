import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../components/Banner";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header/>
      <Flex flexDirection="column" justify="center">
        <Banner />
        <TravelTypes />
        <Divider />
        <Text align="center" fontSize="3xl" color="gray.600" pt="8" fontWeight="600">
          Vamos nessa?
          
        </Text>
        <Text align="center"  fontSize="3xl" color="gray.600" fontWeight="600">
          Então escolha seu continente
        </Text>

      </Flex>
    </>
  )
}
