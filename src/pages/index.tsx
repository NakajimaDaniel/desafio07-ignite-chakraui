import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../components/Banner";
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
      </Flex>
    </>
  )
}
