import { Box, Flex, Grid, Image, SimpleGrid, Text, useMediaQuery  } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";


export default function Europe() {

  

  return (
    <>
      <Header />
      
        
          <>
            
           <Flex
              flexDir="column"
            >
            <Box
              position="relative"
              textAlign="center"
            >
              <Image
                src="europe1.png"
                w="100vw"
                maxh="500px" 
              />
             <Text
                position="absolute"
                top="70%"
                left="0%"
                transform="translate(70%,0)"
                color="white"
                fontSize={['1xl','2xl',
                '3xl','6xl']}
                fontWeight="semibold"
                sx={{"@media screen and (max-width: 750px)": {
                  top:"50%",
                  left:"50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: '5xl',
                }}}
              >
                Europa
              </Text>
            </Box>

            <Flex
              flexDirection="row"
              justify="center"
              pt="10"
              pb="10"
              pl="5"
              pr="5"
              alignSelf="center"
              maxW={1400}
              sx={{"@media screen and (max-width: 750px)": {
                flexDir: "column",

              }}}
            >

              <Text
                w="45%"
                fontSize="20"
                pr="5%"
                textAlign="justify"
                sx={{"@media screen and (max-width: 750px)": {
                  width:"100%",
                  pr: '0',
                  pb: '5'
                }, 
                  "@media screen and (max-width:500px)": {
                    fontSize: '15'
                  }
                }}
              >
                A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, 
                a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
              </Text>

              <Flex
                w="45%"
                pl="5%"
                justify="center"
                flexDirection="row"
                sx={{"@media screen and (max-width: 750px)": {
                  w: "100%",
                  pl: '0'
                }}}
              >
                <Box alignItems="center" pr="10" >
                  <Text
                    textAlign="center"
                    fontSize="50"
                    color="yellow.400"
                    fontWeight="bold"
                    sx={{"@media screen and (max-width: 500px)": {
                      fontSize: "35"
                    }}}
                  >
                      50
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="25"
                    color="gray.450"
                    fontWeight="bold"
                    sx={{"@media screen and (max-width: 500px)": {
                      fontSize: "20"
                    }}}
                  >
                    países
                  </Text>
                </Box>

                <Box alignItems="center" pr="10">
                  <Text
                    textAlign="center"
                    fontSize="50"
                    color="yellow.400"
                    fontWeight="bold"
                    sx={{"@media screen and (max-width: 500px)": {
                      fontSize: "35"
                    }}}
                  >
                    60
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="25"
                    color="gray.450"
                    fontWeight="bold"
                    sx={{"@media screen and (max-width: 500px)": {
                      fontSize: "20"
                    }}}
                  >
                    línguas
                  </Text>
                </Box>

                <Box alignItems="center">
                  <Text
                    textAlign="center"
                    fontSize="50"
                    color="yellow.400"
                    fontWeight="bold"
                    sx={{"@media screen and (max-width: 500px)": {
                      fontSize: "35"
                    }}}
                  >
                    27
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="25"
                    color="gray.450"
                    fontWeight="bold"
                    sx={{"@media screen and (max-width: 500px)": {
                      fontSize: "20"
                    }}}
                  >
                    cidades +100
                  </Text>
                </Box>
              </Flex>

            </Flex>

            <Flex pb="10" pl="5" pr="5" justifyContent="center" flexDir="column"  w="100%" maxW={1400} alignSelf="center" >
            <Text textAlign="left" fontSize="25" fontWeight="semibold" pb="10" color="gray.600">Cidades +100</Text>
            <Grid
              templateColumns={["repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)"]}
              gap={[5,4,3,2,50]}
              justifyItems="center"
              w="100%"
              sx={{"@media screen and (max-width: 570px)": {
                gridTemplateColumns: "repeat(1, 1fr)",
              }}}
            >

                <Box w={["250px","256px"]}>
                <Flex justify="center" flexDirection="column" pb="10" w="100%">
                  <Image src="london.png"/>
                  <Flex justify="center" flexDirection="row" p="3" borderBottom="1px" borderRight="1px" borderLeft="1px"  borderColor="yellow.400">
                    <Box pr="20">
                      <Text fontWeight="semibold" fontSize="20" pb="2" >Londres</Text>
                      <Text color="gray.500">Reino Unido</Text>
                    </Box>
                    <Flex justify="center" alignItems="center">
                      <Image src="ukflag.png" boxSize="7" borderRadius="full" align="center"/>
                    </Flex>
                  </Flex>
                </Flex>
                </Box>

                <Box w="256px">
                <Flex justify="center" flexDirection="column" pb="10" w="100%">
                  <Image src="london.png"/>
                  <Flex justify="center" flexDirection="row" p="3" borderBottom="1px" borderRight="1px" borderLeft="1px"  borderColor="yellow.400">
                    <Box pr="20">
                      <Text fontWeight="semibold" fontSize="20" pb="2" >Londres</Text>
                      <Text color="gray.500">Reino Unido</Text>
                    </Box>
                    <Flex justify="center" alignItems="center">
                      <Image src="ukflag.png" boxSize="7" borderRadius="full" align="center"/>
                    </Flex>
                  </Flex>
                </Flex>
                </Box>

                <Box w="256px">
                <Flex justify="center" flexDirection="column" pb="10" w="100%">
                  <Image src="london.png"/>
                  <Flex justify="center" flexDirection="row" p="3" borderBottom="1px" borderRight="1px" borderLeft="1px"  borderColor="yellow.400">
                    <Box pr="20">
                      <Text fontWeight="semibold" fontSize="20" pb="2" >Londres</Text>
                      <Text color="gray.500">Reino Unido</Text>
                    </Box>
                    <Flex justify="center" alignItems="center">
                      <Image src="ukflag.png" boxSize="7" borderRadius="full" align="center"/>
                    </Flex>
                  </Flex>
                </Flex>
                </Box>

                <Box w="256px">
                <Flex justify="center" flexDirection="column" pb="10" w="100%">
                  <Image src="london.png"/>
                  <Flex justify="center" flexDirection="row" p="3" borderBottom="1px" borderRight="1px" borderLeft="1px"  borderColor="yellow.400">
                    <Box pr="20">
                      <Text fontWeight="semibold" fontSize="20" pb="2" >Londres</Text>
                      <Text color="gray.500">Reino Unido</Text>
                    </Box>
                    <Flex justify="center" alignItems="center">
                      <Image src="ukflag.png" boxSize="7" borderRadius="full" align="center"/>
                    </Flex>
                  </Flex>
                </Flex>
                </Box>
              
            </Grid>
          </Flex>
            </Flex>
          </>
       


      
        
    </>
  )
}




{/* <>
<Flex align="center" flexDir="column">
  <Box position="relative" textAlign="center">
    <Image src="europe1.png" w="100vw" maxh="500px" />
    <Text position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)" color="white" fontSize={['5xl']}  fontWeight="semibold">Europa</Text>
  </Box>
  <Text pt="5" pb="5" pl="5" pr="5" textAlign="justify">A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, 
    a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
  </Text>
  <Grid templateColumns="repeat(3, 1fr)" gap={7} pb="10">
  <Box alignItems="center">
      <Text textAlign="left" fontSize="45" color="yellow.400" fontWeight="600">50</Text>
      <Text textAlign="left" fontSize="20" color="gray.450" fontWeight="500">países</Text>
    </Box>

    <Box alignItems="center" >
      <Text textAlign="left" fontSize="45" color="yellow.400" fontWeight="600">60</Text>
      <Text textAlign="left" fontSize="20" color="gray.450" fontWeight="500">línguas</Text>
    </Box>

    <Box alignItems="center">
      <Text textAlign="left" fontSize="45" color="yellow.400" fontWeight="600">27</Text>
      <Text textAlign="left" fontSize="20" color="gray.450" fontWeight="500">cidades +100</Text>
    </Box>
  </Grid>
</Flex>
  <Text pb="10" pl="5" fontSize="20" color="gray.600" fontWeight="semibold">Cidades +100</Text>

  <Grid templateColumns={["repeat(1, 1fr)"]} gap={[1]} justifyItems="center" w="100%">

    <Box w={["250px","256px"]}>
    <Flex justify="center" flexDirection="column" pb="10" w="100%">
      <Image src="london.png"/>
      <Flex justify="center" flexDirection="row" p="3" borderBottom="1px" borderRight="1px" borderLeft="1px"  borderColor="yellow.400">
        <Box pr="20">
          <Text fontWeight="semibold" fontSize="20" pb="2" >Londres</Text>
          <Text color="gray.500">Reino Unido</Text>
        </Box>
        <Flex justify="center" alignItems="center">
          <Image src="ukflag.png" boxSize="7" borderRadius="full" align="center"/>
        </Flex>
      </Flex>
    </Flex>
    </Box>

    <Box w="256px">
    <Flex justify="center" flexDirection="column" pb="10" w="100%">
      <Image src="london.png"/>
      <Flex justify="center" flexDirection="row" p="3" borderBottom="1px" borderRight="1px" borderLeft="1px"  borderColor="yellow.400">
        <Box pr="20">
          <Text fontWeight="semibold" fontSize="20" pb="2" >Londres</Text>
          <Text color="gray.500">Reino Unido</Text>
        </Box>
        <Flex justify="center" alignItems="center">
          <Image src="ukflag.png" boxSize="7" borderRadius="full" align="center"/>
        </Flex>
      </Flex>
    </Flex>
    </Box>

    <Box w="256px">
    <Flex justify="center" flexDirection="column" pb="10" w="100%">
      <Image src="london.png"/>
      <Flex justify="center" flexDirection="row" p="3" borderBottom="1px" borderRight="1px" borderLeft="1px"  borderColor="yellow.400">
        <Box pr="20">
          <Text fontWeight="semibold" fontSize="20" pb="2" >Londres</Text>
          <Text color="gray.500">Reino Unido</Text>
        </Box>
        <Flex justify="center" alignItems="center">
          <Image src="ukflag.png" boxSize="7" borderRadius="full" align="center"/>
        </Flex>
      </Flex>
    </Flex>
    </Box>

    <Box w="256px">
    <Flex justify="center" flexDirection="column" pb="10" w="100%">
      <Image src="london.png"/>
      <Flex justify="center" flexDirection="row" p="3" borderBottom="1px" borderRight="1px" borderLeft="1px"  borderColor="yellow.400">
        <Box pr="20">
          <Text fontWeight="semibold" fontSize="20" pb="2" >Londres</Text>
          <Text color="gray.500">Reino Unido</Text>
        </Box>
        <Flex justify="center" alignItems="center">
          <Image src="ukflag.png" boxSize="7" borderRadius="full" align="center"/>
        </Flex>
      </Flex>
    </Flex>
    </Box>

  </Grid>


</> */}
