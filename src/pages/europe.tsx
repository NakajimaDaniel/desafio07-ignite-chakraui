import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";


export default function Europe() {
  return (
    <>
      <Header />
      <Flex justify="center" flexDirection="column">

        <Box position="relative" textAlign="center">
          <Image src="europe1.png" w="100vw" maxh="500px" />
          <Text position="absolute" top="70%" left="0%" transform="translate(70%,0)" color="white" fontSize={['1xl','2xl', '3xl','6xl']}  fontWeight="semibold">Europa</Text>
        </Box>

        <Flex flexDirection="row"  m="10" pl="10">

          <Text w="50%" fontSize="20" pr="20" textAlign="justify" >
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, 
            a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex justify="center" flexDirection="row" >
            <Box alignItems="center" pr="20">
              <Text textAlign="center" fontSize="50" color="yellow.400" fontWeight="bold">50</Text>
              <Text textAlign="center" fontSize="25" color="gray.450" fontWeight="bold">países</Text>
            </Box>

            <Box alignItems="center" pr="20">
              <Text textAlign="center" fontSize="50" color="yellow.400" fontWeight="bold">60</Text>
              <Text textAlign="center" fontSize="25" color="gray.450" fontWeight="bold">línguas</Text>
            </Box>

            <Box alignItems="center">
              <Text textAlign="center" fontSize="50" color="yellow.400" fontWeight="bold">27</Text>
              <Text textAlign="center" fontSize="25" color="gray.450" fontWeight="bold">cidades +100</Text>
            </Box>

          </Flex>
        </Flex>

      </Flex>
    </>
  )
}