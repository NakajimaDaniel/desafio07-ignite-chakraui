
import  { Image, Container, Flex, Box, Text, useMediaQuery } from '@chakra-ui/react'



export function Banner() {

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)")


  
  return (
    <Flex w="100%" mb="8" pb="10">
      <Box position="relative">
        
        {isLargerThan700? (
          <>
            <Image src="bannerback.png" w="100vw"/>
            <Text position="absolute" top="20%"  left="10%" color="white" fontSize={["20","20","20","40"]}>5 Continentes,</Text>
            <Text position="absolute" top="35%"  left="10%" color="white"  fontSize={["20","20","20","40"]} >infinitas possibilidades.</Text>
            <Text position="absolute" top="55%"  left="10%" color="gray.500"  fontSize={["10","10","20"]} maxW={[300,300,400,500]}>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
            <Image position="absolute" top="20%" right="10%" src="Airplane.png" w="30%" />
          </>

        ): (
          <>
            <Image src="bannerback.png" w="100vw" h={[200]}/>
            <Text position="absolute" top="20%"  left="7%" color="white" fontSize={["20"]}>5 Continentes,</Text>
            <Text position="absolute" top="35%"  left="7%" color="white"  fontSize={["20"]} >infinitas possibilidades.</Text>
            <Text position="absolute" top="60%"  left="7%" color="gray.500"  fontSize={["15"]} w="90vw">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
          </>
        )}

      </Box>
      
    </Flex>
    
  )
}