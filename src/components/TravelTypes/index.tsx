import { Box, Flex, Grid, Image, Text, useMediaQuery, Wrap, ListItem } from "@chakra-ui/react";
import React from "react";


export function TravelTypes() {


  const [isLargerThan700] = useMediaQuery("(min-width: 700px)")

  return (
    <>

      {isLargerThan700? (
          <Flex justifyContent="center" pl={['4','6', '8']} pr={['4','6', '8']} pb={['4','6', '8']} mb={['4','6', '8']}>
            <Grid templateColumns="repeat(5, 1fr)" gap={[1,3]} w="100vw">

              <Box align="center">  
                <Image src="cocktail.png" boxSize={['10px','30px','50px','70px']} />
                <Text fontWeight="semibold" pt="4" color="gray.600">vida noturna</Text>
              </Box>

              <Box align="center">
                <Image src="surf.png" boxSize={['10px','30px','50px','70px']}/>
                <Text fontWeight="semibold" pt="4" color="gray.600">praia</Text>
              </Box>

              <Box align="center">
                <Image src="building.png" boxSize={['10px','30px','50px','70px']}/>
                <Text fontWeight="semibold" pt="4" color="gray.600">moderno</Text>
              </Box>

              <Box align="center" >
                <Image src="museum.png" boxSize={['10px','30px','50px','70px']}/>
                <Text fontWeight="semibold" pt="4" color="gray.600">clássico</Text>
              </Box>

              <Box align="center" >
                <Image src="earth.png" boxSize={['10px','30px','50px','70px']}/>
                <Text fontWeight="semibold" pt="4" color="gray.600">e mais ...</Text>
              </Box>
                
            </Grid>
          </Flex>
      ): (
        <>
          <Flex flexDir="column" align="center" pb="10">
            <Grid templateColumns="repeat(2, 1fr)" align="center" pb="10" gap="10">
              <li>vida noturna</li>
              <li>moderno</li>
              <li>praia</li>
              <li>clássico</li>
            </Grid>
            <li>e mais ...</li>
          </Flex>

        </>
      )}

    </>


    
    
  )
}

