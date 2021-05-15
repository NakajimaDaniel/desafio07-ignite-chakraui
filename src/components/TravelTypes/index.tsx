import { Box, Flex, Grid, Image, Text, Wrap } from "@chakra-ui/react";
import React from "react";


export function TravelTypes() {
  return (
    <Flex justifyContent="center" pl="8" pr="8" pb="8" mb="8">
      <Grid templateColumns="repeat(5, 1fr)" gap="1" w="100vw">

        <Box align="center">
          <Image src="cocktail.png" boxSize="10" />
          <Text fontWeight="semibold" pt="4" color="gray.600">vida noturna</Text>
        </Box>

        <Box align="center">
          <Image src="surf.png" boxSize="10"/>
          <Text fontWeight="semibold" pt="4" color="gray.600">praia</Text>
        </Box>

        <Box align="center">
          <Image src="building.png" boxSize="10"/>
          <Text fontWeight="semibold" pt="4" color="gray.600">moderno</Text>
        </Box>

        <Box align="center" >
          <Image src="museum.png" boxSize="10"/>
          <Text fontWeight="semibold" pt="4" color="gray.600">clássico</Text>
        </Box>

        <Box align="center" >
          <Image src="earth.png" boxSize="10"/>
          <Text fontWeight="semibold" pt="4" color="gray.600">e mais ...</Text>
        </Box>
          

      </Grid>
    </Flex>
  )
}